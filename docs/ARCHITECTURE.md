# SCAM-LINK MVP Architecture

## 1. Design goals

1. **Evidence-first** — ทุก analytic result ต้องย้อนกลับไปที่ source ได้
2. **Fact ≠ inference** — observed relationship และ AI hypothesis ต้องมี representation แยกกัน
3. **Human-in-the-loop** — ระบบเสนอ lead แต่ไม่ดำเนินการบังคับใช้กฎหมายอัตโนมัติ
4. **Connector-ready** — future bank/telecom/OSINT connectors เพิ่มได้โดยไม่เปลี่ยน domain model หลัก
5. **Pilot-safe** — เริ่มได้ด้วย synthetic หรือ historical authorized data

## 2. Logical architecture

```text
[Authorized Data / Evidence]
        |
        v
[Ingestion + Validation]
        |
        +--> Object Store (raw evidence)
        |
        v
[OCR / NLP / LLM-assisted Extraction]
        |
        v
[Canonical Entity Layer]
  Case / Person / Account / Phone /
  Social / URL / Domain / Wallet / IP
        |
        v
[Entity Resolution]
        |
        v
[Evidence-backed Relationship Store]
        |
        v
[Knowledge Graph + Analytics]
  exact match
  connected components
  community detection
  centrality
  temporal / flow patterns
  semantic fingerprint
        |
        v
[Lead Service]
        |
        v
[Investigator Workspace]
  Case Intelligence
  Network Explorer
  Evidence Provenance
  Human Review
```

## 3. Core data model

### Entity

```json
{
  "id": "entity-uuid",
  "type": "bank_account",
  "canonical_value": "masked-or-tokenized-value",
  "classification": "restricted",
  "created_at": "ISO-8601"
}
```

### Evidence

```json
{
  "id": "evidence-uuid",
  "case_id": "case-uuid",
  "type": "transfer_slip",
  "object_uri": "restricted://...",
  "sha256": "...",
  "captured_at": "ISO-8601",
  "ingested_at": "ISO-8601"
}
```

### Relationship

```json
{
  "id": "edge-uuid",
  "source_entity_id": "...",
  "predicate": "transferred_to",
  "target_entity_id": "...",
  "kind": "observed",
  "evidence_ids": ["evidence-uuid"],
  "method": "exact_match",
  "confidence": 1.0,
  "review_status": "confirmed",
  "reviewed_by": "user-uuid"
}
```

### Analytic inference

```json
{
  "id": "inference-uuid",
  "type": "possible_campaign_membership",
  "subject_ids": ["case-uuid"],
  "supporting_evidence_ids": ["..."],
  "feature_summary": ["script_similarity", "transfer_cadence", "shared_infrastructure"],
  "confidence": 0.84,
  "review_status": "pending"
}
```

## 4. Trust hierarchy for linkage

จากน่าเชื่อถือสูงไปต่ำ:

1. exact identifier match
2. normalized identifier match
3. confirmed entity resolution
4. graph / temporal pattern
5. semantic similarity
6. AI-generated hypothesis

UI ต้องไม่รวมทุกอย่างเป็นคะแนนเดียวโดยซ่อนเหตุผล

## 5. Suggested production stack (not required for static demo)

- Frontend: React / Next.js or equivalent
- API: TypeScript or Python service layer
- Relational store: PostgreSQL
- Graph: start with relational edge tables + graph queries; add dedicated graph database only when scale/use-case justifies it
- Search: PostgreSQL full-text/vector extension or dedicated search layer
- Evidence store: S3-compatible object storage with immutable hashes
- Async jobs: queue for OCR, extraction, enrichment and graph rebuild
- Identity/access: RBAC/ABAC integrated with agency identity provider
- Audit: append-only audit events

A dedicated GNN is **not required in Phase 1**. Start with explainable graph algorithms and accumulate reviewed outcomes before training supervised graph models.

## 6. Security baseline

- TLS in transit and encryption at rest
- field-level protection/tokenization for high-risk identifiers
- case-level access policy
- least privilege + role segregation
- immutable audit trail for viewing/export/review actions
- evidence hashing and chain-of-custody metadata
- PII masking in commander/aggregate views
- model/version metadata for every AI extraction/inference
- retention and deletion policy aligned with legal/agency requirements

## 7. Prototype implementation in this repository

Current branch intentionally uses a dependency-free static app with synthetic data. This validates the proposed workflow and UI before committing to production infrastructure.
