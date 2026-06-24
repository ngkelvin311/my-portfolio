"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  { week: "Aug 29", month: "Sep '22", value: 11 },
  { week: "Sep 5",  month: "",        value: 13 },
  { week: "Sep 12", month: "",        value: 16 },
  { week: "Sep 19", month: "",        value: 19 },
  { week: "Sep 26", month: "",        value: 21 },
  { week: "Oct 3",  month: "Oct '22", value: 20 },
  { week: "Oct 10", month: "",        value: 20 },
  { week: "Oct 17", month: "",        value: 20 },
  { week: "Oct 24", month: "",        value: 22 },
  { week: "Oct 31", month: "",        value: 29 },
  { week: "Nov 7",  month: "Nov '22", value: 38 },
  { week: "Nov 14", month: "",        value: 41 },
  { week: "Nov 21", month: "",        value: 43 },
  { week: "Nov 28", month: "",        value: 44 },
  { week: "Dec 5",  month: "Dec '22", value: 47 },
  { week: "Dec 12", month: "",        value: 49 },
  { week: "Dec 19", month: "",        value: 50 },
  { week: "Dec 26", month: "",        value: 52 },
  { week: "Jan 2",  month: "Jan '23", value: 55 },
  { week: "Jan 9",  month: "",        value: 58 },
  { week: "Jan 16", month: "",        value: 60 },
  { week: "Jan 23", month: "",        value: 60 },
  { week: "Jan 30", month: "",        value: 59 },
  { week: "Feb 6",  month: "Feb '23", value: 57 },
  { week: "Feb 13", month: "",        value: 57 },
  { week: "Feb 20", month: "",        value: 57 },
  { week: "Feb 27", month: "",        value: 58 },
  { week: "Mar 6",  month: "Mar '23", value: 58 },
  { week: "Mar 13", month: "",        value: 59 },
  { week: "Mar 20", month: "",        value: 60 },
  { week: "Mar 27", month: "",        value: 61 },
  { week: "Apr 2",  month: "Apr '23", value: 61 },
];

function CustomTooltip({ active, payload, label }: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div
      className="rounded-lg p-3 flex flex-col gap-1"
      style={{
        background: "rgb(var(--background))",
        border: "1px solid rgb(var(--border))",
      }}
    >
      <p className="type-meta" style={{ opacity: 0.5 }}>{label}</p>
      <p className="type-body font-medium">{payload[0].value}%</p>
      <p className="type-meta" style={{ opacity: 0.4 }}>fully in-stock</p>
    </div>
  );
}

// Renders the dashed "Feature released" label above the reference line
function ReleaseLabel({ viewBox }: { viewBox?: { x: number; y: number } }) {
  if (!viewBox) return null;
  const { x, y } = viewBox;
  return (
    <g>
      <text
        x={x + 8}
        y={y + 14}
        fontSize={11}
        fontFamily="inherit"
        fill="rgb(var(--foreground))"
        opacity={0.55}
      >
        Feature released
      </text>
    </g>
  );
}

export function StockAvailabilityResultsChart() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <p className="type-body font-medium">Online Orders: Fully In-Stock Percentage</p>
        <p className="type-meta" style={{ opacity: 0.45 }}>
          Weekly segmentation, Aug 29 2022 to Apr 2 2023 — maX Analytics (prod)
        </p>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 16, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgb(var(--border))"
              opacity={0.6}
              vertical={false}
            />
            <XAxis
              dataKey="week"
              tickFormatter={(val: string) =>
                data.find((d) => d.week === val)?.month ?? ""
              }
              tick={{
                fontSize: 12,
                fill: "rgb(var(--foreground))",
                opacity: 0.45,
              }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis
              tickFormatter={(val: number) => `${val}%`}
              tick={{
                fontSize: 12,
                fill: "rgb(var(--foreground))",
                opacity: 0.45,
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              width={40}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: "rgb(var(--border))", strokeWidth: 1 }} />
           <ReferenceLine
  x="Oct 3"
  stroke="#888"
  strokeDasharray="4 4"
  strokeWidth={1.5}
  label={<ReleaseLabel />}
/>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "#3b82f6", stroke: "none" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-2">
        <span
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ background: "#3b82f6" }}
        />
        <p className="type-meta" style={{ opacity: 0.45 }}>Fully In-Stock Percentage</p>
      </div>
    </div>
  );
}