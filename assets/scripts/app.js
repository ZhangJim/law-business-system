const navConfig = [
  { type: "link", id: "home", label: "首页", href: "../home/home.html", icon: "home" },
  {
    type: "group",
    label: "运营管理",
    icon: "operations",
    children: [
      { id: "operations-home", label: "运营工作台", href: "../operations/operations-home.html" },
      { id: "operation-lead-pool", label: "运营案源池", href: "../operations/operation-lead-pool.html" },
      { id: "invitation-auto-dispatch", label: "邀约自动分发管理", href: "../operations/invitation-auto-dispatch.html" },
      { id: "channel-management", label: "渠道管理", href: "../operations/channel-management.html" },
      { id: "data-warehouse", label: "数据仓库", href: "../operations/data-warehouse.html" },
      { id: "duplicate-management", label: "排重管理", href: "../operations/duplicate-management.html" },
      { id: "lead-import-management", label: "案源导入管理", href: "../operations/lead-import-management.html" }
    ]
  },
  { type: "link", id: "approval-center", label: "审批中心", href: "../approval/approval-center.html", icon: "approval" },
  { type: "link", id: "lead-management", label: "案源管理", href: "../leads/lead-management.html", icon: "lead" },
  {
    type: "group",
    label: "邀约管理",
    icon: "invitation",
    children: [
      { id: "invitation-management", label: "邀约管理", href: "../invitation/invitation-management.html" },
      { id: "invitation-records", label: "邀约记录", href: "../invitation/invitation-records.html" }
    ]
  },
  {
    type: "group",
    label: "谈案与签约",
    icon: "negotiation",
    children: [
      { id: "negotiation-management", label: "谈案管理", href: "../negotiation/negotiation-management.html" },
      { id: "contract-management", label: "合同管理", href: "../negotiation/contract-management.html" },
      { id: "payment-plan", label: "回款计划", href: "../negotiation/payment-plan.html" },
      { id: "payment-records", label: "回款记录", href: "../negotiation/payment-records.html" }
    ]
  },
  { type: "link", id: "customer-management", label: "客户管理", href: "../customer/customer-management.html", icon: "customer" },
  {
    type: "group",
    label: "案件管理",
    icon: "case",
    children: [
      { id: "case-management", label: "案件管理", href: "../case/case-management.html" },
      { id: "archive-management", label: "案件材料", href: "../case/archive-management.html" },
      { id: "case-stage-config", label: "案件阶段配置", href: "../case/case-stage-config.html" }
    ]
  },
  {
    type: "group",
    label: "财务管理",
    icon: "finance",
    children: [
      { id: "receivable-ledger", label: "应收台账", href: "../finance/receivable-ledger.html" },
      { id: "payable-ledger", label: "应付台账", href: "../finance/payable-ledger.html" },
      { id: "commission-management", label: "提成管理", href: "../finance/commission-management.html" },
      { id: "invoice-management", label: "发票管理", href: "../finance/invoice-management.html" }
    ]
  },
  { type: "link", id: "team-management", label: "团队管理", href: "../team/team-management.html", icon: "team" },
  {
    type: "group",
    label: "分析中心",
    icon: "analysis",
    children: [
      { id: "channel-roi-analysis", label: "渠道ROI统计", href: "../analysis/channel-roi-analysis.html" },
      { id: "channel-cost-management", label: "渠道成本管理", href: "../analysis/channel-cost-management.html" },
      { id: "channel-analysis", label: "渠道分析", href: "../analysis/channel-analysis.html" },
      { id: "lead-analysis", label: "案源分析", href: "../analysis/lead-analysis.html" },
      { id: "invitation-analysis", label: "邀约分析", href: "../analysis/invitation-analysis.html" },
      { id: "negotiation-analysis", label: "谈案分析", href: "../analysis/negotiation-analysis.html" },
      { id: "signing-analysis", label: "签约分析", href: "../analysis/signing-analysis.html" },
      { id: "case-analysis", label: "案件分析", href: "../analysis/case-analysis.html" }
    ]
  }
];

