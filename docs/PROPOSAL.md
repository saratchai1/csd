# SCAM-LINK AI — Proposal Concept

## ชื่อโครงการ

**โครงการต้นแบบระบบปัญญาประดิษฐ์เพื่อเชื่อมโยงคดีอาชญากรรมออนไลน์และวิเคราะห์เครือข่ายเชิงข่าวกรองเพื่อสนับสนุนงานสืบสวน**

English: **AI Scam Intelligence Fusion Platform (SCAM-LINK)**

## Executive concept

SCAM-LINK ไม่ได้สร้างระบบรับแจ้งเหตุหรือระบบอายัดบัญชีใหม่ แต่เป็น **Intelligence Fusion Layer** ที่ช่วยนำข้อมูลคดี หลักฐาน และ digital/financial indicators ที่ได้รับอนุญาตมาเชื่อมโยงเป็นเครือข่ายเดียว เพื่อช่วยเจ้าหน้าที่ค้นพบความสัมพันธ์ข้ามคดีและสร้าง Investigation Lead ที่ตรวจสอบย้อนกลับถึงหลักฐานต้นทางได้

ระบบถูกออกแบบเป็น **decision-support system**: AI เสนอความเชื่อมโยงและสมมติฐาน แต่การพิจารณาและการดำเนินการตามกฎหมายยังคงเป็นหน้าที่ของเจ้าหน้าที่ผู้มีอำนาจ

## Problem statement

คดีอาชญากรรมออนไลน์จำนวนมากอาจดูเป็นคนละเหตุ แต่ใช้โครงสร้างร่วมกัน เช่น

- บัญชีธนาคารหรือเส้นทางเงินเดียวกัน
- เบอร์โทรศัพท์หรือ social identity เดียวกัน
- domain / URL / infrastructure ที่เกี่ยวข้องกัน
- scam script และ modus operandi ที่มีรูปแบบคล้ายกัน
- รูปแบบเวลาและลำดับการโอนเงินที่เกิดซ้ำ

ความท้าทายคือการเปลี่ยนข้อมูลรายคดีจำนวนมากให้เป็น **cross-case intelligence** ที่เจ้าหน้าที่สามารถใช้ค้นหาความสัมพันธ์และจัดลำดับการตรวจสอบได้เร็วขึ้น

## Pilot scope

MVP ตั้งใจพิสูจน์ 6 capability เท่านั้น:

1. **Evidence Ingestion** — รับข้อมูลคดีและหลักฐานที่ได้รับอนุญาต
2. **AI Evidence Extraction** — OCR/NLP/LLM-assisted extraction สำหรับบัญชี เบอร์ URL social ID เวลา และจำนวนเงิน
3. **Entity Resolution** — normalize และรวม entity ที่เป็นตัวเดียวกัน
4. **Crime Knowledge Graph** — แสดงความสัมพันธ์ระหว่าง Case, Account, Phone, Social, Domain และ Evidence
5. **Cross-Case Linkage** — เสนอคดีที่อาจเกี่ยวข้อง พร้อมเหตุผลและระดับความเชื่อมั่น
6. **Investigator Workspace** — ดู case, graph, evidence provenance และ Investigation Lead ในหน้าจอเดียว

## What is intentionally out of MVP

- automated account freezing
- automated takedown
- voice biometrics / voiceprint identification
- autonomous scam-baiting
- production blockchain tracing
- direct bank / telecom / exchange integration without an authorized data agreement

สิ่งเหล่านี้สามารถเป็น Phase 2–3 หลังจากผ่านการทดสอบด้านข้อมูล กฎหมาย governance และ operational workflow

## Key differentiator: cross-domain evidence fusion

ความใหม่ที่ proposal ควรเน้นไม่ใช่เพียง “AI ตรวจบัญชีม้า” แต่เป็นการเชื่อมหลาย domain ใน investigation workspace เดียว:

```text
Case + Evidence + Account + Phone + Social + URL + Wallet + Timeline
                              ↓
                     Entity Resolution
                              ↓
                     Knowledge Graph
                              ↓
          Exact Links / Graph Pattern / Similarity
                              ↓
                    Investigation Leads
                              ↓
                       Human Review
```

