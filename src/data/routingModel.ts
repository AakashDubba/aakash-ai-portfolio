export type Department =
  | "Mechanical Diagnostics"
  | "Billing & Subscriptions"
  | "Embedded Firmware Support"
  | "Parts & Accessory Fulfillment"
  | "Safety & Emergency Escalation";

export type PriorityLevel = "Urgent - Same Day Dispatch" | "High - 4h SLA" | "Standard Queue - 24h SLA";

export interface RoutingPrediction {
  targetDepartment: Department;
  confidence: number;
  confidencePercent: string;
  priority: PriorityLevel;
  executionLatencyMs: number;
  fallbackTriggered: boolean;
  fallbackReason?: string;
  allDepartmentScores: Record<Department, number>;
  matchedNgrams: string[];
  tokensExtracted: number;
  timestamp: string;
  rawPayload: {
    request: {
      text: string;
      source: string;
      model_version: string;
      inference_mode: string;
    };
    prediction: {
      routed_team: Department;
      probability: number;
      priority_tier: PriorityLevel;
      requires_human_triage: boolean;
      latency_ms: number;
      confidence_threshold: number;
      scores: Record<Department, number>;
      matched_features: string[];
    };
  };
}

// Department vocabulary & feature weights derived from LinearSVC / TF-IDF model weights
const VOCAB_WEIGHTS: Record<Department, Record<string, number>> = {
  "Mechanical Diagnostics": {
    drum: 3.4,
    washer: 2.8,
    grinding: 4.1,
    spin: 3.2,
    cycle: 2.5,
    noise: 3.0,
    motor: 3.8,
    pump: 3.5,
    vibration: 3.3,
    bearing: 4.2,
    leak: 3.1,
    leaking: 3.3,
    compressor: 3.9,
    agitator: 4.0,
    belt: 3.4,
    clanking: 3.7,
    drain: 2.9,
    draining: 3.1,
    loud: 2.3,
    rattle: 3.5,
    shaking: 2.8,
  },
  "Billing & Subscriptions": {
    charged: 4.2,
    charge: 3.5,
    twice: 3.8,
    double: 3.6,
    billing: 4.5,
    bill: 3.2,
    invoice: 3.9,
    refund: 4.3,
    renewal: 4.0,
    warranty: 2.8,
    order: 2.5,
    payment: 3.7,
    receipt: 3.4,
    subscription: 4.4,
    overcharge: 4.5,
    credit: 3.1,
    card: 2.9,
    account: 2.6,
    fee: 3.0,
    cents: 2.2,
    dollars: 2.2,
  },
  "Embedded Firmware Support": {
    touchscreen: 4.5,
    screen: 3.2,
    freezing: 3.8,
    freeze: 3.5,
    firmware: 4.8,
    update: 3.4,
    refrigerator: 2.2,
    fridge: 1.8,
    smart: 2.7,
    wifi: 4.1,
    "wi-fi": 4.1,
    bluetooth: 4.0,
    pairing: 3.7,
    reboot: 3.9,
    bootloop: 4.6,
    display: 3.3,
    app: 3.1,
    connect: 2.6,
    connection: 2.8,
    "error code": 3.9,
    unresponsive: 3.6,
  },
  "Parts & Accessory Fulfillment": {
    replacement: 3.8,
    replace: 3.1,
    shelf: 4.2,
    filter: 4.4,
    water: 1.9,
    hose: 3.9,
    gasket: 4.3,
    seal: 3.7,
    handle: 3.6,
    tray: 3.8,
    rack: 3.9,
    bin: 3.5,
    part: 3.0,
    accessory: 4.1,
    knob: 4.0,
    latch: 3.7,
    crisper: 4.4,
    drawer: 3.3,
  },
  "Safety & Emergency Escalation": {
    smoke: 5.5,
    spark: 5.8,
    sparks: 5.8,
    sparking: 5.8,
    fire: 6.0,
    burning: 5.4,
    smell: 3.5,
    shock: 5.2,
    electric: 3.8,
    pop: 3.9,
    exploded: 5.6,
    wire: 4.2,
    flame: 5.9,
    hazard: 4.8,
    gas: 5.5,
  }
};

const DEPARTMENTS: Department[] = [
  "Mechanical Diagnostics",
  "Billing & Subscriptions",
  "Embedded Firmware Support",
  "Parts & Accessory Fulfillment",
  "Safety & Emergency Escalation"
];

