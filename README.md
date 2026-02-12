# Zeabur Dashboard Redesign

![Node](https://img.shields.io/badge/node-%3E%3D20.18-brightgreen?logo=node.js)
![pnpm](https://img.shields.io/badge/pnpm-required-F69220?logo=pnpm)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC?logo=tailwind-css)

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

- **React 19** + **TypeScript 5.7** — Modern React with full type safety
- **Vite 6** — Lightning-fast build tool
- **Tailwind CSS v4** — Design tokens via `@theme` directive
- **Recharts** — Composable charting library
- **Framer Motion** — Production-ready animations
- **Lucide React** — Consistent icon set
- **React Router v7** — Type-safe routing
- **Storybook v8** — Component development environment
- **Vitest 4** + **happy-dom** — Fast unit and snapshot testing
- **pnpm** — Efficient package manager (required)

> **Note**: Node.js **≥20.18** is required for Storybook v8 compatibility.

## Quick Start

```bash
cd src
pnpm install
pnpm dev
```

Open http://localhost:5173 to view the dashboard.

**Development tools:**
- Storybook: `pnpm storybook` → http://localhost:6006
- Tests: `pnpm test` or `pnpm test:watch`

## Project Structure

This project follows **Atomic Design** methodology for scalable component architecture:

```
src/
├── main.tsx                          # App entry + Router setup
├── globals.css                       # M3 design tokens (@theme)
├── vite.config.ts
├── vitest.config.ts
├── test-setup.ts
│
├── pages/
│   ├── service-status.tsx            # 服務狀態頁
│   └── resource-usage.tsx            # 資源用量頁
│
├── components/
│   ├── atoms/                        # Basic building blocks
│   │   ├── button/
│   │   ├── mini-area-chart/
│   │   └── time-labels/
│   │
│   ├── molecules/                    # Simple component groups
│   │   ├── alert-tip/
│   │   ├── domain-card/
│   │   ├── metric-card/
│   │   ├── quick-actions/
│   │   ├── time-range-selector/
│   │   └── upgrade-banner/
│   │
│   ├── organisms/                    # Complex UI sections
│   │   ├── cost-estimator/
│   │   ├── deployment-list/
│   │   ├── metric-detail-chart/
│   │   ├── resource-chart/
│   │   ├── resource-summary/
│   │   ├── service-header/
│   │   ├── sidebar/
│   │   └── status-overview/
│   │
│   └── templates/                    # Page-level layouts
│       └── dashboard-layout/
│
├── lib/
│   ├── analytics.ts                  # GA4 event tracking
│   ├── ab-testing.ts                 # A/B testing (GrowthBook)
│   ├── mock-data.ts                  # Deterministic test data
│   └── utils.ts                      # cn() + helpers
│
└── .storybook/                       # Storybook configuration
```

### Component Organization

Each component folder may contain:
- `index.tsx` — Component implementation
- `__stories__/*.stories.tsx` — Storybook stories
- `__tests__/*.test.tsx` — Vitest unit/snapshot tests

## Design System

This project uses **Material Design 3 (Dark theme)** with tokens defined in `globals.css` using Tailwind v4's native `@theme` directive.

### Key Color Tokens

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| `primary` | `#D0BCFF` | `bg-primary` `text-primary` | Primary actions, links |
| `surface` | `#141218` | `bg-surface` | Main background |
| `surface-container` | `#211F26` | `bg-surface-container` | Card backgrounds |
| `on-surface` | `#E6E0E9` | `text-on-surface` | Primary text |
| `on-surface-variant` | `#CAC4D0` | `text-on-surface-variant` | Secondary text |
| `outline-variant` | `#49454F` | `border-outline-variant` | Borders, dividers |
| `status-success` | `#7DD87E` | `bg-status-success` | Success states |
| `status-error` | `#FF0000` | `bg-status-error` | Error states |
| `status-pending` | `#938F99` | `bg-status-pending` | Pending/loading |

### Spacing Scale

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `xs` | 4px | `p-xs` `gap-xs` |
| `sm` | 8px | `p-sm` `gap-sm` |
| `md` | 12px | `p-md` `gap-md` |
| `lg` | 16px | `p-lg` `gap-lg` |
| `xl` | 24px | `p-xl` `gap-xl` |
| `2xl` | 32px | `p-2xl` `gap-2xl` |
| `3xl` | 48px | `p-3xl` `gap-3xl` |

### Border Radius

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `sm` | 8px | `rounded-sm` |
| `md` | 12px | `rounded-md` |
| `lg` | 16px | `rounded-lg` |
| `xl` | 28px | `rounded-xl` |

### Typography

- **Sans-serif**: Inter (system fallbacks)
- **Monospace**: JetBrains Mono

### Usage Guidelines

**✅ DO:**
```tsx
<div className="bg-surface-container border border-outline-variant p-lg rounded-md">
  <p className="text-on-surface">Use native token classes</p>
</div>
```

**❌ DON'T:**
```tsx
<div style={{ background: 'var(--color-surface-container)' }}>
  {/* Avoid arbitrary values — use Tailwind classes instead */}
</div>
```

All design tokens are registered in `globals.css` using `@theme {}` and accessible as native Tailwind utilities.

## Development

### Storybook

Component stories are co-located with components in `__stories__/` subdirectories.

**Commands:**
```bash
pnpm storybook          # Dev server on http://localhost:6006
pnpm build-storybook    # Build static Storybook
```

Storybook is integrated into the production build at `dist/storybook/` for easy component reference.

**Example story structure:**
```tsx
// components/atoms/button/__stories__/button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../index';

const meta = {
  title: 'Atoms/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Click me' },
};
```

### Testing

**Framework:** Vitest 4 + happy-dom (not jsdom — ESM compatibility)

**Commands:**
```bash
pnpm test           # Run all tests once
pnpm test:watch     # Watch mode
```

**Critical requirement for mock data:**

All test data **MUST** use `seededRandom()` from `lib/mock-data.ts` to ensure **deterministic snapshots**.

```tsx
// ✅ Deterministic (stable snapshots)
import { seededRandom } from '@/lib/mock-data';
const value = seededRandom(0, 100);

// ❌ Non-deterministic (fails snapshot tests)
const value = Math.random() * 100;
```

**Example test with snapshot:**
```tsx
// components/atoms/button/__tests__/button.test.tsx
import { render } from '@testing-library/react';
import { Button } from '../index';

describe('Button', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
```

## 數據策略

- 所有關鍵互動都有 **GA4 事件追蹤**（見 `measurement/analytics-plan.md`）
- DevTools console 可看到事件 log
- A/B 測試構想：Resource Summary Bar / Deployment Timeline

## Architecture Decisions

### Why Atomic Design?

The project migrated from a flat component structure to **Atomic Design** for improved scalability and maintainability:

**Component hierarchy:**
- **Atoms** — Primitive UI elements (buttons, inputs, labels)
- **Molecules** — Simple component combinations (search bar, metric card)
- **Organisms** — Complex, standalone UI sections (navigation, cost estimator)
- **Templates** — Page-level layout shells
- **Pages** — Full route implementations with data

**Benefits:**
- Clear component hierarchy and naming
- Better reusability through composition
- Easier onboarding for new developers
- Logical file organization as project scales

### Why Tailwind v4?

Tailwind v4's `@theme` directive enables **first-class design token integration** without a config file:

```css
/* globals.css */
@theme {
  --color-primary: #D0BCFF;
  --spacing-lg: 16px;
}
```

Tokens become native Tailwind utilities: `bg-primary`, `p-lg`. This provides:
- Type-safe token usage (no arbitrary values)
- IDE autocomplete for all design tokens
- Zero runtime overhead
- Single source of truth for design system

### Why happy-dom over jsdom?

jsdom v28+ has ESM compatibility issues. happy-dom is:
- Fully ESM-compatible
- Faster test execution
- Sufficient for unit testing React components

## Scripts Reference

| Command | Description | Port |
|---------|-------------|------|
| `pnpm dev` | Start Vite dev server | 5173 |
| `pnpm build` | Build app + Storybook to `dist/` | — |
| `pnpm preview` | Preview production build | — |
| `pnpm storybook` | Start Storybook dev server | 6006 |
| `pnpm build-storybook` | Build Storybook to `storybook-static/` | — |
| `pnpm test` | Run all tests once (CI mode) | — |
| `pnpm test:watch` | Run tests in watch mode | — |

## 相關文件

- `spec.md` — 完整設計規格
- `research/current-ui-audit.md` — 現有 UI 問題分析
- `research/competitive-ref.md` — 競品參考
- `design/design-decisions.md` — 設計決策紀錄
- `measurement/analytics-plan.md` — 埋點 & A/B 測試計畫

---

**Built with Material Design 3 • Atomic Design • Tailwind v4**
