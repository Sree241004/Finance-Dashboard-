"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function TransactionLineChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300} minWidth={1}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#52525b" opacity={0.2} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#71717a' }}
          dy={10}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: '#71717a' }}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          contentStyle={{ backgroundColor: '#18181b', borderRadius: '8px', border: 'none', color: '#fff' }}
          itemStyle={{ color: '#fff' }}
          cursor={{ stroke: '#52525b', strokeWidth: 1 }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#10b981"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 6, fill: '#10b981', stroke: '#fff', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
