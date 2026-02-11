export const serviceData = {
  id: "svc_abc123",
  name: "zeabur-web",
  status: "running" as const,
  type: "Web Service",
  region: "Asia East (Taiwan)",
  lastDeployedAt: new Date(Date.now() - 3 * 60 * 1000).toISOString(), // 3 min ago
  estimatedMonthlyCost: 2.34,
  uptime: "99.97%",
};

export const deployments = [
  {
    id: "deploy_001",
    commitHash: "a1b2c3d",
    commitMessage: "fix: resolve memory leak in websocket handler",
    branch: "main",
    status: "live" as const,
    buildDuration: 42,
    createdAt: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    author: "Lin Yi",
  },
  {
    id: "deploy_002",
    commitHash: "e4f5g6h",
    commitMessage: "feat: add rate limiting middleware",
    branch: "main",
    status: "succeeded" as const,
    buildDuration: 38,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    author: "Lin Yi",
  },
  {
    id: "deploy_003",
    commitHash: "i7j8k9l",
    commitMessage: "chore: update dependencies to latest",
    branch: "main",
    status: "succeeded" as const,
    buildDuration: 55,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    author: "Lin Yi",
  },
  {
    id: "deploy_004",
    commitHash: "m0n1o2p",
    commitMessage: "fix: correct CORS headers for API routes",
    branch: "main",
    status: "failed" as const,
    buildDuration: 12,
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    author: "Lin Yi",
  },
  {
    id: "deploy_005",
    commitHash: "q3r4s5t",
    commitMessage: "feat: implement user authentication flow",
    branch: "main",
    status: "succeeded" as const,
    buildDuration: 67,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    author: "Lin Yi",
  },
];

export const domains = [
  {
    domain: "zeabur-web.zeabur.app",
    status: "active" as const,
    isDefault: true,
  },
  {
    domain: "my-app.example.com",
    status: "provisioning" as const,
    isDefault: false,
  },
];

// Deterministic pseudo-random for stable chart data
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Generate resource usage data for charts
function generateTimeSeriesData(hours: number) {
  const data = [];
  const now = Date.now();
  const interval = (hours * 60 * 60 * 1000) / 60; // 60 data points

  for (let i = 59; i >= 0; i--) {
    const timestamp = now - i * interval;
    const date = new Date(timestamp);
    const timeLabel = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

    // Simulate realistic usage patterns
    const baseMemory = 128 + Math.sin(i / 10) * 30;
    const baseCpu = 15 + Math.sin(i / 8) * 10;

    // Add some spikes
    const memorySpike = i > 20 && i < 30 ? 50 : 0;
    const cpuSpike = i > 40 && i < 45 ? 25 : 0;

    data.push({
      time: timeLabel,
      timestamp,
      memory: Math.max(0, Math.round(baseMemory + memorySpike + seededRandom(i + hours * 100) * 15)),
      cpu: Math.max(0, Math.min(100, Math.round(baseCpu + cpuSpike + seededRandom(i + hours * 200) * 8))),
    });
  }

  return data;
}

export const resourceData = {
  current: {
    cpu: { used: 0.12, limit: 1, unit: "vCPU", percent: 12 },
    memory: { used: 126, limit: 256, unit: "MB", percent: 49 },
    network: { used: 1.2, unit: "GB" },
  },
  cost: {
    estimated: 1.33,
    previousMonth: 1.19,
    breakdown: [
      { item: "CPU", usage: "0.12 vCPU", unitPrice: "$0.50/vCPU", total: 0.06 },
      { item: "記憶體", usage: "126 MB", unitPrice: "$0.01/MB", total: 1.27 },
      { item: "網路流量", usage: "1.2 GB", unitPrice: "免費", total: 0.0, isFree: true },
    ],
  },
  timeSeries: {
    "1h": generateTimeSeriesData(1),
    "6h": generateTimeSeriesData(6),
    "12h": generateTimeSeriesData(12),
    "24h": generateTimeSeriesData(24),
    "7d": generateTimeSeriesData(168),
  },
};

export const sidebarServices = [
  { id: "svc_abc123", name: "zeabur-web", type: "Web Service", status: "running" as const },
  { id: "svc_def456", name: "postgres-db", type: "PostgreSQL", status: "running" as const },
  { id: "svc_ghi789", name: "redis-cache", type: "Redis", status: "running" as const },
  { id: "svc_jkl012", name: "worker-queue", type: "Worker", status: "stopped" as const },
];