function iconMarkup(name) {
  const icons = {
    home: '<path d="M3.5 8.8L12 2l8.5 6.8"/><path d="M5.5 7.5V20h13V7.5"/><path d="M9 20v-6h6v6"/>',
    lead: '<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>',
    invitation: '<path d="M3 6h18"/><path d="M8 3v6"/><path d="M16 3v6"/><rect x="4" y="6" width="16" height="14" rx="2"/><path d="M8 12h8"/><path d="M8 16h5"/>',
    negotiation: '<path d="M5 6h14"/><path d="M8 11h8"/><path d="M10 16h4"/><rect x="4" y="3" width="16" height="18" rx="2"/>',
    customer: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/><path d="M4 20a8 8 0 0 1 16 0"/>',
    case: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/>',
    operations: '<path d="M4 6h16"/><path d="M7 6l2-3h6l2 3"/><rect x="5" y="6" width="14" height="12" rx="2"/><path d="M9 11h6"/><path d="M12 11v6"/>',
    approval: '<rect x="5" y="4" width="14" height="16" rx="2"/><path d="M8 8h8"/><path d="M8 12h5"/><path d="M9 16l2 2 4-4"/>',
    finance: '<path d="M12 3v18"/><path d="M17 7.5c0-1.9-2.2-3.5-5-3.5s-5 1.6-5 3.5 2.2 3.5 5 3.5 5 1.6 5 3.5-2.2 3.5-5 3.5-5-1.6-5-3.5"/>',
    team: '<path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M16.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M3.5 20a5 5 0 0 1 9 0"/><path d="M13 20a4 4 0 0 1 7 0"/>',
    analysis: '<path d="M5 18V9"/><path d="M12 18V5"/><path d="M19 18v-7"/><path d="M3 20h18"/>',
    child: '<circle cx="12" cy="12" r="2.2"/><path d="M12 3v3"/><path d="M12 18v3"/><path d="M3 12h3"/><path d="M18 12h3"/>'
  };

  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      ${icons[name] || icons.child}
    </svg>
  `;
}

function sidebarCardMarkup() {
  return `
    <div class="sidebar-card">
      <div class="sidebar-card-title">本周签约进度</div>
      <div class="sidebar-mini-chart">
        <span style="height: 46%"></span>
        <span style="height: 70%"></span>
        <span style="height: 58%"></span>
        <span style="height: 86%"></span>
      </div>
      <div class="sidebar-card-foot">
        <strong>72%</strong>
        <span>距目标还差 3 单</span>
      </div>
    </div>
  `;
}

function renderSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar) return;

  const pageId = document.body.dataset.page;
  const navHtml = navConfig
    .map((item) => {
      if (item.type === "link") {
        return `
          <a class="nav-item ${pageId === item.id ? "active" : ""}" href="${item.href}">
            <span class="icon icon-box">${iconMarkup(item.icon)}</span>
            <span class="nav-text">${item.label}</span>
          </a>
        `;
      }

      const hasActiveChild = item.children.some((child) => child.id === pageId);
      return `
        <div class="nav-group ${hasActiveChild ? "open" : ""}">
          <div class="nav-group-label">
            <span class="icon icon-box">${iconMarkup(item.icon)}</span>
            <span class="nav-text">${item.label}</span>
            <span class="chevron">›</span>
          </div>
          <div class="nav-children">
            ${item.children
              .map(
                (child) => `
                  <a class="nav-child ${pageId === child.id ? "active" : ""}" href="${child.href}">
                    <span class="icon icon-dot">${iconMarkup("child")}</span>
                    <span class="nav-text">${child.label}</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </div>
      `;
    })
    .join("");

  sidebar.innerHTML = `
    <div class="brand">
      <div class="brand-main">
        <div class="brand-badge">A</div>
        <div class="brand-text">律所系统</div>
      </div>
      <button class="collapse-btn" type="button" aria-label="收起导航">«</button>
    </div>
    <nav class="nav">${navHtml}</nav>
    ${sidebarCardMarkup()}
  `;

  sidebar.querySelectorAll(".nav-group-label").forEach((label) => {
    label.addEventListener("click", () => {
      label.parentElement.classList.toggle("open");
    });
  });

  const collapseBtn = sidebar.querySelector(".collapse-btn");
  if (collapseBtn) {
    collapseBtn.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }
}

function initTabs() {
  document.querySelectorAll(".tabs").forEach((tabRow) => {
    const tabs = Array.from(tabRow.querySelectorAll(".tab"));
    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        const href = tab.getAttribute("href");
        if (!href || href === "#") event.preventDefault();
        tabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
      });
    });
  });
}

function initPills() {
  document.querySelectorAll(".pill-row").forEach((row) => {
    const pills = Array.from(row.querySelectorAll(".pill"));
    pills.forEach((pill) => {
      pill.style.cursor = "pointer";
      pill.addEventListener("click", () => {
        pills.forEach((item) => item.classList.remove("active"));
        pill.classList.add("active");
      });
    });
  });
}

