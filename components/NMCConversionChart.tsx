"use client"

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { label: "Same day", after: 90.9, before: 50.8 },
  { label: "1–3 days", after: 5.3, before: 11.8 },
  { label: "4–7 days", after: 2.5, before: 6.6 },
  { label: "8–14 days", after: 1.5, before: 6.5 },
  { label: "15–30 days", after: 0, before: 7.5 },
  { label: "1+ months", after: 0, before: 16.8 },
]

const config = {
  after: { label: "After launch", color: "#0568D0" },
  before: { label: "Before (Jan 2024–Feb 2025)", color: "#6b7280" },
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div className="min-w-[8rem] rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <p className="mb-1.5 font-medium">{label}</p>
      {payload.map((entry: any) => {
        const key = entry.dataKey as keyof typeof config
        return (
          <div key={key} className="flex items-center gap-2 py-0.5">
            <span className="h-2.5 w-2.5 shrink-0 rounded-[2px]" style={{ background: config[key]?.color }} />
            <span className="text-muted-foreground">{config[key]?.label}</span>
            <span className="ml-auto font-mono font-medium tabular-nums">{entry.value}%</span>
          </div>
        )
      })}
    </div>
  )
}

function CustomLegend() {
  return (
    <div className="flex items-center justify-center gap-4 pt-2 text-xs">
      {Object.entries(config).map(([key, value]) => (
        <div key={key} className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-[2px]" style={{ background: value.color }} />
          <span className="text-muted-foreground">{value.label}</span>
        </div>
      ))}
    </div>
  )
}

export function NMCConversionChart() {
  return (
    <ChartContainer config={config} className="h-[300px] w-full">
      <BarChart data={data} margin={{ top: 16, right: 0, bottom: 0, left: -10 }} barCategoryGap="30%">
        <CartesianGrid vertical={false} stroke="currentColor" strokeOpacity={0.1} strokeDasharray="3 3" />
        <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "currentColor", opacity: 0.5 }} />
        <YAxis tickFormatter={(v) => `${v}%`} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "currentColor", opacity: 0.5 }} domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
        <Tooltip cursor={{ fill: "currentColor", fillOpacity: 0.05 }} content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
        <Bar dataKey="after" fill={config.after.color} radius={[3, 3, 0, 0]} />
        <Bar dataKey="before" fill={config.before.color} radius={[3, 3, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}