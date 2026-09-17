# SCAM-LINK — 3-Minute Demo Script

## 0:00–0:30 — ตั้งโจทย์

เปิดหน้า **Command Overview**

> “ปัญหาที่เราจะทดลองแก้ไม่ใช่การรับแจ้งคดีเพิ่ม แต่คือเมื่อมีคดีใหม่เข้ามา เจ้าหน้าที่จะรู้ได้เร็วแค่ไหนว่าคดีนี้เกี่ยวข้องกับเครือข่ายเดิมหรือไม่”

ชี้ให้เห็นป้าย **SYNTHETIC DEMO** เพื่อยืนยันว่าข้อมูลทั้งหมดใน prototype เป็นข้อมูลจำลอง

## 0:30–1:15 — Case Intelligence

เปิด `CSD-DEMO-001`

ชี้ให้เห็น entity ที่ระบบสกัดจากหลักฐาน:

- Phone
- LINE
- Bank account
- Domain

จากนั้นชี้ **Linked Cases**

> “คดี 001 กับคดี 004 เชื่อมกันจาก exact bank-account match ส่วนคดีอื่นอาจเชื่อมจาก LINE identity หรือ behavioral pattern โดยระบบแสดงเหตุผลของแต่ละ link แยกกัน”

เปิด Evidence เพื่อย้ำว่า relationship ย้อนกลับถึง source ได้

## 1:15–2:00 — Network Explorer

เปิด **Network Explorer**

ชี้เส้นทึบ = observed relationship และเส้นประ = analytic inference

กด `DEMO-HUB-01`

> “บัญชีนี้เป็น consolidation candidate จากหลายเส้นทาง แต่ระบบยังเรียกว่า candidate ไม่ใช่ข้อสรุปว่าบุคคลหรือบัญชีมีความผิด”

กด `CAMP-017`

> “Campaign เป็น AI hypothesis ซึ่งต้องผ่าน human review”

## 2:00–2:35 — Campaign Fingerprint

กลับไปดู `CSD-DEMO-011`

> “จุดสำคัญคือคดี 011 ไม่มี identifier ตรงกับคดี 001 แต่มีพฤติกรรมคล้ายกันหลายด้าน เช่น script, transfer cadence และ infrastructure pattern ระบบจึงเสนอว่าควรตรวจสอบว่าอาจเป็น campaign เดียวกันหรือไม่”

เน้นคำว่า **เสนอให้ตรวจสอบ** ไม่ใช่ **ตัดสินว่าใช่**

## 2:35–3:00 — Investigation Lead

เปิดหน้า **Investigation Leads**

> “Output สุดท้ายของ AI ไม่ใช่หมายจับหรือคำสั่งอายัด แต่เป็น Investigation Lead พร้อมเหตุผล confidence และ evidence reference ให้เจ้าหน้าที่เป็นผู้ตรวจสอบและตัดสินใจ”

ปิดด้วย North Star:

> “ตัวชี้วัดหลักของโครงการคือ ลดเวลาจากการรับคดีใหม่ไปสู่การพบความเชื่อมโยงที่นำไปตรวจสอบต่อได้ โดยทุกผลลัพธ์ยังตรวจสอบย้อนกลับถึงหลักฐานต้นทางได้”

## Questions to expect

### ต่างจากระบบรับแจ้งหรือระบบธนาคารอย่างไร?

SCAM-LINK เป็น **investigation intelligence fusion layer** เน้น cross-case/cross-domain linkage และ evidence provenance ไม่ได้ทดแทนระบบรับแจ้งหรือระบบระงับธุรกรรม

### จำเป็นต้องใช้ GNN ตั้งแต่แรกหรือไม่?

ไม่จำเป็น Phase 1 ใช้ exact/normalized matching, graph analytics, temporal pattern และ semantic similarity ที่อธิบายเหตุผลได้ก่อน เมื่อมี reviewed ground truth เพียงพอจึงค่อยประเมิน supervised graph model/GNN

### ถ้ายังเชื่อมธนาคารหรือโทรคมนาคมไม่ได้จะทำอย่างไร?

Pilot สามารถใช้ synthetic หรือ historical authorized dataset เพื่อพิสูจน์ workflow และ KPI ก่อน ส่วน production connector เป็น Phase ถัดไปภายใต้ข้อตกลงและสิทธิ์ของหน่วยงาน

### AI ผิดแล้วกล่าวหาคนได้หรือไม่?

UI/data model แยก observed fact ออกจาก analytic inference อย่างชัดเจน ทุก inference มี confidence, supporting evidence และ review status และไม่มี automated enforcement ใน MVP
