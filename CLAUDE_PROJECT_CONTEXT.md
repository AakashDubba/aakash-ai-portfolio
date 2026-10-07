# Project Context & AI Coding Assistant Memory

This file serves as persistent memory for any AI assistant (Claude, Gemini, Antigravity, Copilot) when reading, refactoring, or expanding this repository.

---

## 1. Developer Persona & Identity
- **Engineer**: Aakash Dubba
- **Role**: Applied AI & Machine Learning Systems Engineer
- **Core Focus**: High-throughput NLP classification pipelines, local offline LLM systems (Ollama / Whisper), and semantic search architectures (pgvector / embeddings).
- **Credentials**: FlyRank AI Internship Verified Cohort Graduate ([Verification Link](https://aifluency.flyrank.ai/verify)).
- **Links**:
  - GitHub: [github.com/aakashdubba](https://github.com/aakashdubba)
  - LinkedIn: [linkedin.com/in/aakashdubba](https://linkedin.com/in/aakashdubba)
  - Contact: [YOUR PUBLIC EMAIL]

---

## 2. Strict Tone & Engineering Guidelines (NO AI FLUFF)

### Forbidden Terms:
Never use fluffy, hyperbolic, or generic corporate AI adjectives:
- ❌ "passionate about", "delving into", "tapestry", "unleashing", "groundbreaking", "spearheading", "state-of-the-art marvel", "revolutionizing".

### Required Tone:
- Technical, concrete, metric-driven, and verifiable.
- Every architectural decision must state the *trade-off* (e.g., choosing LinearSVC over a 7B LLM to achieve sub-20ms latency and 100x lower infrastructure cost).
- Ground-truth labeling integrity: emphasize training on actual verified outcomes over initial noisy tags.

---

## 3. The Mandatory 3-Beat Case Study Format

All additions to `src/data/projects.ts` must conform strictly to:

```markdown
### Beat 1: Problem / Bottleneck
- Concrete operational bottleneck.
- Quantified baseline failure rate or latency (e.g., "misrouted 22.8% of tickets", "wasted 2 hours per shift").

### Beat 2: What I Built (Systems & Architecture)
- Specific modeling, feature engineering, and inference engine details.
- Data ingestion, tokenization, or quantization choices.
- Safety / fallback / calibration thresholding logic.

### Beat 3: Measurable Outcome
- Holdout evaluation score (Holdout Accuracy, Macro F1, Precision/Recall).
- Concrete operational impact (latency reduction from 48h to <200ms, zero-egress compliance).
```

---

## 4. Codebase Architecture Quick Reference

- **UI Framework**: Next.js 14+ App Router, Tailwind CSS, TypeScript.
- **Client Inference Sandbox**: [`src/data/routingModel.ts`](./src/data/routingModel.ts) & [`src/components/InteractiveRouterSandbox.tsx`](./src/components/InteractiveRouterSandbox.tsx).
- **Content Store**: [`src/data/projects.ts`](./src/data/projects.ts).
- **Skills & Standards**: [`src/data/skills.ts`](./src/data/skills.ts).
- **Verification Badge**: [`src/components/FlyRankBadge.tsx`](./src/components/FlyRankBadge.tsx).