## Scam Campaign Fingerprint

เมื่อกลุ่มผู้กระทำเปลี่ยนเบอร์ บัญชี หรือ domain ใหม่ Exact Match อาจไม่เพียงพอ ระบบจึงสามารถสร้าง **Campaign Fingerprint** จากหลาย signal เช่น

- scam script similarity
- sequence ของการหลอก
- transfer cadence
- infrastructure reuse
- active time pattern
- money-flow topology

ผลลัพธ์ต้องแสดงเป็น **analytic inference** ไม่ใช่ fact และต้องผ่าน human review

## Investigation-grade provenance

ระบบแยกข้อมูลเป็นชั้น:

- L0 Raw Evidence
- L1 Extracted Fact
- L2 Resolved Entity
- L3 Observed Relationship
- L4 Analytic Inference
- Human Review

ทุก relationship ใน graph ต้องมี source, timestamp, extraction method, confidence, review status และ reviewer ที่สามารถ audit ได้

## Pilot KPI

เสนอวัดผลจาก workflow จริง ไม่ใช่แค่ model accuracy:

- **Time-to-Intelligence:** เวลาจากเปิดคดีจนพบ cross-case link
- **Cross-Case Discovery:** จำนวนความเชื่อมโยงที่ระบบช่วยค้นพบและเจ้าหน้าที่ยืนยันว่ามีประโยชน์
- **Entity Extraction Precision/Recall:** แยกตาม account / phone / URL / social ID
- **Lead Acceptance Rate:** สัดส่วน AI lead ที่ investigator ยอมรับเพื่อสืบค้นต่อ
- **Evidence Traceability:** สัดส่วน analytic result ที่ย้อนกลับถึงหลักฐานต้นทางได้ครบถ้วน
- **False-Link Rate:** ความเชื่อมโยงที่เจ้าหน้าที่ปฏิเสธ

## Suggested pilot scenario

เริ่มจาก **online investment scam** เพราะมีหลักฐานหลายชนิดและเหมาะกับการพิสูจน์ cross-domain fusion เช่น chat, social identity, domain, bank account, transfer record และ investment script

ใช้ historical/authorized dataset หรือ synthetic dataset ในระยะ demo โดยไม่ต้องอ้างว่ามี real-time bank/telecom connector ตั้งแต่ต้น

## Demo storyline

1. เปิด `CSD-DEMO-001`
2. AI แสดง entity ที่สกัดจากหลักฐาน
3. ระบบพบ exact bank-account match กับอีกคดี
4. เปิด Network Explorer และเห็นบัญชีหลายบัญชีไหลเข้า consolidation candidate
5. เปิด `CSD-DEMO-011` ซึ่งไม่มี exact entity match
6. ระบบเสนอว่าอาจอยู่ใน CAMP-017 จาก behavioral fingerprint พร้อม confidence และ evidence source
7. Investigator กดตรวจ evidence และเป็นผู้ตัดสินใจว่าจะรับหรือปฏิเสธ Lead

## North-star metric

> ลดเวลาจาก “รับคดีใหม่” ไปสู่ “พบความเชื่อมโยงที่นำไปตรวจสอบต่อได้” โดยไม่ลดทอนความสามารถในการตรวจสอบย้อนกลับและการตัดสินใจของเจ้าหน้าที่

## Public context references for proposal drafting

ควรตรวจสอบตัวเลขและช่วงเวลากับแหล่งทางการอีกครั้งก่อนนำ proposal ฉบับสุดท้ายไปยื่น:

- Bank of Thailand — fraud measures / Central Fraud Registry: https://www.bot.or.th/en/fraud/fraud-measure-development.html
- Royal Thai Police public information portal: https://saranitet.police.go.th/
- Ministry of Digital Economy and Society: https://www.mdes.go.th/

ข้อมูลใน web prototype ไม่ได้ใช้ข้อมูลคดีจริง และจงใจใช้ identifier แบบ masked / `.example` เพื่อไม่ให้สับสนกับบุคคลหรือระบบจริง