function initSwitchTabs() {
  document.querySelectorAll(".switch-tabs").forEach((tabRow) => {
    const tabs = Array.from(tabRow.querySelectorAll(".switch-tab"));
    const panels = Array.from(tabRow.parentElement.querySelectorAll(".switch-panel"));
    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        tabs.forEach((item) => item.classList.remove("active"));
        panels.forEach((panel) => panel.classList.remove("active"));
        tab.classList.add("active");
        if (panels[index]) panels[index].classList.add("active");
      });
    });
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/'/g, "&#39;");
}

  function leadBadgeClass(type, value) {
    const text = String(value || "").trim();
  
    if (type === "customerType") return text === "企业" ? "info" : "primary";

    if (type === "starLevel") {
      if (text === "1星") return "warning";
      if (text === "2星") return "info";
      if (text === "3星") return "success";
      if (text === "4星") return "primary";
      if (text === "5星") return "danger";
    }

  if (type === "source") {
    if (["快手", "领导介绍", "抖音", "转介绍"].includes(text)) return "warning";
    if (["自有案件"].includes(text)) return "success";
    return "primary";
  }

  if (type === "stage") {
    if (text === "跟进中") return "warning";
    if (["已转商机", "已转客户"].includes(text)) return "info";
    if (text === "无效") return "danger";
    return "primary";
  }

  return "primary";
}

function statusBadgeClass(value) {
  const text = String(value || "").trim();
  if (text === "不重复") return "success";
  if (text === "已分发") return "success";
  if (text === "潜在客户") return "warning";
  if (text === "重复") return "danger";
  if (text === "签约客户") return "success";
  if (text === "待分发") return "warning";
  if (text === "流失客户") return "danger";
  if (text === "已归档") return "success";
  if (["待补充", "待扫描", "待收", "部分", "未到店", "跟进中"].includes(text)) return "warning";
  if (["需原件", "异常", "失败", "无效"].includes(text)) return "danger";
  if (["履约中", "已转商机", "已转客户"].includes(text)) return "info";
  if (["已完成", "已结清", "已到店"].includes(text)) return "success";
  if (["待审批"].includes(text)) return "warning";
  return "primary";
}

function memberRoleBadgeClass(value) {
  const text = String(value || "").trim();
  if (text === "案源专员") return "primary";
  if (text === "邀约专员") return "warning";
  if (text === "谈案专员") return "success";
  if (text === "律师") return "info";
  return "primary";
}

function lawyerBadgeClass(value) {
  const text = String(value || "").trim();
  if (text === "合伙人") return "success";
  if (text === "授薪律师") return "primary";
  if (text === "提成律师") return "warning";
  if (text === "实习律师") return "info";
  return "info";
}

function personChipMarkup(name) {
  const text = String(name || "").trim();
  if (!text) return "-";
  return `<span class="person-chip"><span class="person-avatar">${escapeHtml(text.charAt(0))}</span>${escapeHtml(text)}</span>`;
}

function leadDatasetAttributes(lead) {
  const dataset = {
    id: lead.id,
    customerName: lead.customerName,
    leadName: lead.leadName || lead.customerName,
    customerType: lead.customerType,
    phone: lead.phone,
    wechat: lead.wechat,
    email: lead.email,
    source: lead.source,
    stage: lead.stage,
    caseType: lead.caseType,
    createdAt: lead.createdAt,
    lastFollowDate: lead.lastFollowDate,
    leadSummary: lead.leadSummary,
    description: lead.description,
    leadOwner: lead.leadOwner,
    invitationOwner: lead.invitationOwner,
    negotiationOwner: lead.negotiationOwner,
    address: lead.address,
    job: lead.job,
    recycleDays: lead.recycleDays
  };

  return Object.entries(dataset)
    .map(([key, value]) => `data-${key.replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)}="${escapeAttr(value || "")}"`)
    .join(" ");
}

function leadInfoCellMarkup(lead) {
  return `
    <div class="lead-info-cell">
      <div class="lead-info-main">
        <a class="table-link lead-info-title" href="#">${escapeHtml(lead.customerName)}</a>
        <span class="lead-info-case">（${escapeHtml(lead.caseType)}）</span>
      </div>
      <div class="lead-info-meta">
        <span class="badge ${leadBadgeClass("source", lead.source)}">${escapeHtml(lead.source)}</span>
        <span class="badge ${leadBadgeClass("stage", lead.stage)}">${escapeHtml(lead.stage)}</span>
        <span>${escapeHtml(lead.address)}</span>
      </div>
    </div>
  `;
}

