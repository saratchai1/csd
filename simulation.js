(() => {
  const root = document.querySelector("#view-simulation");
  if (!root) return;

  const scenario = [
    {
      time: "08:42:11",
      kind: "INPUT",
      tone: "input",
      title: "รับแจ้งคดีใหม่เข้าสู่ระบบ",
      copy: "ผู้เสียหายแจ้งเหตุหลอกลงทุนออนไลน์ พร้อมแนบภาพแช็ต สลิปโอนเงิน และ URL ของเว็บไซต์ที่ใช้ชักชวนลงทุน",
      trigger: "CSD-LIVE-001 · ความเสียหายจำลอง ฿785,000 · 3 evidence items",
      outputs: [
        ["รับ Raw Evidence เข้า L0 โดยยังไม่สรุปความเชื่อมโยง", "fact"],
        ["สร้าง Case ID และบันทึกเวลา/แหล่งที่มาของหลักฐาน", "fact"]
      ],
      why: ["ข้อมูลต้นฉบับถูกเก็บแยกจากผลวิเคราะห์", "ทุกผลที่เกิดหลังจากนี้ต้องย้อนกลับมาหา evidence ชุดนี้ได้"],
      confidence: 1,
      confidenceLabel: "Evidence received",
      counts: { cases: 1, entities: 0, nodes: 1, leads: 0 }
    },
    {
      time: "08:42:14",
      kind: "FACT EXTRACTION",
      tone: "fact",
      title: "AI อ่านหลักฐานและสกัด Entity",
      copy: "OCR/NLP อ่านข้อมูลจากหลักฐาน แล้วเสนอค่าที่ตรวจพบเป็น Extracted Facts โดยยังไม่กล่าวหาว่า entity ใดเป็นผู้กระทำผิด",
      trigger: "EVID-L001 + EVID-L002 + EVID-L003",
      outputs: [
        ["Account: DEMO-ACCT-7742", "fact"],
        ["Phone: +66 81 555 0142 (normalized)", "fact"],
        ["LINE: capital-growth-demo", "fact"],
        ["Domain: invest-growth.example", "fact"]
      ],
      why: ["เลขบัญชีมาจากสลิป", "เบอร์และ LINE มาจากภาพแช็ต", "Domain มาจาก URL ที่ผู้เสียหายส่งมา"],
      confidence: .98,
      confidenceLabel: "Extraction confidence",
      counts: { cases: 1, entities: 4, nodes: 5, leads: 0 }
    },
    {
      time: "08:42:16",
      kind: "CROSS-CASE MATCH",
      tone: "fact",
      title: "พบ Entity เดียวกันในคดีเก่า",
      copy: "ระบบค้นย้อนหลังทันทีหลัง normalize entity และพบว่าเลขบัญชีเดียวกันเคยปรากฏในคดีจำลองอีก 4 คดีภายใน 21 วัน",
      trigger: "DEMO-ACCT-7742 → exact match",
      outputs: [
        ["CSD-DEMO-002 · exact account match", "fact"],
        ["CSD-DEMO-004 · exact account match", "fact"],
        ["CSD-DEMO-007 · exact account match", "fact"],
        ["CSD-DEMO-009 · exact account match", "fact"]
      ],
      why: ["Exact identifier match มีน้ำหนักสูงกว่า semantic similarity", "เจ้าหน้าที่เห็นเหตุผลที่เชื่อมคดีได้ทันที ไม่ใช่เห็นเพียง score"],
      confidence: 1,
      confidenceLabel: "Exact-match confidence",
      counts: { cases: 5, entities: 4, nodes: 9, leads: 0 }
    },
    {
      time: "08:42:18",
      kind: "AI HYPOTHESIS",
      tone: "inference",
      title: "พบ Campaign Fingerprint ที่คล้ายกัน",
      copy: "แม้บางคดีไม่มีเลขบัญชีตรงกัน ระบบพบรูปแบบบทสนทนา ลำดับการชักชวน และโครงสร้าง domain คล้าย Campaign CAMP-017 จึงเสนอเป็น hypothesis แยกจากข้อเท็จจริง",
      trigger: "Script + domain pattern + temporal behavior",
      outputs: [
        ["CAMP-017 similarity 87%", "inference"],
        ["CSD-DEMO-011 มี behavioral pattern คล้ายกัน แต่ไม่มี direct identifier match", "inference"]
      ],
      why: ["เส้น inference แสดงเป็นเส้นประ", "Similarity ไม่ถูกใช้แทนหลักฐาน", "เจ้าหน้าที่สามารถปฏิเสธ hypothesis นี้ได้"],
      confidence: .87,
      confidenceLabel: "Campaign similarity",
      counts: { cases: 6, entities: 5, nodes: 11, leads: 0 }
    },
    {
      time: "08:42:21",
      kind: "NETWORK EXPANSION",
      tone: "fact",
      title: "เส้นทางเงินเผย Consolidation Node",
      copy: "จากข้อมูลธุรกรรมจำลองที่ได้รับอนุญาต ระบบขยาย graph ต่อจากบัญชีที่พบ และเห็นเงินจากบัญชีหลายบัญชีไหลเข้าสู่ node กลางเดียวกันภายในช่วงเวลาสั้น",
      trigger: "Linked cases → mule accounts → DEMO-HUB-88",
      outputs: [
        ["3 mule accounts เชื่อมเข้าสู่ DEMO-HUB-88", "fact"],
        ["11 linked-case transfers ปรากฏรอบ node นี้ในชุดข้อมูลจำลอง", "fact"],
        ["Median transfer delay: 3m 12s", "fact"]
      ],
      why: ["Node นี้เด่นจากโครงสร้างเครือข่าย ไม่ใช่จากชื่อบุคคล", "ทุก transaction edge มี source reference และ timestamp"],
      confidence: .96,
      confidenceLabel: "Observed network support",
      counts: { cases: 11, entities: 8, nodes: 15, leads: 0 }
    },
    {
      time: "08:42:24",
      kind: "INVESTIGATION LEAD",
      tone: "inference",
      title: "ระบบสร้าง Lead ให้เจ้าหน้าที่ตรวจต่อ",
      copy: "SCAM-LINK ไม่สรุปว่า DEMO-HUB-88 เป็นผู้กระทำผิด แต่จัดลำดับเป็น investigation lead เพราะเชื่อมหลายคดีและมีหลักฐานธุรกรรมรองรับ",
      trigger: "High centrality + repeated inbound flows + multi-case support",
      outputs: [
        ["LEAD-LIVE-001 · Review DEMO-HUB-88", "inference"],
        ["รวบรวม evidence refs 9 รายการไว้ใน lead package", "fact"],
        ["ระบุเหตุผลและ confidence แยกจาก source facts", "fact"]
      ],
      why: ["Lead คือสิ่งที่ควรตรวจต่อ ไม่ใช่ข้อสรุปความผิด", "ระบบไม่อายัด ไม่ปิดกั้น และไม่ออกคำสั่งบังคับใช้กฎหมายอัตโนมัติ"],
      confidence: .93,
      confidenceLabel: "Lead confidence",
      counts: { cases: 11, entities: 8, nodes: 16, leads: 1 }
    },
    {
      time: "08:43:02",
      kind: "HUMAN REVIEW",
      tone: "fact",
      title: "เจ้าหน้าที่ตรวจหลักฐานก่อนดำเนินการต่อ",
      copy: "Investigator เปิด evidence provenance ตรวจเส้นทางที่ระบบเสนอ และเลือกยืนยัน ส่งกลับให้วิเคราะห์ใหม่ หรือขอข้อมูลเพิ่มเติมตามอำนาจและกระบวนการที่เกี่ยวข้อง",
      trigger: "LEAD-LIVE-001 → human decision",
      outputs: [
        ["Lead status: READY FOR INVESTIGATOR REVIEW", "fact"],
        ["Evidence provenance พร้อมตรวจย้อนกลับ", "fact"],
        ["ไม่มี automated enforcement", "fact"]
      ],
      why: ["Human-in-the-loop เป็นจุดควบคุมก่อนนำผลวิเคราะห์ไปใช้", "Audit log บันทึกว่าใครตรวจอะไร เมื่อใด และตัดสินใจอย่างไร"],
      confidence: 1,
      confidenceLabel: "Workflow complete",
      counts: { cases: 11, entities: 8, nodes: 17, leads: 1 }
    }
  ];

  const graphNodes = [
    { id:"LIVE", label:"NEW CASE", type:"case", x:90, y:215, step:0 },
    { id:"ACCT", label:"ACCT-7742", type:"account", x:245, y:145, step:1 },
    { id:"PHONE", label:"PHONE", type:"digital", x:245, y:260, step:1 },
    { id:"DOMAIN", label:"DOMAIN", type:"digital", x:245, y:355, step:1 },
    { id:"C2", label:"CASE 002", type:"case", x:410, y:70, step:2 },
    { id:"C4", label:"CASE 004", type:"case", x:410, y:140, step:2 },
    { id:"C7", label:"CASE 007", type:"case", x:410, y:210, step:2 },
    { id:"C9", label:"CASE 009", type:"case", x:410, y:280, step:2 },
    { id:"C11", label:"CASE 011", type:"case", x:410, y:365, step:3 },
    { id:"CAMP", label:"CAMP-017", type:"inference", x:565, y:355, step:3 },
    { id:"MULEB", label:"MULE-B", type:"account", x:565, y:120, step:4 },
    { id:"MULEC", label:"MULE-C", type:"account", x:565, y:210, step:4 },
    { id:"HUB", label:"HUB-88", type:"account", x:710, y:165, step:4 },
    { id:"LEAD", label:"LEAD-001", type:"inference", x:710, y:300, step:5 },
    { id:"HUMAN", label:"REVIEW", type:"human", x:835, y:300, step:6 }
  ];

  const graphEdges = [
    { from:"LIVE", to:"ACCT", step:1, kind:"fact" },
    { from:"LIVE", to:"PHONE", step:1, kind:"fact" },
    { from:"LIVE", to:"DOMAIN", step:1, kind:"fact" },
    { from:"ACCT", to:"C2", step:2, kind:"fact" },
    { from:"ACCT", to:"C4", step:2, kind:"fact" },
    { from:"ACCT", to:"C7", step:2, kind:"fact" },
    { from:"ACCT", to:"C9", step:2, kind:"fact" },
    { from:"DOMAIN", to:"CAMP", step:3, kind:"inferred" },
    { from:"C11", to:"CAMP", step:3, kind:"inferred" },
    { from:"C2", to:"MULEB", step:4, kind:"fact" },
    { from:"C4", to:"MULEB", step:4, kind:"fact" },
    { from:"C7", to:"MULEC", step:4, kind:"fact" },
    { from:"C9", to:"MULEC", step:4, kind:"fact" },
    { from:"ACCT", to:"HUB", step:4, kind:"fact" },
    { from:"MULEB", to:"HUB", step:4, kind:"fact" },
    { from:"MULEC", to:"HUB", step:4, kind:"fact" },
    { from:"HUB", to:"LEAD", step:5, kind:"inferred" },
    { from:"CAMP", to:"LEAD", step:5, kind:"inferred" },
    { from:"LEAD", to:"HUMAN", step:6, kind:"fact" }
  ];

  let current = 0;
  let timer = null;

  const els = {
    nav: document.querySelector("#nav-simulation"),
    pageTitle: document.querySelector("#page-title"),
    timeline: root.querySelector("#scenario-timeline"),
    time: root.querySelector("#scenario-time"),
    kind: root.querySelector("#scenario-kind"),
    title: root.querySelector("#scenario-title"),
    copy: root.querySelector("#scenario-copy"),
    trigger: root.querySelector("#scenario-trigger-value"),
    outputs: root.querySelector("#scenario-outputs"),
    why: root.querySelector("#scenario-why-list"),
    confidence: root.querySelector("#scenario-confidence"),
    confidenceLabel: root.querySelector("#scenario-confidence-label"),
    confidenceValue: root.querySelector("#scenario-confidence-value"),
    graph: root.querySelector("#scenario-network-svg"),
    cases: root.querySelector("#scenario-count-cases"),
    entities: root.querySelector("#scenario-count-entities"),
    nodes: root.querySelector("#scenario-count-nodes"),
    leads: root.querySelector("#scenario-count-leads"),
    play: root.querySelector("#scenario-play"),
    prev: root.querySelector("#scenario-prev"),
    next: root.querySelector("#scenario-next"),
    reset: root.querySelector("#scenario-reset"),
    audit: root.querySelector("#scenario-audit-status")
  };

  function esc(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[char]));
  }

  function showSimulation() {
    document.querySelectorAll(".view").forEach(el => el.classList.remove("active-view"));
    root.classList.add("active-view");
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
    els.nav.classList.add("active");
    els.pageTitle.textContent = "Live Scenario Simulation";
    const searchResults = document.querySelector("#search-results");
    if (searchResults) searchResults.hidden = true;
  }

  function renderTimeline() {
    els.timeline.innerHTML = scenario.map((step, index) => {
      const status = index === current ? "active" : index < current ? "completed" : "";
      return `<button type="button" class="scenario-step ${status}" data-scenario-step="${index}"><span class="scenario-step-index">${String(index + 1).padStart(2,"0")}</span><span><strong>${esc(step.kind)}</strong><small>${esc(step.title)}</small></span></button>`;
    }).join("");
  }

  function renderGraph() {
    const byId = Object.fromEntries(graphNodes.map(node => [node.id,node]));
    const edges = graphEdges.map(edge => {
      const a = byId[edge.from];
      const b = byId[edge.to];
      const visible = edge.step <= current ? "visible" : "";
      const inferred = edge.kind === "inferred" ? "inferred" : "";
      return `<line class="scenario-edge ${visible} ${inferred}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"><title>${edge.kind === "inferred" ? "AI hypothesis" : "Observed / extracted relationship"}</title></line>`;
    }).join("");
    const nodes = graphNodes.map(node => {
      const visible = node.step <= current ? "visible" : "";
      const r = ["HUB","CAMP","LEAD","HUMAN"].includes(node.id) ? 25 : 20;
      return `<g class="scenario-node ${esc(node.type)} ${visible}" transform="translate(${node.x} ${node.y})"><circle r="${r}"></circle><text text-anchor="middle" dy="${r + 18}">${esc(node.label)}</text></g>`;
    }).join("");
    els.graph.innerHTML = `<svg viewBox="0 0 920 440" role="img" aria-label="กราฟจำลองที่ขยายตามขั้นตอนของการวิเคราะห์">${edges}${nodes}</svg>`;
  }

  function render() {
    const step = scenario[current];
    els.time.textContent = step.time;
    els.kind.textContent = step.kind;
    els.kind.className = `scenario-kind ${step.tone === "inference" ? "inference" : step.tone === "fact" ? "fact" : ""}`;
    els.title.textContent = step.title;
    els.copy.textContent = step.copy;
    els.trigger.textContent = step.trigger;
    els.outputs.innerHTML = step.outputs.map(([text,type]) => `<div class="scenario-output ${type === "inference" ? "inference" : ""}"><span class="scenario-output-mark"></span><span>${esc(text)}</span></div>`).join("");
    els.why.innerHTML = step.why.map(item => `<li>${esc(item)}</li>`).join("");
    els.confidence.style.width = `${Math.round(step.confidence * 100)}%`;
    els.confidenceLabel.textContent = step.confidenceLabel;
    els.confidenceValue.textContent = `${Math.round(step.confidence * 100)}%`;
    els.cases.textContent = step.counts.cases;
    els.entities.textContent = step.counts.entities;
    els.nodes.textContent = step.counts.nodes;
    els.leads.textContent = step.counts.leads;
    els.prev.disabled = current === 0;
    els.next.disabled = current === scenario.length - 1;
    els.audit.textContent = current === scenario.length - 1 ? "Simulation complete · awaiting investigator decision" : `Step ${current + 1}/${scenario.length} · evidence provenance retained`;
    renderTimeline();
    renderGraph();
  }

  function pause() {
    if (timer) clearInterval(timer);
    timer = null;
    els.play.classList.remove("is-playing");
    els.play.textContent = current === scenario.length - 1 ? "เล่นใหม่ ▶" : "เล่นอัตโนมัติ ▶";
  }

  function play() {
    if (timer) { pause(); return; }
    if (current === scenario.length - 1) current = 0;
    render();
    els.play.classList.add("is-playing");
    els.play.textContent = "หยุดชั่วคราว ‖";
    timer = setInterval(() => {
      if (current >= scenario.length - 1) { pause(); return; }
      current += 1;
      render();
    }, 1900);
  }

  els.nav.addEventListener("click", () => { showSimulation(); render(); });
  els.play.addEventListener("click", play);
  els.prev.addEventListener("click", () => { pause(); current = Math.max(0,current - 1); render(); });
  els.next.addEventListener("click", () => { pause(); current = Math.min(scenario.length - 1,current + 1); render(); });
  els.reset.addEventListener("click", () => { pause(); current = 0; render(); });
  els.timeline.addEventListener("click", event => {
    const button = event.target.closest("[data-scenario-step]");
    if (!button) return;
    pause();
    current = Number(button.dataset.scenarioStep);
    render();
  });
  document.addEventListener("click", event => {
    if (event.target.closest("[data-view]")) pause();
  });

  render();
})();
