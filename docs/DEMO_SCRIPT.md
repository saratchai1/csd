# SCAM-LINK — 3-Minute Demo Script

## 0:00–0:25 — ตั้งโจทย์

เปิดหน้า **Command Overview**

> “ปัญหาที่เราจะทดลองแก้ไม่ใช่การรับแจ้งคดีเพิ่ม แต่คือเมื่อมีคดีใหม่เข้ามา เจ้าหน้าที่จะรู้ได้เร็วแค่ไหนว่าคดีนี้เกี่ยวข้องกับเครือข่ายเดิมหรือไม่”

ชี้ป้าย **SYNTHETIC DEMO** เพื่อยืนยันว่าข้อมูลทั้งหมดใน prototype เป็นข้อมูลจำลอง

จากนั้นเปิด **Live Scenario** และกด **เล่นอัตโนมัติ**

## 0:25–1:45 — Live Scenario: มีข้อมูลใหม่เข้ามา แล้วอะไรตามมา

### Step 1 — New case

คดีจำลอง `CSD-LIVE-001` เข้ามาพร้อม Chat, Slip และ URL

> “ตอนนี้ระบบยังไม่สรุปอะไร เรามีเพียง Raw Evidence ที่ต้องรักษา provenance ไว้”

### Step 2 — Entity extraction

AI สกัด Account, Phone, LINE และ Domain

> “สิ่งที่ AI อ่านได้จะถูกเก็บเป็น Extracted Facts และทุกค่าต้องย้อนกลับไปยังหลักฐานต้นฉบับได้”

### Step 3 — Cross-case match

เมื่อเจอ `DEMO-ACCT-7742` ระบบค้นย้อนหลังและพบ exact match กับคดีเก่า 4 คดี

> “นี่คือจุดที่คดีเดี่ยวเริ่มกลายเป็น network โดย exact identifier มีน้ำหนักสูงกว่า semantic similarity”

### Step 4 — Campaign hypothesis

ระบบพบว่าคดีอีกชุดหนึ่งมี script, domain pattern และ temporal behavior คล้าย `CAMP-017`

> “ตรงนี้เป็น AI hypothesis ไม่ใช่ข้อเท็จจริง จึงแสดงเป็นเส้นประและเจ้าหน้าที่สามารถปฏิเสธได้”

### Step 5 — Network expansion

Graph ขยายจาก linked cases ไปยังบัญชีอื่น และพบเงินหลายเส้นทางไหลเข้าสู่ `DEMO-HUB-88`

> “ระบบไม่ได้บอกว่าบัญชีนี้ผิด แต่ทำให้ investigator เห็นว่ามันเป็น node ที่ควรตรวจต่อ เพราะมีหลาย transaction และหลายคดีมารวมกัน”

### Step 6 — Investigation lead

SCAM-LINK สร้าง `LEAD-LIVE-001` พร้อมเหตุผล confidence และ evidence references

> “Output ของ AI คือ lead สำหรับตรวจต่อ ไม่ใช่หมายจับ ไม่ใช่คำสั่งอายัด และไม่ใช่คำตัดสินความผิด”

### Step 7 — Human review

> “ก่อนผลวิเคราะห์ถูกนำไปใช้ เจ้าหน้าที่เปิดดู evidence provenance และเป็นผู้ยืนยัน ส่งกลับ หรือขอข้อมูลเพิ่มเติมตามกระบวนการที่เกี่ยวข้อง”

ระหว่าง demo ให้ชี้ว่า graph โตตามข้อมูลที่เข้ามา ไม่ได้เปิดเผย relationship ทั้งหมดตั้งแต่ต้น

## 1:45–2:20 — Drill-down ไปยัง Case Intelligence

เปิด **Case Intelligence** แล้วเลือก `CSD-DEMO-001`

ชี้ให้เห็น:

- Entity ที่ระบบสกัด
- Linked Cases
- เหตุผลที่ใช้เชื่อม
- Source Evidence

> “Live Scenario แสดง workflow ส่วนหน้านี้คือ workspace ที่ investigator ใช้ตรวจรายละเอียดของแต่ละคดี”

## 2:20–2:45 — Network Explorer

เปิด **Network Explorer**

ชี้เส้นทึบ = observed relationship และเส้นประ = analytic inference

กด `DEMO-HUB-01` และ `CAMP-017`

> “Graph ไม่ได้มีแค่ความสัมพันธ์ แต่ต้องบอก provenance ว่าเส้นนี้มาจาก evidence ไหน เป็น observed fact หรือ AI hypothesis และมี confidence เท่าใด”

## 2:45–3:00 — Investigation Lead

เปิดหน้า **Investigation Leads**

> “North Star ของโครงการคือ ลดเวลาจากการรับคดีใหม่ไปสู่การพบความเชื่อมโยงที่มีหลักฐานรองรับและนำไปตรวจสอบต่อได้ โดยยังคง human-in-the-loop ตลอด workflow”

## Questions to expect

### ต่างจากระบบรับแจ้งหรือระบบธนาคารอย่างไร?

SCAM-LINK เป็น **investigation intelligence fusion layer** เน้น cross-case/cross-domain linkage และ evidence provenance ไม่ได้ทดแทนระบบรับแจ้งหรือระบบระงับธุรกรรม

### จำเป็นต้องใช้ GNN ตั้งแต่แรกหรือไม่?

ไม่จำเป็น Phase 1 ใช้ exact/normalized matching, graph analytics, temporal pattern และ semantic similarity ที่อธิบายเหตุผลได้ก่อน เมื่อมี reviewed ground truth เพียงพอจึงค่อยประเมิน supervised graph model/GNN

### ถ้ายังเชื่อมธนาคารหรือโทรคมนาคมไม่ได้จะทำอย่างไร?

Pilot สามารถใช้ synthetic หรือ historical authorized dataset เพื่อพิสูจน์ workflow และ KPI ก่อน ส่วน production connector เป็น Phase ถัดไปภายใต้ข้อตกลงและสิทธิ์ของหน่วยงาน

### AI ผิดแล้วกล่าวหาคนได้หรือไม่?

UI/data model แยก observed fact ออกจาก analytic inference อย่างชัดเจน ทุก inference มี confidence, supporting evidence และ review status และไม่มี automated enforcement ใน MVP