function renderLeadManagementRows(leads) {
  return leads
    .map(
        (lead) => `
          <tr ${leadDatasetAttributes(lead)}>
            <td>${leadInfoCellMarkup(lead)}</td>
            <td><span class="badge ${leadBadgeClass("starLevel", lead.starLevel)}">${escapeHtml(lead.starLevel)}</span></td>
            <td><span class="badge ${leadBadgeClass("customerType", lead.customerType)}">${escapeHtml(lead.customerType)}</span></td>
            <td><span class="badge ${leadBadgeClass("source", lead.source)}">${escapeHtml(lead.source)}</span></td>
            <td>${escapeHtml(lead.caseType)}</td>
          <td>${escapeHtml(lead.leadSummary)}</td>
          <td><span class="badge ${leadBadgeClass("stage", lead.stage)}">${escapeHtml(lead.stage)}</span></td>
          <td>${escapeHtml(lead.description)}</td>
          <td>${escapeHtml(lead.address)}</td>
          <td>${escapeHtml(lead.job)}</td>
          <td>${escapeHtml(lead.phone)}</td>
            <td>${personChipMarkup(lead.leadOwner)}</td>
            <td>${personChipMarkup(lead.invitationOwner)}</td>
            <td>${personChipMarkup(lead.negotiationOwner)}</td>
            <td>${personChipMarkup(lead.caseOwner)}</td>
            <td><span class="action-links"><a class="action-link" href="#">分配谈案负责人</a><a class="action-link" href="#">分配办案负责人</a></span></td>
          </tr>
        `
    )
    .join("");
}

function renderInvitationRows(leads) {
  return leads
    .map(
      (lead) => `
        <tr ${leadDatasetAttributes(lead)}>
          <td><input type="checkbox" /></td>
          <td>${leadInfoCellMarkup(lead)}</td>
          <td><span class="badge ${leadBadgeClass("customerType", lead.customerType)}">${escapeHtml(lead.customerType)}</span></td>
          <td><span class="badge ${leadBadgeClass("source", lead.source)}">${escapeHtml(lead.source)}</span></td>
          <td>${escapeHtml(lead.caseType)}</td>
          <td>${escapeHtml(lead.leadSummary)}</td>
          <td><span class="badge ${leadBadgeClass("stage", lead.stage)}">${escapeHtml(lead.stage)}</span></td>
          <td>${escapeHtml(lead.description)}</td>
          <td>${escapeHtml(lead.address)}</td>
          <td>${escapeHtml(lead.job)}</td>
          <td>${personChipMarkup(lead.leadOwner)}</td>
          <td>${personChipMarkup(lead.invitationOwner)}</td>
          <td>${personChipMarkup(lead.negotiationOwner)}</td>
          <td><span class="action-links"><a class="action-link" href="#" data-open-create="invitation-record">新增邀约记录</a><a class="action-link" href="#" data-open-create="default">新增商机</a></span></td>
        </tr>
      `
    )
    .join("");
}

function renderNegotiationRows(leads) {
  return leads
    .map(
      (lead) => `
        <tr ${leadDatasetAttributes(lead)}>
          <td>${leadInfoCellMarkup(lead)}</td>
          <td><span class="badge ${leadBadgeClass("customerType", lead.customerType)}">${escapeHtml(lead.customerType)}</span></td>
          <td><span class="badge ${leadBadgeClass("source", lead.source)}">${escapeHtml(lead.source)}</span></td>
          <td>${escapeHtml(lead.caseType)}</td>
          <td>${escapeHtml(lead.leadSummary)}</td>
          <td><span class="badge ${leadBadgeClass("stage", lead.stage)}">${escapeHtml(lead.stage)}</span></td>
          <td>${escapeHtml(lead.description)}</td>
          <td>${escapeHtml(lead.address)}</td>
          <td>${escapeHtml(lead.job)}</td>
          <td>${escapeHtml(lead.phone)}</td>
          <td>${escapeHtml(lead.wechat)}</td>
          <td>${personChipMarkup(lead.leadOwner)}</td>
          <td>${personChipMarkup(lead.invitationOwner)}</td>
          <td>${personChipMarkup(lead.negotiationOwner)}</td>
          <td><span class="action-links"><a class="action-link" href="#" data-open-create="default">新增谈案记录</a></span></td>
        </tr>
      `
    )
    .join("");
}

