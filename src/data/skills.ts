export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level?: string;
    description: string;
  }[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Languages & Core",
    skills: [
      { name: "Python", description: "Production services, scientific computing, PyTorch/scikit-learn pipelines, typing/mypy" },
      { name: "TypeScript / JavaScript", description: "Next.js App Router, React component architectures, Node.js tooling" },
      { name: "SQL", description: "PostgreSQL schema design, query optimization, pgvector indexing, migrations" },
      { name: "Bash / Shell", description: "CI/CD scripting, server automation, container entrypoints, environment configs" }
    ]
  },
  {
    name: "Machine Learning & Applied AI",
    skills: [
      { name: "scikit-learn", description: "TF-IDF pipelines, LinearSVC/logistic regression, cross-validation, calibration" },
      { name: "PyTorch & Transformers", description: "Fine-tuning transformer architectures, tokenization, ONNX export" },
      { name: "Local LLMs & Ollama", description: "Quantized model serving (Llama 3, Mistral), structured prompting, JSON schema outputs" },
      { name: "Speech & Audio (Whisper)", description: "faster-whisper, CTranslate2 INT8 quantization, streaming audio chunking" },
      { name: "Vector Databases & Embeddings", description: "pgvector, sentence-transformers (all-MiniLM-L6-v2), cosine similarity clustering" },
      { name: "LangChain / Prompt Eng", description: "Deterministic structured routing, zero-shot and few-shot evaluation frameworks" }
    ]
  },
  {
    name: "Backend, Infrastructure & MLOps",
    skills: [
      { name: "FastAPI & Pydantic", description: "Asynchronous REST endpoints, schema validation, dependency injection, OpenAPI" },
      { name: "Docker & Containerization", description: "Multi-stage builds, slim Python images, reproducible ML inference runtime" },
      { name: "Redis & Celery", description: "Asynchronous task queues, background scraping workers, rate-limiting caches" },
      { name: "CI/CD & Testing", description: "GitHub Actions, pytest, black/ruff formatting, automated holdout metric validation" },
      { name: "Next.js & Frontend", description: "Server/client component boundaries, Tailwind CSS, high-performance UI engineering" }
    ]
  }
];

export const ENGINEERING_STANDARDS = [
  {
    title: "Ground-Truth Label Integrity",
    description: "Train models against final verified resolution departments and ticket outcomes rather than initial, noisy human triage tags."
  },
  {
    title: "Calibrated Fallback Thresholds",
    description: "Every automated ML routing pipeline enforces confidence ceilings; tickets scoring below calibrated certainty (<65%) route directly to human-in-the-loop review."
  },
  {
    title: "Zero-Cloud Egress for Sensitive Data",
    description: "Design local, quantized on-prem pipelines (Whisper + Ollama) for PHI/PII sensitive domains where cloud transmission violates regulatory air-gaps."
  },
  {
    title: "Measurable Latency & Cost Budgets",
    description: "Default to lightweight linear/TF-IDF and quantized architectures before deploying expensive GPU LLMs when sub-50ms latency is mandatory."
  }
];