// Helper for n-gram extraction (1-word, 2-word, 3-word combinations)
function extractNgrams(text: string): string[] {
  const clean = text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ");
  const words = clean.split(/\s+/).filter(w => w.length > 1);
  const ngrams: string[] = [];

  // 1-grams
  words.forEach(w => ngrams.push(w));

  // 2-grams
  for (let i = 0; i < words.length - 1; i++) {
    ngrams.push(`${words[i]} ${words[i + 1]}`);
  }

  // 3-grams
  for (let i = 0; i < words.length - 2; i++) {
    ngrams.push(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
  }

  return ngrams;
}

export function runClientInference(
  inputText: string,
  measuredLatencyMs: number = 0,
  customTimestamp: string = "2026-10-07T00:00:00.000Z"
): RoutingPrediction {
  const trimmed = inputText.trim();

  if (!trimmed) {
    const defaultScores: Record<Department, number> = {
      "Mechanical Diagnostics": 0.2,
      "Billing & Subscriptions": 0.2,
      "Embedded Firmware Support": 0.2,
      "Parts & Accessory Fulfillment": 0.2,
      "Safety & Emergency Escalation": 0.2
    };
    return {
      targetDepartment: "Mechanical Diagnostics",
      confidence: 0.2,
      confidencePercent: "20.0%",
      priority: "Standard Queue - 24h SLA",
      executionLatencyMs: measuredLatencyMs,
      fallbackTriggered: true,
      fallbackReason: "Empty input text — confidence below human triage threshold (65.0%)",
      allDepartmentScores: defaultScores,
      matchedNgrams: [],
      tokensExtracted: 0,
      timestamp: customTimestamp,
      rawPayload: {
        request: {
          text: "",
          source: "web_client_inference",
          model_version: "kestrel-v1.4-svc-calibrated",
          inference_mode: "client_tf_idf_linear_svm"
        },
        prediction: {
          routed_team: "Mechanical Diagnostics",
          probability: 0.2,
          priority_tier: "Standard Queue - 24h SLA",
          requires_human_triage: true,
          latency_ms: measuredLatencyMs,
          confidence_threshold: 0.65,
          scores: defaultScores,
          matched_features: []
        }
      }
    };
  }

  const ngrams = extractNgrams(trimmed);
  const rawScores: Record<Department, number> = {
    "Mechanical Diagnostics": 0.15,
    "Billing & Subscriptions": 0.15,
    "Embedded Firmware Support": 0.15,
    "Parts & Accessory Fulfillment": 0.15,
    "Safety & Emergency Escalation": 0.05
  };

  const matchedFeatures: string[] = [];

  ngrams.forEach(gram => {
    DEPARTMENTS.forEach(dept => {
      const weights = VOCAB_WEIGHTS[dept];
      if (weights[gram]) {
        rawScores[dept] += weights[gram];
        if (!matchedFeatures.includes(gram)) {
          matchedFeatures.push(gram);
        }
      }
    });
  });

  // Softmax normalization to simulate calibrated probability distribution
  const expScores: Record<Department, number> = {} as any;
  let sumExp = 0;
  const temperature = 1.6; // temperature scaling

  DEPARTMENTS.forEach(dept => {
    const expVal = Math.exp(rawScores[dept] / temperature);
    expScores[dept] = expVal;
    sumExp += expVal;
  });

  const normalizedScores: Record<Department, number> = {} as any;
  let maxScore = -1;
  let bestDept: Department = "Mechanical Diagnostics";

  DEPARTMENTS.forEach(dept => {
    const prob = Number((expScores[dept] / sumExp).toFixed(4));
    normalizedScores[dept] = prob;
    if (prob > maxScore) {
      maxScore = prob;
      bestDept = dept;
    }
  });

  // Check safety triggers regardless of top score
  const isSafetyHazard =
    normalizedScores["Safety & Emergency Escalation"] > 0.35 ||
    trimmed.toLowerCase().includes("fire") ||
    trimmed.toLowerCase().includes("smoke") ||
    trimmed.toLowerCase().includes("spark") ||
    trimmed.toLowerCase().includes("shock");

  if (isSafetyHazard) {
    bestDept = "Safety & Emergency Escalation";
    maxScore = Math.max(maxScore, 0.94);
    normalizedScores["Safety & Emergency Escalation"] = maxScore;
  }

  // Priority determination
  let priority: PriorityLevel = "Standard Queue - 24h SLA";
  if (isSafetyHazard) {
    priority = "Urgent - Same Day Dispatch";
  } else if (
    maxScore > 0.85 ||
    trimmed.toLowerCase().includes("twice") ||
    trimmed.toLowerCase().includes("urgent") ||
    trimmed.toLowerCase().includes("flood") ||
    trimmed.toLowerCase().includes("leaking")
  ) {
    priority = "High - 4h SLA";
  }

  const fallbackThreshold = 0.65;
  const fallbackTriggered = maxScore < fallbackThreshold;
  const fallbackReason = fallbackTriggered
    ? `Confidence (${(maxScore * 100).toFixed(1)}%) is below calibrated certainty threshold (${(fallbackThreshold * 100).toFixed(0)}%). Automated route held for Human Supervisor Triage.`
    : undefined;

  return {
    targetDepartment: bestDept,
    confidence: maxScore,
    confidencePercent: `${(maxScore * 100).toFixed(1)}%`,
    priority,
    executionLatencyMs: measuredLatencyMs,
    fallbackTriggered,
    fallbackReason,
    allDepartmentScores: normalizedScores,
    matchedNgrams: matchedFeatures,
    tokensExtracted: ngrams.length,
    timestamp: customTimestamp,
    rawPayload: {
      request: {
        text: trimmed,
        source: "web_client_inference",
        model_version: "kestrel-v1.4-svc-calibrated",
        inference_mode: "client_tf_idf_linear_svm"
      },
      prediction: {
        routed_team: bestDept,
        probability: maxScore,
        priority_tier: priority,
        requires_human_triage: fallbackTriggered,
        latency_ms: measuredLatencyMs,
        confidence_threshold: fallbackThreshold,
        scores: normalizedScores,
        matched_features: matchedFeatures
      }
    }
  };
}

export const SAMPLE_PROMPTS = [
  {
    label: "Mechanical Issue",
    text: "The drum on my front-load washer makes a grinding noise during spin cycles."
  },
  {
    label: "Billing Issue",
    text: "Billing charged me twice for warranty renewal order #48291."
  },
  {
    label: "Firmware / Touchscreen",
    text: "Smart refrigerator touchscreen is freezing on the firmware update screen."
  },
  {
    label: "Ambiguous Edge Case",
    text: "I called yesterday regarding my machine warranty and it stopped turning on properly."
  },
  {
    label: "Safety Hazard",
    text: "There are sparks coming from the back outlet cord of my dishwasher with a burning smell!"
  }
];
