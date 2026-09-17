# SCAM-LINK AI — CSD Proposal Prototype

SCAM-LINK is a **synthetic, investigation-support prototype** for cross-case scam intelligence fusion.

The goal is not to replace existing complaint, banking, or enforcement systems. The prototype demonstrates how authorized case/evidence data can be transformed into an evidence-backed knowledge graph, cross-case links, campaign fingerprints, and investigator leads while preserving human review and provenance.

## Demo screens

- **Command Overview** — synthetic case metrics + campaign signal
- **Case Intelligence** — entities, linked cases, reason for linkage, source evidence
- **Network Explorer** — interactive knowledge graph with observed vs inferred relationships
- **Investigation Leads** — human-review queue; no automated enforcement
- **Evidence Architecture** — L0 raw evidence → L4 analytic inference + human review

## Safety / data statement

**All records in this repository are synthetic.**

- names are aliases
- phone numbers and bank accounts are masked placeholders
- domains use the reserved `.example` suffix
- case IDs beginning with `CSD-DEMO-` are fictional
- no output in the prototype should be interpreted as an allegation or investigative finding

## Run locally

No build step or package installation is required.

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Repository structure

```text
.
├── index.html
├── styles.css
├── app.js
├── data/
│   └── demo-data.js
└── docs/
    ├── PROPOSAL.md
    └── ARCHITECTURE.md
```

## Proposal positioning

The project should be described as an **AI Scam Intelligence Fusion Platform**, not as a replacement for AOC/CFR/Thaipoliceonline or as an autonomous enforcement system.

```text
Evidence
  ↓
AI-assisted extraction
  ↓
Entity resolution
  ↓
Evidence-backed relationship graph
  ↓
Cross-case linkage / campaign fingerprint
  ↓
Investigation lead
  ↓
Human review
```

## What is intentionally not in Phase 1

- automated account freezing
- automated takedown
- autonomous scam-baiting
- voiceprint identification
- real-time production bank/telecom integration without an authorized agreement
- GNN dependency before reviewed training data exists

See [docs/PROPOSAL.md](docs/PROPOSAL.md) and [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for the proposal narrative and production architecture direction.
