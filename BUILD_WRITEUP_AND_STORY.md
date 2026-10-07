# Engineering Build Write-Up, Launch Post & Demo Script

---

## 1. Technical Build Write-Up

### A. Chosen Stack & Architectural Rationale
- **Core**: Next.js 14 (App Router), TypeScript, Tailwind CSS, Lucide React, Framer Motion.
- **Why**:
  - **Zero Layout Shift (CLS)** & Instant Sub-second Page Loads: Static compilation of project cases ensures zero hydration jitter when recruiters or engineering leads inspect the site.
  - **Zero-Config Vercel / Cloudflare Pages Deployment**: Clean single-command deployment with automatic preview branch isolation.
  - **Deterministic Client-Side Inference**: Implemented an in-browser tokenization and TF-IDF feature scoring engine directly in TypeScript, eliminating the latency and cold-start costs of external API endpoints for interactive candidate demonstrations.

### B. The Hardest Bug & How It Was Resolved
- **Failure Mode**: During rapid typing in the live routing sandbox, frequent asynchronous state updates caused rendering race conditions and UI stutters when computing n-gram permutations across 500+ character complaint strings.
- **Resolution**: Implemented React 18 `useTransition` coupled with memoized n-gram vocabulary lookup tables (`useMemo`). This non-blocking compute scheduling decouples high-frequency keystroke capture from the linear SVM matrix multiplication, guaranteeing smooth 60fps input response with a sub-30ms measured inference window.

### C. Where AI Accelerated Engineering
- AI was utilized to synthesize high-entropy adversarial test samples (multi-intent edge cases, punctuation noise, and ambiguous warranty cross-queries) to stress-test the calibrated probability thresholding and human fallback triage trigger.

### D. Next Technical Step
- Compile and bundle a quantized ONNX sentiment/routing model to execute directly in the browser via WebGPU using ONNX Runtime Web (`ort-web`), testing browser-native neural network acceleration without server roundtrips.

---

## 2. Build-in-Public Launch Post (Ready for LinkedIn & X)

> Most developer portfolios are static digital business cards. I wanted mine to act as a functional, measurable proof-of-work artifact.
>
> Today, I'm publishing my Applied AI & ML Engineering Portfolio: **https://[YOUR DOMAIN]**
>
> Here's what's inside—zero marketing fluff, 100% engineering systems:
>
> 🔹 **Interactive Browser Inference Sandbox**: Test the Kestrel Home Appliances support routing engine directly in your browser. Real-time tokenization, calibrated multi-class probability scoring, and sub-30ms latency with an automated human triage fallback when confidence dips below 65%.
>
> 🔹 **3-Beat Production Case Studies**:
> 1. **Kestrel Routing Engine**: TF-IDF + LinearSVC reaching 84.71% holdout accuracy and cutting 48-hour triage delays down to <200ms.
> 2. **ClinicFlow AI**: Air-gapped, zero-cloud-egress local speech-to-SOAP clinical documentation using faster-whisper and quantized Llama 3 8B.
> 3. **NewsWorld**: High-throughput RSS deduplication pipeline using sentence embeddings and pgvector cosine clustering (>91% precision).
>
> 🔹 **Verified FlyRank AI Graduate Credential**: Validated end-to-end production ML engineering competency.
>
> Built with Next.js 14, TypeScript, and Tailwind CSS.
>
> Check out the live sandbox and source code: https://github.com/aakashdubba/portfolio
>
> Feedback and technical discussions are welcome!
>
> #MachineLearning #AppliedAI #NLP #Nextjs #MLOps #TypeScript #SoftwareEngineering

---

## 3. 4-Minute Technical Demo Video Script

| Timestamp | Screen Display / Visual Action | Spoken Audio Voiceover Script |
| :--- | :--- | :--- |
| **0:00 - 0:30** | **Hero Section & Engineering Focus**<br>• Show headline, proof badges, and FlyRank badge. | "Hi everyone, I'm Aakash Dubba. This is a walkthrough of my Applied AI and ML Systems Portfolio. My focus is engineering production-grade machine learning pipelines that solve concrete operational bottlenecks—moving beyond toy notebooks into high-throughput, low-latency, and privacy-compliant systems." |
| **0:30 - 1:45** | **Interactive Routing Sandbox Demo**<br>• Click Case #1 (Washer drum).<br>• Show sub-20ms latency.<br>• Click Case #2 (Double billing).<br>• Type custom ambiguous ticket.<br>• Toggle raw JSON inspector. | "Let's jump straight to the working feature: the live Customer Support Intent and Route Engine. This runs client-side feature extraction and linear classification directly in the browser.<br><br>When I select this washer drum issue, notice the sub-20ms execution and 94% confidence routing to Mechanical Diagnostics. Now watch what happens if I type an ambiguous inquiry where confidence falls below 65%—the fallback gate immediately flags the ticket for Human Supervisor Triage.<br><br>Clicking the JSON tab exposes the exact structured REST payload schema consumed by downstream microservices." |
| **1:45 - 3:00** | **3-Beat Case Studies Deep Dive**<br>• Scroll to Case Studies section.<br>• Highlight ClinicFlow AI metrics & zero-cloud egress.<br>• Expand pipeline I/O schema.<br>• Review NewsWorld pgvector clustering. | "Every project on this site follows a strict 3-Beat format: Problem, What I Built, and Measurable Outcome.<br><br>In ClinicFlow AI, I addressed physician burnout by building an air-gapped local speech-to-SOAP pipeline with faster-whisper and quantized Llama 3 8B. It completes full consult drafts in under 45 seconds on local hardware with zero bytes of patient data leaving the host machine.<br><br>In NewsWorld, we suppressed over 60% duplicate wire stories across 200+ feeds using pgvector cosine clustering with sub-50ms query latencies." |
| **3:00 - 3:45** | **Architecture, Engineering Standards & Verification**<br>• Hover over skill categorizations.<br>• Point out ground-truth label integrity & verified badge. | "Under Architecture and Standards, you can inspect the production principles enforced across all my systems—including strict ground-truth labeling derived from final verified resolutions rather than noisy initial tags, and calibrated fallback gates.<br><br>The badge links directly to my verified FlyRank AI Cohort Graduate credential." |
| **3:45 - 4:00** | **Closing & Call to Action**<br>• Show GitHub repo links and contact options. | "All source repositories, architecture diagrams, and benchmark scripts are linked directly. Feel free to test the live sandbox or reach out via email or LinkedIn. Thank you!" |