function renderLeadTables() {
  const pageId = document.body.dataset.page;
  const leads = window.lawSystemData && Array.isArray(window.lawSystemData.leads) ? window.lawSystemData.leads : [];
  const tbody = document.querySelector(".table-shell tbody");
  if (!tbody || !leads.length) return;

  if (pageId === "lead-management") {
    tbody.innerHTML = renderLeadManagementRows(leads);
  } else if (pageId === "invitation-management") {
    tbody.innerHTML = renderInvitationRows(leads);
  } else if (pageId === "negotiation-management") {
    tbody.innerHTML = renderNegotiationRows(leads);
  }

  const footerCount = document.querySelector(".footer-row span");
  if (footerCount) footerCount.textContent = `共 ${leads.length} 条`;
}

function setDetailField(drawer, key, value) {
  drawer.querySelectorAll(`[data-detail-field="${key}"]`).forEach((target) => {
    const type = target.dataset.detailType;
    if (type === "person") {
      target.innerHTML = personChipMarkup(value);
      return;
    }
    if (type === "source-badge" || type === "source-badge-inline") {
      target.innerHTML = `<span class="badge ${leadBadgeClass("source", value)}">${escapeHtml(value || "-")}</span>`;
      return;
    }
    if (type === "customer-type-badge") {
      target.innerHTML = `<span class="badge ${leadBadgeClass("customerType", value)}">${escapeHtml(value || "-")}</span>`;
      return;
    }
    if (type === "stage-badge" || type === "stage-badge-inline") {
      target.innerHTML = `<span class="badge ${leadBadgeClass("stage", value)}">${escapeHtml(value || "-")}</span>`;
      return;
    }
    if (type === "status-badge") {
      target.innerHTML = `<span class="badge ${statusBadgeClass(value)}">${escapeHtml(value || "-")}</span>`;
      return;
    }
    target.textContent = value || "-";
  });
}

function buildDetailTitle(context, fallback) {
  if (context.memberName) return context.memberName;
  if (context.channelName) return context.channelName;
  if (context.ruleName) return context.ruleName;
  if (context.packageName) return context.packageName;
  if (context.fileName) return context.fileName;
  if (context.batchName) return context.batchName;
  if (context.materialName) return context.materialName;
  if (context.caseName) return context.caseName;
  if (context.contractNo && !context.contractName) return context.contractNo;
  if (context.contractNo) return context.contractNo;
  if (context.customerName && context.caseType) return `${context.customerName}（${context.caseType}）`;
  if (context.customerName) return context.customerName;
  return fallback;
}

function applyMemberAvatar(drawer, context) {
  const name = String(context.memberName || context.customerName || "").trim();
  const fallback = name ? name.charAt(0) : "新";
  const avatar = String(context.memberAvatar || "").trim();

  drawer.querySelectorAll("[data-detail-avatar-image]").forEach((img) => {
    if (avatar) {
      img.src = avatar;
      img.hidden = false;
    } else {
      img.removeAttribute("src");
      img.hidden = true;
    }
  });

  drawer.querySelectorAll("[data-detail-avatar-fallback]").forEach((node) => {
    node.textContent = fallback;
    node.hidden = Boolean(avatar);
  });
}

function applyTeamDetailDecorations(drawer, context) {
  drawer.querySelectorAll("[data-detail-role-stack]").forEach((node) => {
    const role = String(context.roleName || "").trim();
    const lawyerType = String(context.lawyerType || "").trim();
    const roleBadge = role ? `<span class="badge ${memberRoleBadgeClass(role)}">${escapeHtml(role)}</span>` : "";
    const lawyerBadge =
      lawyerType && lawyerType !== "-"
        ? `<span class="badge ${lawyerBadgeClass(lawyerType)}">${escapeHtml(lawyerType)}</span>`
        : "";
    node.innerHTML = roleBadge + lawyerBadge;
  });

  drawer.querySelectorAll('[data-detail-tags="specialtyTags"]').forEach((node) => {
    const tags = String(context.specialtyTags || "")
      .split(/[、,，]/)
      .map((item) => item.trim())
      .filter(Boolean);
    node.innerHTML = tags.length ? tags.map((tag) => `<span class="skill-tag">${escapeHtml(tag)}</span>`).join("") : '<span class="skill-tag">暂无标签</span>';
  });
}

function buildLeadOpportunityData(context) {
  const id = String(context.id || "").trim();
  const suffix = id.replace(/\D/g, "").slice(-4) || "0001";
  const statusMap = {
    LD0001: "谈判中",
    LD0002: "已报价",
    LD0003: "已失败",
    LD0004: "已报价",
    LD0005: "谈判中",
    LD0006: "谈判中",
    LD0007: "已成交",
    LD0008: "已报价",
    LD0009: "已失败",
    LD0010: "已成交"
  };

  return {
    no: `SJ${suffix}`,
    title: `${context.customerName || "-"}-${context.caseType || "-"}商机`,
    status: statusMap[id] || "已报价",
    owner: context.negotiationOwner || context.invitationOwner || context.leadOwner || context.ownerName || "",
    createdAt: context.createdAt || "-"
  };
}

