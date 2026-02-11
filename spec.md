# Zeabur Dashboard Redesign — Design Spec

> Single source of truth for the redesign of Dashboard's two core tabs.

---

## 1. 現有 UI 問題分析

### 服務狀態頁 (Service Status)

| # | 問題 | 嚴重度 | 影響 |
|---|------|--------|------|
| S1 | 右上角持續 loading 的空白區塊 | High | 浪費 viewport 空間，造成「壞了嗎？」的不確定感 |
| S2 | 「重新部署 / 重啟 / 重新上傳」三按鈕平級 | Medium | 用戶需思考哪個才是最常用操作；誤觸風險 |
| S3 | Deployments 與右側卡片的資訊層級不明確 | Medium | 頁面缺少視覺重心，閱讀路徑不清晰 |
| S4 | 網域「PROVISIONED」狀態標籤不直覺 | Low | 非工程師用戶難理解此狀態的含義 |
| S5 | 檔案/記錄/指令三卡片佔空間但資訊密度低 | Medium | 大面積留白，未善用空間 |

### 資源用量頁 (Resource Usage)

| # | 問題 | 嚴重度 | 影響 |
|---|------|--------|------|
| R1 | 記憶體 & CPU 圖表各自獨立 | Medium | 無法一眼看出「服務是否健康」 |
| R2 | 成本估算藏在圖表下方 info box | High | 費用是用戶最在意的資訊之一，但被弱化 |
| R3 | 缺少 at-a-glance 摘要 | High | 用戶必須逐一看圖表才能掌握狀態 |
| R4 | 時間區間選擇器 (12h) 位置偏隱蔽 | Low | 需要切換時找不到 |

---

## 2. 改進方案

### 2.1 服務狀態 Tab

#### 頂部 — Status Overview Card
- 左側：運行狀態（Running / Stopped / Deploying）大字 + 彩色 dot
- 中間：最後部署時間（relative time, e.g. "3 min ago"）
- 右側：預估月費（$2.34/mo）
- 整行底色隨狀態改變（green / yellow / red 微調）

#### 操作按鈕 — Primary + Dropdown
- 主要 CTA：「Redeploy」按鈕（藍色, prominent）
- 「...」More 按鈕展開 dropdown：Restart / Suspend / Re-upload

#### 部署歷史 — Timeline 風格
- 左側 timeline 線 + dot
- 每筆 deployment 顯示：commit hash (short)、commit message、build duration、時間戳
- 當前 live 版本用 "CURRENT" badge 標示
- 可展開查看 build log summary

#### 右側 — 整合面板
- **網域管理**：狀態用 icon + 色彩代替文字（✓ green = active, ⏳ yellow = provisioning）
- **Quick Actions**：Files / Logs / Shell 整合為 icon button row，hover 顯示 label
- 移除無用的 loading 區塊

### 2.2 資源用量 Tab

#### 頂部 — Resource Summary Bar（三卡並排）
1. **CPU**：目前使用量 / 上限，圓環進度指示
2. **Memory**：同上
3. **Est. Cost**：本月預估費用，與上月比較 (+12% ↑)

#### 圖表區 — 統一面積圖
- Memory + CPU 可切換或並排（tab 切換）
- 使用 Recharts AreaChart，帶 gradient fill
- Tooltip 顯示精確數值
- 時間區間選擇器移到圖表右上角（prominently）
- Alert threshold 虛線（接近上限時警示）

#### 成本估算 — Prominent Card
- 放在圖表下方，但用較大字體和 card 樣式
- 明細列表：CPU hours、Memory hours、單價、合計
- 「查看完整帳單」link

---

## 3. 元件清單

| 元件 | 檔案 | 描述 |
|------|------|------|
| Sidebar | `sidebar.tsx` | 左側服務列表，含 project 名稱 |
| ServiceHeader | `service-header.tsx` | 服務名 + icon + Status/Resources tab |
| StatusOverview | `status-overview.tsx` | 狀態摘要卡 |
| DeploymentList | `deployment-list.tsx` | Timeline 風格部署歷史 |
| DomainCard | `domain-card.tsx` | 網域管理 |
| QuickActions | `quick-actions.tsx` | Files/Logs/Shell 快捷按鈕 |
| ResourceSummary | `resource-summary.tsx` | CPU/Mem/Cost 三卡摘要 |
| ResourceChart | `resource-chart.tsx` | 面積圖 |
| CostEstimator | `cost-estimator.tsx` | 成本明細卡 |

---

## 4. GA4 事件定義

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `service_status_viewed` | 進入服務狀態頁 | `service_id` |
| `deployment_redeploy_clicked` | 點擊 Redeploy | `service_id`, `source` |
| `deployment_history_expanded` | 展開部署詳情 | `deployment_id` |
| `domain_manage_clicked` | 管理網域 | `domain` |
| `resource_tab_viewed` | 進入資源用量頁 | `service_id` |
| `resource_timerange_changed` | 切換時間區間 | `range` |
| `resource_chart_hovered` | 圖表互動 | `metric`, `value` |
| `cost_estimate_viewed` | 查看成本估算 | `estimated_cost` |

---

## 5. A/B 測試構想

### Test A: Resource Summary Bar
- **Control**: 無 summary bar（直接看圖表）
- **Variant**: 有 summary bar（三卡摘要）
- **Hypothesis**: Summary bar 讓用戶更快掌握狀態 → 減少 support ticket 20%
- **Primary Metric**: Time to first action on page
- **Secondary Metric**: Support ticket volume related to resource questions

### Test B: Deployment Timeline vs List
- **Control**: 純列表（現有風格）
- **Variant**: Timeline 風格
- **Hypothesis**: Timeline 讓部署歷史更容易掃讀 → 提升 rollback 操作效率
- **Primary Metric**: Time to initiate rollback
- **Secondary Metric**: Rollback success rate
