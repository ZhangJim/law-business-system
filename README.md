# 律所系统静态原型说明

这个项目是一个用于演示的静态网页原型，当前重点是：

- 左侧导航 + 多业务模块页面
- 列表页
- 居中弹层详情/新建
- 案源、邀约、谈案等模块的联动展示

如果你要自己改代码，建议先看这份 README，再去对应文件动手。

---

## 1. 项目入口

- 总入口：`index.html`
- 实际首页：`pages/home/home.html`

直接打开 `index.html` 即可，它会跳转到首页。

---

## 2. 目录结构

```text
law-business-system/
  index.html
  README.md
  assets/
    scripts/
      app.js
      data.js
    styles/
      main.css
  pages/
    home/
    leads/
    invitation/
    negotiation/
    customer/
    case/
    finance/
    team/
    analysis/
```

### 你最常改的地方

- 页面结构：`pages/.../*.html`
- 公共样式：`assets/styles/main.css`
- 公共交互：`assets/scripts/app.js`
- 共享数据：`assets/scripts/data.js`

---

## 3. 页面和模块对应关系

### 首页

- `pages/home/home.html`

### 案源

- 案源管理：`pages/leads/lead-management.html`

### 邀约

- 邀约管理：`pages/invitation/invitation-management.html`
- 邀约记录：`pages/invitation/invitation-records.html`

### 谈案与签约

- 谈案管理：`pages/negotiation/negotiation-management.html`
- 商机管理：`pages/negotiation/opportunity-management.html`
- 合同管理：`pages/negotiation/contract-management.html`
- 回款计划：`pages/negotiation/payment-plan.html`
- 回款记录：`pages/negotiation/payment-records.html`

### 客户

- 客户管理：`pages/customer/customer-management.html`

### 案件

- 案件管理：`pages/case/case-management.html`
- 档案管理：`pages/case/archive-management.html`
- 案件阶段配置：`pages/case/case-stage-config.html`

### 财务

- 应收台账：`pages/finance/receivable-ledger.html`
- 应付台账：`pages/finance/payable-ledger.html`
- 提成管理：`pages/finance/commission-management.html`
- 发票管理：`pages/finance/invoice-management.html`

### 团队

- 团队管理：`pages/team/team-management.html`

### 分析

- 案件分析：`pages/analysis/lead-analysis.html`
- 邀约分析：`pages/analysis/invitation-analysis.html`
- 谈案分析：`pages/analysis/negotiation-analysis.html`
- 签约分析：`pages/analysis/signing-analysis.html`

---

## 4. 代码职责怎么分

### `assets/scripts/data.js`

这是**共享数据源**。

当前最重要的是：

- `window.lawSystemData.leads`

这里维护案源虚拟数据。  
现在案源管理、邀约管理、谈案管理 3 张表都共用这份数据。

### `assets/scripts/app.js`

这是**公共交互和公共渲染**。

主要负责：

- 左侧导航渲染
- 列表共享数据渲染
- 详情弹层打开/关闭
- 新建弹层打开/关闭
- 点列表行时把当前行数据带入详情
- 切换详情里的 tab
- 新建表单里的灰色待填交互

### `assets/styles/main.css`

这是**公共样式**。

主要负责：

- 页面整体布局
- 左侧导航
- 表格样式
- 居中弹层
- 详情信息区
- 跟进动态时间线
- 标签区按钮和关联记录面板

### `pages/.../*.html`

这是**每个业务页面自己的结构**。

通常一个页面里会有：

- 顶部 tab / 筛选
- 列表 table
- 详情弹层 `.detail-pane`
- 新建表单 `data-role="create"`

---

## 5. 如果你要改“列表”

### 案源 / 邀约 / 谈案三张表的数据来源

不要优先去页面里改 `<tbody>`，因为这三张表现在是共享数据渲染的。

应该先改：

- `assets/scripts/data.js`

里面的：

- `window.lawSystemData.leads`

### 这三张列表是谁渲染的

在 `assets/scripts/app.js` 里：

- `renderLeadTables()`
- `renderLeadManagementRows()`
- `renderInvitationRows()`
- `renderNegotiationRows()`

### 什么时候要去改 HTML 页面本身

如果你改的是**列结构**，比如：

- 多一列
- 少一列
- 列标题文案变化

那你要去对应页面改 `<thead>`：

- `pages/leads/lead-management.html`
- `pages/invitation/invitation-management.html`
- `pages/negotiation/negotiation-management.html`

如果你改的是**每行展示什么数据**，那通常还要一起改：

- `assets/scripts/app.js` 里的行渲染函数

---

## 6. 如果你要改“案源详情弹层”

当前案源、邀约管理、谈案管理这三页，用的是同一套“案源详情思路”。

相关页面：

- `pages/leads/lead-management.html`
- `pages/invitation/invitation-management.html`
- `pages/negotiation/negotiation-management.html`

### 详情的基本信息区在哪里

在页面里搜：

- `data-role="detail"`

然后看：

- `.info-grid`
- `data-detail-field="..."`

例如：

- `data-detail-field="customerName"`
- `data-detail-field="phone"`
- `data-detail-field="source"`
- `data-detail-field="stage"`

### 详情区的值是谁带进去的

在 `assets/scripts/app.js` 里：

- `applyDetailContext()`
- `setDetailField()`

当你点列表某一行时，当前行的 `data-*` 会被带到详情里。

### 如果要新增一个详情字段

你通常需要改 3 处：