function buildLeadCaseData(context) {
  const id = String(context.id || "").trim();
  const stageMap = {
    LD0001: "办理中",
    LD0002: "待签约",
    LD0003: "待签约",
    LD0004: "已结案",
    LD0005: "办理中",
    LD0006: "办理中",
    LD0007: "已归档",
    LD0008: "办理中",
    LD0009: "待签约",
    LD0010: "已归档"
  };

  return {
    title: `${context.customerName || "-"}-${context.caseType || "-"}`,
    stage: stageMap[id] || "办理中",
    createdAt: context.createdAt ? String(context.createdAt).replace(/-/g, "/") : "-",
    owner: context.negotiationOwner || context.leadOwner || "",
    collaborator: context.invitationOwner || ""
  };
}

function applySharedLeadPanels(drawer, context) {
  const opportunity = buildLeadOpportunityData(context);
  const caseInfo = buildLeadCaseData(context);

  drawer.querySelectorAll("[data-opportunity-no]").forEach((node) => {
    node.textContent = opportunity.no;
  });
  drawer.querySelectorAll("[data-opportunity-title]").forEach((node) => {
    node.textContent = opportunity.title;
  });
  drawer.querySelectorAll("[data-opportunity-status]").forEach((node) => {
    node.textContent = opportunity.status;
  });
  drawer.querySelectorAll("[data-opportunity-owner]").forEach((node) => {
    node.innerHTML = personChipMarkup(opportunity.owner);
  });
  drawer.querySelectorAll("[data-opportunity-created-at]").forEach((node) => {
    node.textContent = opportunity.createdAt;
  });

  drawer.querySelectorAll("[data-case-panel-title]").forEach((node) => {
    node.textContent = caseInfo.title;
  });
  drawer.querySelectorAll("[data-case-panel-stage]").forEach((node) => {
    node.textContent = caseInfo.stage;
  });
  drawer.querySelectorAll("[data-case-panel-created-at]").forEach((node) => {
    node.textContent = caseInfo.createdAt;
  });
  drawer.querySelectorAll("[data-case-panel-owner]").forEach((node) => {
    node.innerHTML = personChipMarkup(caseInfo.owner);
  });
  drawer.querySelectorAll("[data-case-panel-collab]").forEach((node) => {
    node.innerHTML = personChipMarkup(caseInfo.collaborator);
  });
}

function updateCreateAvatarPreview(scope) {
  if (!scope) return;
  const nameField = scope.querySelector("[data-create-avatar-name]");
  const fallbackNode = scope.querySelector("[data-create-avatar-fallback]");
  if (!nameField || !fallbackNode) return;

  const placeholder = nameField.dataset.placeholderText || "";
  const text = nameField.value === placeholder ? "" : nameField.value.trim();
  fallbackNode.textContent = text ? text.charAt(0) : "新";
}

