# Next Project Roadmap: ClinicFlow AI v2

## Project Overview
- **Project Name**: ClinicFlow AI v2 (Real-Time Audio Streaming & ONNX Runtime)
- **Target Release**: Q4 2026 / Next Sprint
- **Engineering Lead**: Aakash Dubba

---

## 1. Technical Objectives & Architectural Shifts

### A. Real-Time WebSocket Audio Streaming
- **Current Limitation (v1)**: Batch audio ingestion requires the physician to stop recording and wait ~35–45s for complete transcription and SOAP note synthesis.
- **v2 Solution**: Implement streaming WebRTC / WebSocket audio chunking (500ms frames) running against a streaming Whisper encoder, providing instant rolling transcription while the clinical consult is still underway.

### B. ONNX Runtime & INT8 Quantization
- **Current Limitation (v1)**: PyTorch / faster-whisper native runtime dependencies require full CUDA / CTranslate2 toolchain.
- **v2 Solution**: Export clinical NLP tokenizers and multi-class ICD-10 diagnostic classifiers to ONNX format. Execute on ONNX Runtime with INT8 quantization for sub-10ms inference and minimal CPU/GPU memory footprint across cross-platform clinical workstations.

### C. Automated EHR FHIR JSON Export
- Structure generated SOAP clinical notes directly into HL7 FHIR (Fast Healthcare Interoperability Resources) JSON format for direct ingestion into hospital electronic medical record systems (Epic / Cerner).

---

## 2. Key Milestones & Target Metrics

| Milestone | Target Deliverable | Success Benchmark Metric |
| :--- | :--- | :--- |
| **M1: Streaming Pipeline** | WebSocket audio chunker + streaming STT | <300ms transcription latency per audio chunk |
| **M2: Model ONNX Export** | ICD-10 Classifier exported to `.onnx` | <8ms CPU inference; <50MB binary size |
| **M3: End-to-End Test** | Full 15-minute simulated clinical encounter | <5s final note generation post-consult finish |
| **M4: Benchmark Publication** | Case study #4 added to portfolio repo | All metrics verified with unit & load tests |

---

## 3. Scheduled Review & Milestone Cadence

> [!IMPORTANT]
> **Active Recurring Engineering Reminder:**  
> **Frequency**: Every alternate Saturday at 10:00 AM IST  
> **Action**: Run test suite, measure latency/memory benchmarks, and commit next case study milestone to [`src/data/projects.ts`](./src/data/projects.ts).
