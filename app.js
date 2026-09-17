(() => {
  const data = window.SCAM_DATA;
  const state = { selectedCase: data.cases[0].id, selectedNode: "HUB" };
  const baht = value => new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(value);
  const compactBaht = value => value >= 1_000_000 ? `฿${(value / 1_000_000).toFixed(2)}M` : `฿${Math.round(value / 1_000)}k`;
  const esc = value => String(value ?? "").replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[char]));
  const percent = value => `${Math.round(value * 100)}%`;
  const viewTitles = { overview:"Command Overview", case:"Case Intelligence", network:"Network Explorer", leads:"Investigation Leads", architecture:"Evidence Architecture" };

  function showView(view) {
    document.querySelectorAll(".view").forEach(el => el.classList.remove("active-view"));
    document.querySelector(`#view-${view}`).classList.add("active-view");
    document.querySelectorAll(".nav-item").forEach(el => el.classList.toggle("active", el.dataset.view === view));
    document.querySelector("#page-title").textContent = viewTitles[view];
    document.querySelector("#search-results").hidden = true;
    if (view === "network") renderNetwork();
  }

  function renderMetrics() {
    const loss = data.cases.reduce((sum,item) => sum + item.loss, 0);
    const linked = data.cases.filter(item => item.links.length).length;
    const pendingLeads = data.leads.filter(item => item.status === "pending").length;
    const values = [
      ["Synthetic cases", data.cases.length, "ชุดข้อมูลสาธิตเท่านั้น"],
      ["Demo loss value", compactBaht(loss), "มูลค่าจำลองรวม"],
      ["Cases with links", linked, `${Math.round((linked / data.cases.length) * 100)}% ของ demo cases`],
      ["AI leads pending", pendingLeads, "ต้องผ่าน human review"]
    ];
    document.querySelector("#overview-metrics").innerHTML = values.map(([label,value,sub]) => `<article class="metric"><span class="metric-label">${esc(label)}</span><strong class="metric-value">${esc(value)}</strong><span class="metric-sub">${esc(sub)}</span></article>`).join("");
  }

  function renderCampaign() {
    const campaign = data.campaigns[0];
    document.querySelector("#campaign-card").innerHTML = `<div class="campaign-score"><div class="score-ring">${percent(campaign.score)}</div><div class="campaign-meta"><strong>${esc(campaign.id)}</strong><span>${esc(campaign.label)} · ${campaign.cases} cases</span></div></div><div class="signal-list">${campaign.signals.map(signal => `<div class="signal"><span>${esc(signal[0])}</span><strong>${esc(signal[1])}</strong></div>`).join("")}</div>`;
  }

  function caseStatus(item) {
    if (item.status === "linked") return '<span class="tag hot">Linked cluster</span>';
    if (item.status === "review") return '<span class="tag review">Needs review</span>';
    return '<span class="tag">New / isolated</span>';
  }

  function renderOverviewTable() {
    const rows = [...data.cases].sort((a,b) => b.date.localeCompare(a.date)).slice(0,8).map(item => `<tr><td><button class="case-link" data-case-id="${esc(item.id)}">${esc(item.id)}</button></td><td>${esc(item.date)}</td><td>${esc(item.scamType)}</td><td>${baht(item.loss)}</td><td>${item.links.length}</td><td>${caseStatus(item)}</td></tr>`).join("");
    document.querySelector("#overview-case-table").innerHTML = `<table><thead><tr><th>Case</th><th>Date</th><th>Type</th><th>Loss</th><th>Links</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table>`;
  }

  function renderCaseSelector() {
    document.querySelector("#case-selector").innerHTML = data.cases.map(item => `<option value="${esc(item.id)}">${esc(item.id)} — ${esc(item.scamType)}</option>`).join("");
    document.querySelector("#case-selector").value = state.selectedCase;
  }

  function renderCase() {
    const item = data.cases.find(c => c.id === state.selectedCase) || data.cases[0];
    const links = item.links.length ? item.links.map(link => `<div class="link-card"><div class="link-card-head"><button class="case-link" data-case-id="${esc(link.caseId)}">${esc(link.caseId)}</button><span class="link-score">${percent(link.score)}</span></div><p class="link-reason">${esc(link.reason)}</p></div>`).join("") : '<div class="empty">ยังไม่พบ cross-case link ในชุดข้อมูลสาธิต</div>';
    const evidence = item.evidence.map(id => { const record = data.evidence[id]; return `<div class="evidence-card"><header><span class="evidence-source">${esc(id)}</span><span>${esc(record.type)}</span></header><blockquote>${esc(record.excerpt)}</blockquote><p class="muted">${esc(record.method)} · ${esc(record.capturedAt)}</p></div>`; }).join("");
    document.querySelector("#case-detail").innerHTML = `<div class="case-summary"><article class="panel"><div class="case-title-row"><div><div class="case-id">${esc(item.id)}</div><h2>${esc(item.scamType)}</h2></div>${caseStatus(item)}</div><p class="muted">${esc(item.victimAlias)} · รับแจ้ง ${esc(item.date)} · ${item.campaign ? esc(item.campaign) : "ยังไม่จัด campaign"}</p><div class="loss-amount">${baht(item.loss)}</div><div class="entity-chips">${item.entities.map(entity => `<span class="entity-chip"><b>${esc(entity.type)}</b>${esc(entity.value)}</span>`).join("")}</div></article><article class="panel"><p class="eyebrow">CROSS-CASE SIGNAL</p><h2>${item.links.length ? `พบ ${item.links.length} ความเชื่อมโยง` : "ยังไม่พบความเชื่อมโยง"}</h2><p class="panel-caption">Exact/normalized match จะมีน้ำหนักสูงกว่า semantic similarity และทุก inference ต้องผ่าน human review ก่อนนำไปใช้ต่อ</p></article></div><div class="case-lower"><article class="panel"><div class="panel-heading compact"><div><p class="eyebrow">LINKED CASES</p><h2>เหตุผลที่ระบบเสนอให้เชื่อม</h2></div></div>${links}</article><article class="panel"><div class="panel-heading compact"><div><p class="eyebrow">SOURCE EVIDENCE</p><h2>หลักฐานต้นทาง</h2></div></div>${evidence}</article></div>`;
  }

  function nodeClass(type) { return ({ case:"node-case", account:"node-account", digital:"node-digital", inference:"node-inference" })[type] || "node-case"; }

  function renderNetwork() {
    const nodes = data.network.nodes;
    const nodeMap = Object.fromEntries(nodes.map(n => [n.id,n]));
    const lines = data.network.edges.map(edge => { const a=nodeMap[edge.from], b=nodeMap[edge.to]; return `<line class="graph-edge ${edge.kind === "inferred" ? "inferred" : ""}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"><title>${esc(edge.label)} · ${percent(edge.confidence)}</title></line>`; }).join("");
    const circles = nodes.map(node => `<g class="graph-node ${nodeClass(node.type)}" data-node-id="${esc(node.id)}" transform="translate(${node.x} ${node.y})"><circle r="${node.id === "HUB" || node.id === "CAMP" ? 30 : 23}"></circle><text text-anchor="middle" dy="${node.id === "HUB" || node.id === "CAMP" ? 45 : 38}">${esc(node.label)}</text></g>`).join("");
    document.querySelector("#network-svg-wrap").innerHTML = `<svg viewBox="0 0 880 600" role="img" aria-label="Synthetic scam knowledge graph">${lines}${circles}</svg>`;
    renderInspector(state.selectedNode);
  }

  function renderInspector(nodeId) {
    state.selectedNode = nodeId;
    const node = data.network.nodes.find(n => n.id === nodeId);
    const relatedEdges = data.network.edges.filter(edge => edge.from === nodeId || edge.to === nodeId);
    document.querySelector("#network-inspector").innerHTML = `<p class="eyebrow">NODE INSPECTOR</p><h3>${esc(node.label)}</h3><div class="node-type">${esc(node.type)}</div><ul class="fact-list">${node.facts.map(f => `<li>${esc(f)}</li>`).join("")}</ul><div class="provenance"><strong>Relationships</strong>${relatedEdges.map(edge => `<p>${esc(edge.label)} · ${percent(edge.confidence)}<br><span class="evidence-source">${esc(edge.evidence)}</span> · ${edge.kind === "inferred" ? "AI hypothesis" : "observed"}</p>`).join("") || "<p>ไม่พบ relationship</p>"}</div>`;
  }

  function renderLeads() {
    document.querySelector("#lead-list").innerHTML = data.leads.map(lead => `<article class="lead-card ${lead.status === "reviewed" ? "reviewed" : ""}" data-lead-id="${esc(lead.id)}"><div><div class="priority ${esc(lead.priority)}">${esc(lead.priority.toUpperCase())}</div><small class="muted">${esc(lead.id)}</small></div><div><h3>${esc(lead.title)}</h3><p>${esc(lead.rationale)}</p><p>${lead.evidenceCount} evidence refs · confidence ${percent(lead.confidence)}</p></div><div class="lead-actions"><button data-lead-review="${esc(lead.id)}">${lead.status === "reviewed" ? "ตรวจสอบแล้ว ✓" : "ทำเครื่องหมายว่าตรวจแล้ว"}</button><button class="secondary" data-goto="network">เปิด Graph</button></div></article>`).join("");
  }

  function search(query) {
    const q = query.trim().toLowerCase(); const box = document.querySelector("#search-results");
    if (!q) { box.hidden = true; return; }
    const results=[];
    data.cases.forEach(item => { const blob=[item.id,item.scamType,item.campaign,...item.entities.flatMap(e => [e.type,e.value])].join(" ").toLowerCase(); if (blob.includes(q)) results.push({type:"case",title:item.id,detail:`${item.scamType} · ${baht(item.loss)}`,id:item.id}); });
    data.network.nodes.forEach(node => { const blob=[node.id,node.label,node.type,...node.facts].join(" ").toLowerCase(); if (blob.includes(q)) results.push({type:"node",title:node.label,detail:`${node.type} · ${node.facts.join(" · ")}`,id:node.id}); });
    box.innerHTML = results.length ? results.slice(0,10).map(result => `<button class="search-result" data-search-type="${result.type}" data-search-id="${esc(result.id)}"><strong>${esc(result.title)}</strong><small>${esc(result.detail)}</small></button>`).join("") : '<div class="empty">ไม่พบข้อมูลใน synthetic demo</div>';
    box.hidden=false;
  }

  document.addEventListener("click", event => {
    const nav=event.target.closest("[data-view]"); if(nav) showView(nav.dataset.view);
    const goto=event.target.closest("[data-goto]"); if(goto) showView(goto.dataset.goto);
    const caseButton=event.target.closest("[data-case-id]"); if(caseButton){ state.selectedCase=caseButton.dataset.caseId; renderCaseSelector(); renderCase(); showView("case"); }
    const node=event.target.closest("[data-node-id]"); if(node) renderInspector(node.dataset.nodeId);
    const lead=event.target.closest("[data-lead-review]"); if(lead){ const target=data.leads.find(item => item.id === lead.dataset.leadReview); target.status=target.status === "reviewed" ? "pending" : "reviewed"; renderLeads(); }
    const result=event.target.closest("[data-search-type]"); if(result){ if(result.dataset.searchType === "case"){ state.selectedCase=result.dataset.searchId; renderCaseSelector(); renderCase(); showView("case"); } else { state.selectedNode=result.dataset.searchId; showView("network"); renderNetwork(); renderInspector(state.selectedNode); } document.querySelector("#global-search").value=""; document.querySelector("#search-results").hidden=true; }
  });

  document.querySelector("#case-selector").addEventListener("change", event => { state.selectedCase=event.target.value; renderCase(); });
  document.querySelector("#global-search").addEventListener("input", event => search(event.target.value));
  renderMetrics(); renderCampaign(); renderOverviewTable(); renderCaseSelector(); renderCase(); renderLeads(); renderNetwork();
})();