function applyDetailContext(drawer, titleEl, fallbackTitle, context) {
  if (!context || !Object.keys(context).length) return;

  const detailMap = {
    customerName: context.customerName || context.leadName,
    customerType: context.customerType,
    customerStatus: context.customerStatus,
    starLevel: context.starLevel,
    contactName: context.contactName,
    phone: context.phone,
    wechat: context.wechat,
    email: context.email,
    source: context.source,
    stage: context.stage,
    caseType: context.caseType,
    createdAt: context.createdAt,
    firstFollowDate: context.firstFollowDate,
    lastFollowDate: context.lastFollowDate,
    description: context.description,
    note: context.note,
    materialName: context.materialName,
    packageName: context.packageName,
    fileName: context.fileName,
    batchName: context.batchName,
    materialType: context.materialType,
    materialStatus: context.materialStatus,
    uploadedAt: context.uploadedAt,
    uploader: context.uploader,
    originalStatus: context.originalStatus,
    storageLocation: context.storageLocation,
    ownerName: context.ownerName,
    customerTags: context.customerTags,
    relatedLeadCount: context.relatedLeadCount,
    relatedCaseCount: context.relatedCaseCount,
    memberName: context.memberName,
    memberNo: context.memberNo,
    memberAvatar: context.memberAvatar,
    roleName: context.roleName,
    lawyerType: context.lawyerType,
    specialtyTags: context.specialtyTags,
    memberStatus: context.memberStatus,
    intro: context.intro,
    education: context.education,
    age: context.age,
    joinDate: context.joinDate,
    hometown: context.hometown,
    inviteLoad: context.inviteLoad,
    negotiationLoad: context.negotiationLoad,
    caseLoad: context.caseLoad,
    leadLoad: context.leadLoad,
    leadOwner: context.leadOwner,
    invitationOwner: context.invitationOwner,
    negotiationOwner: context.negotiationOwner,
    address: context.address,
    job: context.job,
    recycleDays: context.recycleDays,
    contractNo: context.contractNo,
    contractName: context.contractName,
    contractType: context.contractType,
    caseName: context.caseName,
    contractStatus: context.contractStatus,
    signedDate: context.signedDate,
    contractAmount: context.contractAmount,
    receivedAmount: context.receivedAmount,
    unreceivedAmount: context.unreceivedAmount,
    paymentStatus: context.paymentStatus,
    paymentProgress: context.paymentProgress,
    validity: context.validity
    ,
    channelName: context.channelName,
    labelName: context.labelName,
    regionName: context.regionName,
    accountName: context.accountName,
    timeRange: context.timeRange,
    leadVolume: context.leadVolume,
    duplicateVolume: context.duplicateVolume,
    spendAmount: context.spendAmount,
    currentM1: context.currentM1,
    currentRoi: context.currentRoi,
    historicalRoi: context.historicalRoi,
    successRate: context.successRate,
    validCount: context.validCount,
    costPerValid: context.costPerValid,
    uploadBy: context.uploadBy,
    uploadFileName: context.uploadFileName,
    costDate: context.costDate,
    registerCount: context.registerCount
  };

  if (titleEl) titleEl.textContent = buildDetailTitle(detailMap, fallbackTitle);
  Object.entries(detailMap).forEach(([key, value]) => setDetailField(drawer, key, value));
  applyMemberAvatar(drawer, detailMap);
  applyTeamDetailDecorations(drawer, detailMap);
  if (context.id && (context.leadOwner !== undefined || context.invitationOwner !== undefined || context.negotiationOwner !== undefined)) {
    applySharedLeadPanels(drawer, context);
  }
}

