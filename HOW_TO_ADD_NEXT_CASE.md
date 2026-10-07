# How to Add the Next Case Study

This portfolio repository is designed around a single typed content store (`src/data/projects.ts`). To publish a new production case study, you only need to modify one file.

---

## 1. Step-by-Step Implementation

1. Open [`src/data/projects.ts`](./src/data/projects.ts).
2. Append a new object to the `PROJECTS_DATA` array conforming to the `ProjectCaseStudy` TypeScript interface:

```typescript
{
  id: "unique-project-slug",
  title: "Project Name — Subsystem Functional Descriptor",
  tagline: "One-sentence high-impact technical summary of what was engineered.",
  category: "NLP & Classification" | "Local LLMs & Speech" | "Semantic Search & Vector DBs",
  
  // Beat 1: The Bottleneck / Problem
  problem: "Concrete operational failure mode, baseline failure metric (e.g. error rate, hours wasted, cost), and why existing solutions failed.",
  
  // Beat 2: What I Built (Architecture & Systems)
  whatIBuilt: [
    "Specific architecture decision 1 (e.g., choice of model, quantization, or pipeline).",
    "Data engineering & ground truth labeling pipeline details.",
    "Safety / fallback / calibration mechanism implemented.",
    "Deployment runtime, API framework, and containerization setup."
  ],
  
  // Beat 3: Measurable Outcome
  outcome: [
    "Verified holdout metric comparison against legacy baseline.",
    "Latency or throughput metric under simulated or real load.",
    "Cost or engineering time reduction metric."
  ],
  
  // Key Metric Callout Badges
  metrics: [
    { label: "Primary Accuracy/F1", value: "92.4%", comparison: "+14.2% over baseline" },
    { label: "Inference Latency", value: "<18ms", comparison: "p99 benchmark" },
    { label: "Throughput", value: "1,200 req/s", comparison: "Single worker container" },
    { label: "Operational Savings", value: "85%", comparison: "Manual queue elimination" }
  ],
  
  stack: ["Python", "PyTorch", "FastAPI", "Docker", "ONNX Runtime"],
  
  architecture: {
    input: "Description of raw incoming payload / streaming format",
    processing: "Detailed ML model and transformation sequence",
    output: "Structured response schema and downstream dispatch"
  },
  
  githubUrl: "https://github.com/aakashdubba/project-repo",
  demoUrl: "https://demo.aakashdubba.com", // Optional
  liveInteractive: false // Set to true if linking to top sandbox
}
```

3. Save the file. Next.js App Router hot-reloads and automatically renders the case study card into the responsive feed.

---

## 2. Pre-Deployment Verification Checklist

Before opening a pull request or pushing to `main`:

- [ ] **Strict 3-Beat Format**: Ensure the content strictly follows *Problem → What I Built → Measurable Outcome*. No fluffy marketing buzzwords.
- [ ] **Metric Verification**: Are all percentage gains, F1 scores, latencies, and memory footprints backed by reproducible benchmarks or test logs?
- [ ] **Ground-Truth Label Integrity**: Confirm that ground truth was derived from verified resolution states, not noisy human triage tags.
- [ ] **Architecture Pipeline Spec**: Verify that `input`, `processing`, and `output` fields in `architecture` are populated with precise data structures.
- [ ] **Valid Hyperlinks**: Confirm `githubUrl` and any live demo links resolve correctly.
- [ ] **Mobile & Viewport Testing**: Test on mobile (375px), tablet (768px), and desktop (1280px) to ensure clean typography with zero horizontal overflow.

---

## 3. Automated Route & Build Verification

Run the local build to ensure TypeScript types and Next.js bundle validate cleanly:

```bash
npm run build
```

If the build completes with `✓ Compiled successfully`, the case study is production-ready for zero-config deployment on Vercel or Cloudflare Pages.
