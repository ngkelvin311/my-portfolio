"use client"

import { CartesianGrid, LabelList, Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer } from "@/components/ui/chart"

const data = [
  { week: "w/c 5 May", nmc: 65 },
  { week: "w/c 10 May", nmc: 60 },
  { week: "w/c 17 May", nmc: 61, legacy: 51 },
  { week: "w/c 24 May", nmc: 68, legacy: 57 },
  { week: "w/c 31 May", nmc: 71, legacy: 55 },
]

const config = {
  nmc: { label: "After launch", color: "#0568D0" },
  legacy: { label: "Before (Jan 2024–Feb 2025)", color: "#6b7280" },
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  const filtered = payload.filter((e: any) => e.value !== null && e.value !== undefined)
  if (!filtered.length) return null
  return (
    <div className="min-w-[8rem] rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <p className="mb-1.5 font-medium">{label}</p>
      {filtered.map((entry: any) => {
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

export function NMCConversionLineChart() {
  return (
    <ChartContainer config={config} className="h-[300px] w-full">
      <LineChart data={data} margin={{ top: 24, right: 16, bottom: 0, left: -10 }}>
        <CartesianGrid stroke="currentColor" strokeOpacity={0.1} strokeDasharray="3 3" />
        <XAxis dataKey="week" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "currentColor", opacity: 0.5 }} />
        <YAxis tickFormatter={(v) => `${v}%`} tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "currentColor", opacity: 0.5 }} domain={[0, 80]} ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]} />
        <Tooltip cursor={{ stroke: "currentColor", strokeOpacity: 0.15 }} content={<CustomTooltip />} />
        <ReferenceLine x="w/c 17 May" stroke="currentColor" strokeOpacity={0.25} strokeDasharray="4 4" label={{ value: "Legacy tracking live", position: "insideTopRight", fontSize: 11, fill: "currentColor", opacity: 0.4 }} />
        <Line type="monotone" dataKey="nmc" stroke={config.nmc.color} strokeWidth={2} dot={{ r: 4, fill: config.nmc.color, strokeWidth: 0 }} connectNulls>
          <LabelList dataKey="nmc" position="top" fontSize={11} fill="currentColor" opacity={0.6} />
        </Line>
        <Line type="monotone" dataKey="legacy" stroke={config.legacy.color} strokeWidth={2} dot={{ r: 4, fill: config.legacy.color, strokeWidth: 0 }} connectNulls={false}>
          <LabelList dataKey="legacy" position="top" fontSize={11} fill="currentColor" opacity={0.6} />
        </Line>
        <Legend content={<CustomLegend />} />
      </LineChart>
    </ChartContainer>
  )
}