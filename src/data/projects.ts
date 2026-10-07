export interface Metric {
  label: string;
  value: string;
  comparison?: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  category: "NLP & Classification" | "Local LLMs & Speech" | "Semantic Search & Vector DBs";
  problem: string;
  whatIBuilt: string[];
  outcome: string[];
  metrics: Metric[];
  stack: string[];
  architecture: {
    input: string;
    processing: string;
    output: string;
  };
  githubUrl?: string;
  demoUrl?: string;
  liveInteractive?: boolean;
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "kestrel-router",
    title: "Kestrel Home Appliances — AI Service Request Routing Engine",
    tagline: "Multi-class character TF-IDF + LinearSVC NLP classifier replacing fragile heuristics with sub-200ms automated ticket triage.",
    category: "NLP & Classification",
    problem:
      "Legacy rule engine misrouted 22.8% of multi-issue customer tickets, driving support latency to 48 hours and requiring manual reassignment for 1,200+ tickets weekly across 5 distinct warranty and maintenance departments.",
    whatIBuilt: [
      "Designed and benchmarked multi-class NLP pipeline comparing character-level TF-IDF (n-grams 2-5) + LinearSVC against transformer embedding baselines, achieving higher throughput and calibration on specialized appliance nomenclature.",
      "Trained on historical ticket resolutions using verified department closures as ground-truth labels rather than noisy initial agent tags.",
      "Implemented calibrated probability thresholding (fallback trigger < 65% confidence) to route ambiguous edge-case tickets directly to human supervisor queues.",
      "Containerized with FastAPI and Pydantic validation for asynchronous batching and sub-200ms p99 inference latency."
    ],
    outcome: [
      "Achieved 84.71% holdout accuracy and 0.8557 Macro F1 score, outperforming legacy keyword rules (77.17% baseline) by +7.54%.",
      "Reduced average initial triage latency from 48 hours to <200ms automated dispatch.",
      "Eliminated ~980 manual reassignment interventions weekly in production load simulations."
    ],
    metrics: [
      { label: "Holdout Accuracy", value: "84.71%", comparison: "+7.54% over baseline (77.17%)" },
      { label: "Macro F1 Score", value: "0.8557", comparison: "Balanced across 5 classes" },
      { label: "Inference Latency", value: "<200ms", comparison: "Down from 48h manual queue" },
      { label: "Misroute Reduction", value: "81.6%", comparison: "Fallback threshold at 0.65" }
    ],
    stack: ["Python", "scikit-learn", "FastAPI", "Pydantic", "Docker", "GitHub Actions", "pytest"],
    architecture: {
      input: "Raw multi-line customer complaint text & warranty order metadata",
      processing: "Char-level TF-IDF (2-5 gram) -> LinearSVC with Platt scaling calibration",
      output: "Target department enum, priority flag, confidence float, triage fallback boolean"
    },
    githubUrl: "https://github.com/aakashdubba/kestrel-intent-router",
    demoUrl: "#interactive-sandbox",
    liveInteractive: true
  },
  {
    id: "clinicflow-ai",
    title: "ClinicFlow AI — Local Ambient Clinical Documentation & ICD-10 Extraction",
    tagline: "Air-gapped, zero-cloud-egress local speech-to-SOAP note generator with automated ICD-10 diagnostic code candidate mapping.",
    category: "Local LLMs & Speech",
    problem:
      "Physicians spend 1.5–2 hours per shift transcribing patient audio consults and manually looking up billing diagnosis codes, risking physician burnout and delayed chart completion under HIPAA constraints.",
    whatIBuilt: [
      "Engineered an offline-first clinical pipeline chaining faster-whisper (CTranslate2 INT8 quantized Whisper) for real-time audio transcription on local host hardware.",
      "Integrated Ollama-served Llama 3 8B (Q4_K_M quantization) with custom structured clinical prompting to synthesize raw transcriptions into standard 4-part SOAP notes (Subjective, Objective, Assessment, Plan).",
      "Built deterministic rule-augmented regex and vector matching against the CMS ICD-10-CM code registry to extract top billing diagnosis candidates.",
      "Ensured zero network egress: audio binaries, intermediate transcripts, and generated records stay strictly in local memory and host storage."
    ],
    outcome: [
      "Generated comprehensive structured clinical drafts in under 45 seconds locally on consumer workstation GPUs (RTX 4060/M2 Max).",
      "Zero patient health information (PHI) transmitted over external networks, meeting strict HIPAA air-gap compliance out-of-the-box.",
      "Reduced estimated post-shift charting time per patient encounter from 14 minutes to ~2.5 minutes review time."
    ],
    metrics: [
      { label: "Local Generation Time", value: "<45s", comparison: "Complete SOAP draft from 5m audio" },
      { label: "Data Egress", value: "0 bytes", comparison: "100% offline local inference" },
      { label: "Quantization Size", value: "4.7 GB", comparison: "Llama 3 8B Q4_K_M via Ollama" },
      { label: "ICD-10 Precision", value: "88.4%", comparison: "Top-3 candidate suggestions" }
    ],
    stack: ["Python", "Ollama", "Llama 3 8B", "faster-whisper", "FastAPI", "React", "TypeScript", "SQLite"],
    architecture: {
      input: "Multi-channel WAV/M4A clinical encounter audio stream (3-10 minutes)",
      processing: "faster-whisper INT8 STT -> Structured prompt pipeline -> Llama 3 8B Q4_K_M local LLM",
      output: "Formatted Markdown SOAP note + Ranked ICD-10 billing code candidates"
    },
    githubUrl: "https://github.com/aakashdubba/clinicflow-ai"
  },
  {
    id: "newsworld-dedup",
    title: "NewsWorld — Semantic Intelligence & Deduplication Engine",
    tagline: "High-throughput asynchronous RSS aggregation pipeline with embedding clustering via pgvector to suppress syndication noise.",
    category: "Semantic Search & Vector DBs",
    problem:
      "Aggregating 200+ RSS tech streams generated over 60% duplicate article variants, diluting critical market signal identification and overwhelming downstream content analysts with redundant reads.",
    whatIBuilt: [
      "Constructed distributed crawling workers in Celery and Redis to ingest, clean, and normalize 10,000+ daily articles across heterogeneous RSS and atom feeds.",
      "Generated dense sentence embeddings via all-MiniLM-L6-v2 and stored vectors in PostgreSQL with pgvector HNSW indexing.",
      "Implemented dynamic cosine similarity clustering (threshold 0.86) to group syndicated republished stories into single parent story clusters.",
      "Developed automated multi-source headline synthesis and bullet-point takeaway extraction on clustered documents."
    ],
    outcome: [
      "Suppressed near-duplicate syndication feeds with >91% precision, saving ~70% of manual analyst review time.",
      "Sub-50ms vector similarity lookup across 250,000+ indexed news embeddings using pgvector HNSW indexes.",
      "Sustained 24/7 autonomous ingestion throughput without memory leaks or Redis queue backlog."
    ],
    metrics: [
      { label: "Duplicate Suppression", value: ">91%", comparison: "Cosine similarity cluster threshold 0.86" },
      { label: "Analyst Time Saved", value: "70%", comparison: "Consolidated multi-wire duplicates" },
      { label: "pgvector Query Latency", value: "<50ms", comparison: "HNSW index over 250k documents" },
      { label: "Daily Ingestion Load", value: "10,000+", comparison: "Articles across 200+ RSS feeds" }
    ],
    stack: ["Python", "PostgreSQL", "pgvector", "Celery", "Redis", "FastAPI", "Next.js", "Docker Compose"],
    architecture: {
      input: "200+ RSS feeds ingested via async Celery beats worker pool",
      processing: "HTML strip -> all-MiniLM-L6-v2 embeddings -> pgvector HNSW cosine search",
      output: "Clustered story graph with synthesized master headline and key takeaways"
    },
    githubUrl: "https://github.com/aakashdubba/newsworld-semantic-engine"
  }
];
