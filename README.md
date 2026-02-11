# Zeabur Dashboard Redesign

Design Engineer 面試作品 — Redesign Zeabur Dashboard 的兩個核心 tab。

## Overview

針對 Zeabur Dashboard 的 **Service Status** 和 **Resource Usage** 兩個 tab 進行 redesign，解決現有 UI 的資訊層級、成本透明度、操作主次等問題。

### 改進重點

| 問題 | 解法 |
|------|------|
| 右上角空白 loading 區塊 | → Status Overview Card（狀態 + 最後部署 + 預估月費） |
| 操作按鈕缺乏主次 | → Primary CTA「Redeploy」+ More dropdown |
| 成本資訊被弱化 | → Prominent Cost Card + 明細展開 |
| 缺少 at-a-glance 摘要 | → Resource Summary Bar（CPU / Mem / Cost） |
| 圖表時間選擇器隱蔽 | → 移到圖表右上角 prominently |

## Tech Stack

- **React 19** + TypeScript
- **Vite** — 開發工具
- **Tailwind CSS v4** — 樣式
- **Recharts** — 圖表
- **Framer Motion** — 動畫
- **Lucide React** — 圖標
- **React Router v7** — 路由

## Quick Start

```bash
cd src
pnpm install
pnpm dev
```

Open http://localhost:5173

## 專案結構

```
src/
├── main.tsx                    # Entry point + Router
├── pages/
│   ├── service-status.tsx      # 服務狀態頁
│   └── resource-usage.tsx      # 資源用量頁
├── components/
│   ├── dashboard-layout.tsx    # Layout shell
│   ├── sidebar.tsx             # 左側服務列表
│   ├── service-header.tsx      # 服務名稱 + tabs
│   ├── status-overview.tsx     # 狀態摘要卡
│   ├── deployment-list.tsx     # Timeline 部署歷史
│   ├── domain-card.tsx         # 網域管理
│   ├── quick-actions.tsx       # Files/Logs/Shell
│   ├── resource-summary.tsx    # CPU/Mem/Cost 三卡
│   ├── resource-chart.tsx      # 面積圖
│   └── cost-estimator.tsx      # 成本明細
├── lib/
│   ├── analytics.ts            # GA4 event tracking
│   ├── ab-testing.ts           # A/B testing (GrowthBook)
│   ├── mock-data.ts            # 假資料
│   └── utils.ts                # cn() helper
```

## 數據策略

- 所有關鍵互動都有 GA4 事件（見 `measurement/analytics-plan.md`）
- DevTools console 可看到事件 log
- A/B 測試構想：Resource Summary Bar / Deployment Timeline

## 相關文件

- `spec.md` — 完整設計規格
- `research/current-ui-audit.md` — 現有 UI 問題分析
- `research/competitive-ref.md` — 競品參考
- `design/design-decisions.md` — 設計決策紀錄
- `measurement/analytics-plan.md` — 埋點 & A/B 測試計畫
