window.SCAM_DATA = {
  cases: [
    { id:"CSD-DEMO-001", date:"2026-08-14", victimAlias:"ผู้เสียหาย A01", scamType:"หลอกลงทุนสินทรัพย์ดิจิทัล", loss:780000, status:"linked", campaign:"CAMP-017", entities:[{type:"Phone",value:"08X-XXX-4101"},{type:"LINE",value:"wealth-demo-17"},{type:"Bank",value:"XXX-X-41001-X"},{type:"Domain",value:"alpha-growth.example"}], links:[{caseId:"CSD-DEMO-004",score:1,reason:"Exact match: บัญชีปลายทาง XXX-X-41001-X"},{caseId:"CSD-DEMO-007",score:.92,reason:"LINE identity + transfer timing pattern ตรงกัน"},{caseId:"CSD-DEMO-011",score:.84,reason:"Campaign fingerprint คล้ายกัน 5 indicators"}], evidence:["EVID-001","EVID-002","EVID-003"] },
    { id:"CSD-DEMO-002", date:"2026-08-16", victimAlias:"ผู้เสียหาย A02", scamType:"หลอกลงทุนหุ้นต่างประเทศ", loss:420000, status:"review", campaign:"CAMP-017", entities:[{type:"Phone",value:"08X-XXX-4138"},{type:"LINE",value:"wealth-demo-17"},{type:"Bank",value:"XXX-X-41022-X"},{type:"Domain",value:"alpha-growth.example"}], links:[{caseId:"CSD-DEMO-001",score:.95,reason:"Same LINE + same domain"},{caseId:"CSD-DEMO-009",score:.81,reason:"Script similarity + same cash-out window"}], evidence:["EVID-004","EVID-005"] },
    { id:"CSD-DEMO-003", date:"2026-08-18", victimAlias:"ผู้เสียหาย A03", scamType:"หลอกทำภารกิจออนไลน์", loss:145000, status:"new", campaign:"CAMP-022", entities:[{type:"Phone",value:"09X-XXX-2203"},{type:"Telegram",value:"task-demo-22"},{type:"Bank",value:"XXX-X-52203-X"},{type:"Domain",value:"task-reward.example"}], links:[{caseId:"CSD-DEMO-006",score:1,reason:"Exact match: Telegram identity"}], evidence:["EVID-006"] },
    { id:"CSD-DEMO-004", date:"2026-08-20", victimAlias:"ผู้เสียหาย A04", scamType:"หลอกลงทุนสินทรัพย์ดิจิทัล", loss:1250000, status:"linked", campaign:"CAMP-017", entities:[{type:"Phone",value:"06X-XXX-4177"},{type:"LINE",value:"portfolio-demo"},{type:"Bank",value:"XXX-X-41001-X"},{type:"Domain",value:"alpha-growth.example"}], links:[{caseId:"CSD-DEMO-001",score:1,reason:"Exact match: บัญชีปลายทาง XXX-X-41001-X"},{caseId:"CSD-DEMO-007",score:.88,reason:"Shared consolidation node + domain"}], evidence:["EVID-007","EVID-008"] },
    { id:"CSD-DEMO-005", date:"2026-08-22", victimAlias:"ผู้เสียหาย A05", scamType:"หลอกลงทุนทองคำ", loss:630000, status:"review", campaign:"CAMP-017", entities:[{type:"Phone",value:"08X-XXX-4191"},{type:"LINE",value:"gold-demo-invest"},{type:"Bank",value:"XXX-X-41055-X"},{type:"Domain",value:"market-signal.example"}], links:[{caseId:"CSD-DEMO-011",score:.86,reason:"Campaign fingerprint: wording + transfer cadence + infrastructure"}], evidence:["EVID-009"] },
    { id:"CSD-DEMO-006", date:"2026-08-23", victimAlias:"ผู้เสียหาย A06", scamType:"หลอกทำภารกิจออนไลน์", loss:98000, status:"linked", campaign:"CAMP-022", entities:[{type:"Phone",value:"09X-XXX-2214"},{type:"Telegram",value:"task-demo-22"},{type:"Bank",value:"XXX-X-52261-X"},{type:"Domain",value:"task-reward.example"}], links:[{caseId:"CSD-DEMO-003",score:1,reason:"Exact match: Telegram identity"}], evidence:["EVID-010"] },
    { id:"CSD-DEMO-007", date:"2026-08-25", victimAlias:"ผู้เสียหาย A07", scamType:"หลอกลงทุนสินทรัพย์ดิจิทัล", loss:990000, status:"linked", campaign:"CAMP-017", entities:[{type:"Phone",value:"08X-XXX-4170"},{type:"LINE",value:"wealth-demo-17"},{type:"Bank",value:"XXX-X-41077-X"},{type:"Domain",value:"alpha-growth.example"}], links:[{caseId:"CSD-DEMO-001",score:.92,reason:"LINE identity + transfer timing"},{caseId:"CSD-DEMO-004",score:.88,reason:"Shared consolidation node + domain"}], evidence:["EVID-011","EVID-012"] },
    { id:"CSD-DEMO-008", date:"2026-08-27", victimAlias:"ผู้เสียหาย A08", scamType:"หลอกให้กู้เงิน", loss:76000, status:"new", campaign:"CAMP-031", entities:[{type:"Phone",value:"06X-XXX-3108"},{type:"LINE",value:"loan-demo-31"},{type:"Bank",value:"XXX-X-63108-X"},{type:"Domain",value:"fast-loan.example"}], links:[], evidence:["EVID-013"] },
    { id:"CSD-DEMO-009", date:"2026-08-29", victimAlias:"ผู้เสียหาย A09", scamType:"หลอกลงทุนหุ้นต่างประเทศ", loss:560000, status:"review", campaign:"CAMP-017", entities:[{type:"Phone",value:"09X-XXX-4199"},{type:"LINE",value:"stock-demo-club"},{type:"Bank",value:"XXX-X-41099-X"},{type:"Domain",value:"market-signal.example"}], links:[{caseId:"CSD-DEMO-002",score:.81,reason:"Script similarity + same cash-out window"}], evidence:["EVID-014"] },
    { id:"CSD-DEMO-010", date:"2026-09-02", victimAlias:"ผู้เสียหาย A10", scamType:"หลอกขายสินค้า", loss:32000, status:"new", campaign:null, entities:[{type:"Phone",value:"08X-XXX-9010"},{type:"Facebook",value:"shop-demo-10"},{type:"Bank",value:"XXX-X-99010-X"}], links:[], evidence:["EVID-015"] },
    { id:"CSD-DEMO-011", date:"2026-09-04", victimAlias:"ผู้เสียหาย A11", scamType:"หลอกลงทุนทองคำ", loss:870000, status:"linked", campaign:"CAMP-017", entities:[{type:"Phone",value:"06X-XXX-4111"},{type:"LINE",value:"gold-new-demo"},{type:"Bank",value:"XXX-X-41111-X"},{type:"Domain",value:"market-signal.example"}], links:[{caseId:"CSD-DEMO-001",score:.84,reason:"No exact entity match; fingerprint similarity 5 indicators"},{caseId:"CSD-DEMO-005",score:.86,reason:"Campaign fingerprint: wording + transfer cadence + infrastructure"}], evidence:["EVID-016","EVID-017"] },
    { id:"CSD-DEMO-012", date:"2026-09-07", victimAlias:"ผู้เสียหาย A12", scamType:"หลอกลงทุนสินทรัพย์ดิจิทัล", loss:1130000, status:"review", campaign:"CAMP-017", entities:[{type:"Phone",value:"08X-XXX-4120"},{type:"LINE",value:"alpha-new-demo"},{type:"Bank",value:"XXX-X-41212-X"},{type:"Domain",value:"alpha-research.example"}], links:[{caseId:"CSD-DEMO-011",score:.79,reason:"Behavioral pattern similarity; requires human review"}], evidence:["EVID-018"] }
  ],
  evidence: {
    "EVID-001":{type:"chat screenshot",capturedAt:"2026-08-14T10:42:00+07:00",method:"OCR + entity extraction",excerpt:"ผู้ติดต่อส่ง LINE ID และแนะนำให้โอนเงินเพื่อเปิดพอร์ตทดลอง"},
    "EVID-002":{type:"transfer slip",capturedAt:"2026-08-14T11:05:00+07:00",method:"OCR exact extraction",excerpt:"พบเลขบัญชีปลายทาง XXX-X-41001-X จำนวน 280,000 บาท"},
    "EVID-003":{type:"browser screenshot",capturedAt:"2026-08-14T11:22:00+07:00",method:"URL extraction",excerpt:"พบโดเมน alpha-growth.example ในหน้าลงทุนจำลอง"},
    "EVID-004":{type:"chat export",capturedAt:"2026-08-16T09:12:00+07:00",method:"NLP entity extraction",excerpt:"LINE wealth-demo-17 ปรากฏซ้ำจากอีกคดี"},
    "EVID-005":{type:"browser screenshot",capturedAt:"2026-08-16T09:18:00+07:00",method:"URL extraction",excerpt:"alpha-growth.example"},
    "EVID-006":{type:"chat screenshot",capturedAt:"2026-08-18T14:30:00+07:00",method:"OCR exact extraction",excerpt:"Telegram task-demo-22"},
    "EVID-007":{type:"transfer slip",capturedAt:"2026-08-20T15:02:00+07:00",method:"OCR exact extraction",excerpt:"พบเลขบัญชีปลายทาง XXX-X-41001-X จำนวน 1,250,000 บาท"},
    "EVID-008":{type:"browser screenshot",capturedAt:"2026-08-20T15:15:00+07:00",method:"URL extraction",excerpt:"alpha-growth.example"},
    "EVID-009":{type:"chat export",capturedAt:"2026-08-22T13:20:00+07:00",method:"semantic fingerprint",excerpt:"สคริปต์เชิญชวนและลำดับการเพิ่มวงเงินคล้าย CAMP-017"},
    "EVID-010":{type:"chat screenshot",capturedAt:"2026-08-23T17:08:00+07:00",method:"OCR exact extraction",excerpt:"Telegram task-demo-22"},
    "EVID-011":{type:"chat export",capturedAt:"2026-08-25T10:16:00+07:00",method:"exact match",excerpt:"LINE wealth-demo-17"},
    "EVID-012":{type:"transaction summary",capturedAt:"2026-08-25T10:35:00+07:00",method:"temporal pattern",excerpt:"เงินถูกส่งต่อภายในช่วงเวลาสั้นในรูปแบบเดียวกับคดี 001/004"},
    "EVID-013":{type:"chat screenshot",capturedAt:"2026-08-27T12:04:00+07:00",method:"OCR extraction",excerpt:"LINE loan-demo-31"},
    "EVID-014":{type:"chat export",capturedAt:"2026-08-29T19:11:00+07:00",method:"semantic similarity",excerpt:"รูปแบบการชวนลงทุนและ deadline pressure คล้ายคดี 002"},
    "EVID-015":{type:"marketplace screenshot",capturedAt:"2026-09-02T08:45:00+07:00",method:"OCR extraction",excerpt:"Facebook shop-demo-10"},
    "EVID-016":{type:"chat export",capturedAt:"2026-09-04T11:13:00+07:00",method:"semantic fingerprint",excerpt:"ใช้ถ้อยคำและลำดับการเพิ่มเครดิตคล้าย CAMP-017 แม้ไม่มี entity ตรง"},
    "EVID-017":{type:"transaction summary",capturedAt:"2026-09-04T11:52:00+07:00",method:"temporal pattern",excerpt:"cadence การโอนซ้ำมีช่วงห่างใกล้เคียง campaign เดิม"},
    "EVID-018":{type:"case narrative",capturedAt:"2026-09-07T16:45:00+07:00",method:"LLM-assisted extraction",excerpt:"AI เสนอ similarity ระดับ medium และส่งเข้าคิว human review"}
  },
  campaigns:[
    {id:"CAMP-017",label:"Investment Funnel / Demo Cluster",score:.87,cases:8,signals:[["Script similarity","91%"],["Transfer cadence","88%"],["Shared infrastructure","3 domains"],["Exact entity overlap","4 cases"],["Human review","Required"]]},
    {id:"CAMP-022",label:"Task Scam / Demo Cluster",score:.78,cases:2,signals:[["Exact Telegram overlap","2 cases"]]}
  ],
  leads:[
    {id:"LEAD-001",priority:"high",title:"ตรวจสอบ Consolidation Account DEMO-HUB-01",rationale:"บัญชีนี้รับเงินต่อจากบัญชีชั้นแรกใน 5 synthetic cases และเงินถูกส่งต่อภายในช่วงเวลาสั้น",evidenceCount:7,confidence:.93,status:"pending"},
    {id:"LEAD-002",priority:"high",title:"ทบทวน CAMP-017 ว่าเป็นขบวนการเดียวกันหรือไม่",rationale:"คดี 011 ไม่มี entity ตรงกับคดี 001 แต่มี behavioral fingerprint ตรงกัน 5 indicators",evidenceCount:6,confidence:.84,status:"pending"},
    {id:"LEAD-003",priority:"medium",title:"เชื่อม CSD-DEMO-002 กับ CSD-DEMO-009",rationale:"พบ similarity ของ scam script และช่วงเวลา cash-out แต่ยังไม่มี exact identifier ร่วม",evidenceCount:3,confidence:.81,status:"pending"},
    {id:"LEAD-004",priority:"medium",title:"แยก CAMP-022 ออกจากกลุ่มลงทุน",rationale:"Telegram identity ตรงกันแบบ exact match แต่ modus operandi ต่างจาก CAMP-017 อย่างชัดเจน",evidenceCount:2,confidence:.97,status:"pending"}
  ],
  network:{
    nodes:[
      {id:"C001",label:"CASE 001",type:"case",x:110,y:130,facts:["Loss ฿780k","CAMP-017"]},
      {id:"C004",label:"CASE 004",type:"case",x:110,y:250,facts:["Loss ฿1.25m","CAMP-017"]},
      {id:"C007",label:"CASE 007",type:"case",x:110,y:370,facts:["Loss ฿990k","CAMP-017"]},
      {id:"C011",label:"CASE 011",type:"case",x:110,y:490,facts:["Loss ฿870k","AI similarity"]},
      {id:"A01",label:"Mule A",type:"account",x:330,y:170,facts:["XXX-X-41001-X","2 exact cases"]},
      {id:"A02",label:"Mule B",type:"account",x:330,y:330,facts:["XXX-X-41077-X","1 case"]},
      {id:"A03",label:"Mule C",type:"account",x:330,y:470,facts:["XXX-X-41111-X","1 case"]},
      {id:"HUB",label:"DEMO-HUB-01",type:"account",x:570,y:310,facts:["Consolidation candidate","5 incoming paths"]},
      {id:"LINE",label:"wealth-demo-17",type:"digital",x:330,y:70,facts:["LINE identity","3 cases"]},
      {id:"DOMAIN",label:"alpha-growth.example",type:"digital",x:570,y:100,facts:["Domain","3 cases"]},
      {id:"CAMP",label:"CAMP-017",type:"inference",x:760,y:310,facts:["AI hypothesis","Fingerprint 0.87"]}
    ],
    edges:[
      {from:"C001",to:"A01",label:"transferred_to",evidence:"EVID-002",kind:"observed",confidence:1},
      {from:"C004",to:"A01",label:"transferred_to",evidence:"EVID-007",kind:"observed",confidence:1},
      {from:"C007",to:"A02",label:"transferred_to",evidence:"EVID-012",kind:"observed",confidence:1},
      {from:"C011",to:"A03",label:"transferred_to",evidence:"EVID-017",kind:"observed",confidence:1},
      {from:"C001",to:"LINE",label:"contacted_by",evidence:"EVID-001",kind:"observed",confidence:1},
      {from:"C007",to:"LINE",label:"contacted_by",evidence:"EVID-011",kind:"observed",confidence:1},
      {from:"C001",to:"DOMAIN",label:"used_url",evidence:"EVID-003",kind:"observed",confidence:1},
      {from:"C004",to:"DOMAIN",label:"used_url",evidence:"EVID-008",kind:"observed",confidence:1},
      {from:"A01",to:"HUB",label:"money_flow",evidence:"EVID-007",kind:"observed",confidence:.95},
      {from:"A02",to:"HUB",label:"money_flow",evidence:"EVID-012",kind:"observed",confidence:.91},
      {from:"A03",to:"HUB",label:"money_flow",evidence:"EVID-017",kind:"observed",confidence:.89},
      {from:"C011",to:"CAMP",label:"possible_member",evidence:"EVID-016",kind:"inferred",confidence:.84},
      {from:"HUB",to:"CAMP",label:"supports_hypothesis",evidence:"EVID-017",kind:"inferred",confidence:.87},
      {from:"DOMAIN",to:"CAMP",label:"supports_hypothesis",evidence:"EVID-003",kind:"inferred",confidence:.87}
    ]
  }
};
