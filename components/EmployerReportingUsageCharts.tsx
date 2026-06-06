"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

const BLUE = "#0568D0"

const w = (d: number[]) => [...d, 0, 0]

const VIEWS = [
  ...w([8,   65,  72,  72,  70]),  // Mar 3–7
  ...w([53,  2,   53,  60,  60]),  // Mar 10–14
  ...w([52,  11,  75,  57,  79]),  // Mar 17–21
  ...w([62,  61,  28,  3,   25]),  // Mar 24–28
  ...w([1,   22,  72,  60,  58]),  // Mar 31–Apr 4
  ...w([24,  21,  1,   99,  75]),  // Apr 7–11
  ...w([64,  65,  16,  78,  97]),  // Apr 14–18
  ...w([44,  11,  13,  85,  85]),  // Apr 21–25
  ...w([45,  25,  1,   85,  85]),  // Apr 28–May 2
  ...w([8,   70,  165, 110, 70]),  // May 5–9
  ...w([40,  40,  57,  58,  50]),  // May 12–16
  ...w([40,  38,  65,  127, 65]),  // May 19–23
  ...w([58,  55,  50,  19,  35]),  // May 26–30
  ...w([1,   85,  155, 80,  35]),  // Jun 2–6
  8,   30,  30,  45,  50,          // Jun 9–13
]

const VIEWERS = [
  ...w([6,   13,  16,  15,  14]),  // Mar 3–7
  ...w([12,  1,   18,  17,  16]),  // Mar 10–14
  ...w([11,  7,   14,  15,  16]),  // Mar 17–21
  ...w([12,  12,  6,   4,   1]),   // Mar 24–28
  ...w([1,   1,   10,  13,  19]),  // Mar 31–Apr 4
  ...w([14,  11,  7,   19,  20]),  // Apr 7–11
  ...w([18,  17,  15,  14,  17]),  // Apr 14–18
  ...w([17,  12,  8,   17,  16]),  // Apr 21–25
  ...w([15,  15,  11,  16,  11]),  // Apr 28–May 2
  ...w([1,   14,  20,  16,  9]),   // May 5–9
  ...w([8,   8,   12,  15,  15]),  // May 12–16
  ...w([13,  12,  8,   17,  16]),  // May 19–23
  ...w([17,  8,   9,   2,   8]),   // May 26–30
  ...w([1,   13,  17,  17,  9]),   // Jun 2–6
  6,   9,   14,  14,  17,          // Jun 9–13
]

// 14 full weeks (×7) + 5 = 103 data points
// Month label positions (approx first day of each month)
const MONTH_TICKS: Record<number, string> = {
  0:  "Mar",
  30: "Apr",
  58: "May",
  88: "Jun",
}

const chartData = VIEWS.map((v, i) => ({
  i,
  views: v,
  viewers: VIEWERS[i] ?? 0,
}))

function UsageChart({
  label,
  dataKey,
  yDomain,
  yTicks,
}: {
  label: string
  dataKey: "views" | "viewers"
  yDomain: [number, number]
  yTicks: number[]
}) {
  return (
    <div
      className="flex flex-col gap-3 p-5 rounded-lg"
      style={{ background: "rgb(var(--surface))" }}
    >
      <p className="type-body text-sm font-medium">{label}</p>
      <div style={{ height: 168 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 4, right: 4, bottom: 0, left: 4 }}
            barCategoryGap={0.3}
          >
            <CartesianGrid
              vertical={false}
              stroke="currentColor"
              strokeOpacity={0.08}
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="i"
              tickLine={false}
              axisLine={false}
              interval={0}
              tick={(props) => {
                const lbl = MONTH_TICKS[props.index as number]
                if (!lbl) return <g />
                return (
                  <text
                    x={props.x}
                    y={props.y + 10}
                    textAnchor="middle"
                    fontSize={9}
                    fill="currentColor"
                    opacity={0.4}
                  >
                    {lbl}
                  </text>
                )
              }}
            />
            <YAxis
              tick={{ fontSize: 9, fill: "currentColor", opacity: 0.4 }}
              tickLine={false}
              axisLine={false}
              width={32}
              domain={yDomain}
              ticks={yTicks}
            />
            <Bar
              dataKey={dataKey}
              fill={BLUE}
              radius={[1, 1, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export function EmployerReportingUsageCharts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <UsageChart
        label="Views per day"
        dataKey="views"
        yDomain={[0, 200]}
        yTicks={[0, 100, 200]}
      />
      <UsageChart
        label="Unique viewers per day"
        dataKey="viewers"
        yDomain={[0, 20]}
        yTicks={[0, 10, 20]}
      />
    </div>
  )
}