function initDrawers() {
  document.querySelectorAll(".detail-pane").forEach((drawer) => {
    const workspace = drawer.closest(".workspace");
    const tabs = Array.from(drawer.querySelectorAll(".detail-tab"));
    const panels = Array.from(drawer.querySelectorAll(".detail-group"));
    const title = drawer.querySelector(".detail-title");
    const baseDetailTitle = title ? title.textContent.trim() : "";
    const createTitle = drawer.dataset.createTitle || "未命名记录";
    const createPanelIndex = panels.findIndex((panel) => panel.dataset.role === "create");
    let currentDetailContext = {};

    if (!workspace || !tabs.length || !panels.length) return;

    let backdrop = workspace.querySelector(".drawer-backdrop");
    if (!backdrop) {
      backdrop = document.createElement("div");
      backdrop.className = "drawer-backdrop";
      workspace.appendChild(backdrop);
    }

    function activateTab(index) {
      tabs.forEach((tab, tabIndex) => tab.classList.toggle("active", tabIndex === index));
      panels.forEach((panel, panelIndex) => panel.classList.toggle("active", panelIndex === index));
    }

    function getCreatePanel() {
      return drawer.querySelector('.detail-group[data-role="create"]');
    }

    function resetCreatePanel() {
      const createPanel = getCreatePanel();
      if (!createPanel) return;

      createPanel.querySelectorAll("[data-create-mode]").forEach((panel, panelIndex) => {
        panel.classList.toggle("active", panelIndex === 0);
      });

      createPanel.querySelectorAll("input, textarea").forEach((field) => {
        const placeholderText = field.dataset.placeholderText || field.value || "";
        field.dataset.placeholderText = placeholderText;
        field.value = placeholderText;
        field.classList.toggle("create-placeholder", Boolean(placeholderText));
      });

      createPanel.querySelectorAll("select").forEach((field) => {
        field.selectedIndex = 0;
        field.classList.add("create-placeholder");
      });

      updateCreateAvatarPreview(createPanel);
    }

    function setCreateMode(mode) {
      const createPanel = getCreatePanel();
      if (!createPanel) return createTitle;

      const modePanels = Array.from(createPanel.querySelectorAll("[data-create-mode]"));
      if (!modePanels.length) return createTitle;

      const activePanel = modePanels.find((panel) => panel.dataset.createMode === mode) || modePanels[0];
      modePanels.forEach((panel) => panel.classList.toggle("active", panel === activePanel));
      return activePanel.dataset.createTitle || createTitle;
    }

    function applyCreateContext(context) {
      const createPanel = getCreatePanel();
      if (!createPanel) return;

      Object.entries(context || {}).forEach(([key, value]) => {
        if (!value) return;
        const field = createPanel.querySelector(`.create-mode.active [data-create-field="${key}"], [data-create-field="${key}"]`);
        if (field) {
          field.value = value;
          field.classList.remove("create-placeholder");
        }
      });
    }

    function openDrawer(index, mode, context) {
      const targetIndex = mode === "create" && createPanelIndex >= 0 ? createPanelIndex : index;
      if (mode === "detail" && context && Object.keys(context).length) currentDetailContext = context;

      activateTab(targetIndex >= 0 ? targetIndex : 0);
      drawer.classList.toggle("is-create", mode === "create");
      drawer.classList.add("is-open");
      backdrop.classList.add("is-open");

      if (mode === "create") {
        resetCreatePanel();
        const modeTitle = setCreateMode((context && context.createMode) || drawer.dataset.defaultCreateMode || "default");
        if (title) title.textContent = modeTitle;
        applyCreateContext(context || {});
      } else {
        if (title) title.textContent = baseDetailTitle;
        applyDetailContext(drawer, title, baseDetailTitle, context && Object.keys(context).length ? context : currentDetailContext);
      }
    }

    function closeDrawer() {
      drawer.classList.remove("is-open", "is-create");
      backdrop.classList.remove("is-open");
      if (title) title.textContent = buildDetailTitle(currentDetailContext, baseDetailTitle);
    }

    activateTab(0);

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => openDrawer(index, "detail", currentDetailContext));
    });

    drawer.querySelectorAll(".detail-topbar-actions span").forEach((item) => {
      if (item.textContent.trim() === "×") {
        item.classList.add("detail-close");
        item.style.cursor = "pointer";
        item.addEventListener("click", closeDrawer);
      }
    });

    backdrop.addEventListener("click", closeDrawer);

    workspace.querySelectorAll(".button").forEach((button) => {
      if (button.dataset.createMode || button.textContent.includes("新增") || button.textContent.includes("新建")) {
        button.addEventListener("click", () => {
          openDrawer(0, "create", { createMode: button.dataset.createMode || "default" });
        });
      }
    });

    workspace.querySelectorAll("[data-open-create]").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const row = trigger.closest("tr, .list-item, .kanban-card");
        const context = row ? { ...row.dataset } : {};
        context.createMode = trigger.dataset.openCreate || "default";
        openDrawer(0, "create", context);
      });
    });

    workspace.querySelectorAll("[data-open-detail]").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const row = trigger.closest("tr, .list-item, .kanban-card");
        if (!row) return;
        openDrawer(0, "detail", { ...row.dataset });
      });
    });

    const splitMain = workspace.querySelector(".split-main");
    if (splitMain) {
      splitMain.querySelectorAll("tbody tr, .list-item, .kanban-card").forEach((item) => {
        item.classList.add("drawer-trigger");
        item.addEventListener("click", (event) => {
          if (event.target.closest("a.action-link")) return;
          openDrawer(0, "detail", { ...item.dataset });
        });
      });
    }

    const createPanel = getCreatePanel();
    if (createPanel) {
      createPanel.querySelectorAll("input, textarea").forEach((field) => {
        field.dataset.placeholderText = field.value || "";
        field.classList.toggle("create-placeholder", Boolean(field.value));

        field.addEventListener("focus", () => {
          if (field.value === field.dataset.placeholderText) field.value = "";
          field.classList.remove("create-placeholder");
        });

        field.addEventListener("blur", () => {
          if (!field.value.trim()) {
            field.value = field.dataset.placeholderText || "";
            field.classList.toggle("create-placeholder", Boolean(field.value));
          }
          updateCreateAvatarPreview(createPanel);
        });

        field.addEventListener("input", () => updateCreateAvatarPreview(createPanel));
      });

      createPanel.querySelectorAll("select").forEach((field) => {
        field.classList.add("create-placeholder");
        field.addEventListener("change", () => field.classList.remove("create-placeholder"));
      });

      updateCreateAvatarPreview(createPanel);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar();
  renderLeadTables();
  initTabs();
  initPills();
  initSwitchTabs();
  initDrawers();
});