1. `assets/scripts/data.js`  
给每条数据加这个字段

2. 列表行 dataset 生成  
`assets/scripts/app.js` 里的 `leadDatasetAttributes()`

3. 详情页 HTML  
在对应页面的 `.info-grid` 里加一个新的：

```html
<div class="info-item">
  <div class="info-label">字段名</div>
  <div class="info-value" data-detail-field="xxx">默认值</div>
</div>
```

---

## 7. 如果你要改“案源详情下方标签区”

标签区在这 3 个页面里都有：

- `pages/leads/lead-management.html`
- `pages/invitation/invitation-management.html`
- `pages/negotiation/negotiation-management.html`

你可以搜索：

- `.switch-tabs`
- `.switch-panel`

### 当前标签顺序

1. 跟进动态
2. 邀约记录
3. 谈案记录
4. 商机
5. 合同
6. 案件
7. 回款计划
8. 回款记录

### 每个标签面板怎么组成

现在通常是：

- 顶部按钮区：`.detail-panel-head`
- 新增按钮行：`.detail-action-row`
- 内容区：
  - 跟进动态：`.activity-list`
  - 其他标签：`.related-list`

### 如果你要改“新增按钮”

直接去对应 `switch-panel` 里改按钮文字即可。

### 如果你要改某个标签内容

直接去对应页面的那个 `switch-panel` 改内容块。

例如：

- 邀约记录标签里改成邀约记录样子
- 商机标签里改成商机摘要
- 合同标签里改成合同摘要

---

## 8. 如果你要改“历史记录”

在对应页面里搜索：

- `data-role="history"`

当前案源 / 邀约 / 谈案 这三页，历史已经统一成“案源历史记录”结构。

如果你想换成别的字段，直接改里面的表格内容即可。

---

## 9. 如果你要改“新建案源弹层”

页面：

- `pages/leads/lead-management.html`

搜索：

- `data-role="create"`

当前规则是：

- 新建案源字段应该和“基本信息”一致
- 不再单独保留 `姓名`
- 不再单独保留 `跟进类型`
- 不再单独保留 `跟进记录`

### 当前新建案源字段

- 客户名称
- 电话
- 微信
- 邮箱
- 案源来源
- 案源阶段
- 最后跟进日期
- 距公海回收时间（天）
- 案件描述
- 案源负责人
- 邀约负责人
- 谈案负责人
- 职务
- 客户地址

如果你以后觉得基本信息字段变了，**这里也要同步改**。

---

## 10. 如果你要改“列表点击后为什么弹谁的详情”

关键逻辑在：

- `assets/scripts/app.js`

相关函数：

- `leadDatasetAttributes()`
- `applyDetailContext()`
- `openDrawer()`

理解方式：

1. 数据源里有一条 lead
2. 渲染列表时，把 lead 字段写成 `<tr data-xxx="...">`
3. 点这一行时，JS 读取这行 `dataset`
4. 再把这些值写入详情弹层的 `data-detail-field`

所以如果你遇到“点李四，出来还是张三”，优先检查：

- 数据源字段有没有
- `<tr>` 有没有正确的 `data-*`
- 详情区有没有对应的 `data-detail-field`

---

## 11. 如果你要改“弹层样式”

公共样式都在：

- `assets/styles/main.css`

高频搜索关键词：

- `.detail-pane`：整个居中弹层
- `.detail-scroll`：弹层滚动区
- `.info-grid`：基本信息区
- `.switch-tabs`：标签导航
- `.activity-list`：跟进动态
- `.related-list`：其他标签的关联记录
- `.detail-mini-button`：标签区顶部新增按钮

---

## 12. 当前最值得注意的开发规则

### 案源三页共用一套源数据

这三页不要各写各的数据：

- 案源管理
- 邀约管理
- 谈案管理

优先改：

- `assets/scripts/data.js`

### 改字段时要考虑 3 个层次

1. 数据源里有没有这个字段
2. 列表有没有展示这个字段
3. 详情/新建弹层有没有同步这个字段

### 改列表结构时别只改页面

如果是共享列表页，除了页面 HTML 的表头，通常还要一起改：

- `assets/scripts/app.js`

---

## 13. 推荐修改路径

### 场景 A：我想改案源虚拟数据

直接改：

- `assets/scripts/data.js`

### 场景 B：我想给案源列表加一列

一起改：

- `pages/leads/lead-management.html` 的表头
- `assets/scripts/app.js` 的 `renderLeadManagementRows()`

如果邀约/谈案也要同步，就一起改：

- `renderInvitationRows()`
- `renderNegotiationRows()`

### 场景 C：我想给案源详情加字段

一起改：

- `assets/scripts/data.js`
- `assets/scripts/app.js`
- 对应页面的 `.info-grid`

### 场景 D：我想改弹层里某个标签面板

直接改对应页面的 `switch-panel`。

---

## 14. 你自己改代码时的建议

最稳的顺序是：

1. 先改数据源
2. 再改列表渲染
3. 再改详情弹层
4. 最后改新建弹层

这样不容易出现“列表显示了，详情没跟上”这种错位。

---

## 15. 现在已知的一点说明

当前这个项目仍然是**静态原型**，不是完整业务系统，所以有些按钮只是做了原型展示，没有真的把所有新增按钮都接到对应新建弹层。

不过结构已经按可扩展方式整理好了：

- 共享数据源
- 共享列表渲染
- 共享详情绑定
- 页面模块拆分

后面继续加模块，维护成本会比一开始低很多。
