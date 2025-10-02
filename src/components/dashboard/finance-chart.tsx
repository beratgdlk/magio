"use client";

import { formatCurrency, formatDate } from '@/lib/formatters';
import { ChartData } from '@/types';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

interface FinanceChartProps {
  data: ChartData[];
  currency?: string;
}

export const FinanceChart = ({ data, currency = 'USD' }: FinanceChartProps) => {
  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: { value: number; payload: { date: string } }[] }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <p className="text-sm font-medium mb-2">
            {formatDate(payload[0].payload.date)}
          </p>
          <div className="space-y-1">
            <p className="text-sm text-[#C8EE44]">
              Income: {formatCurrency(payload[0].value, currency)}
            </p>
            <p className="text-sm text-[#29A073]">
              Expense: {formatCurrency(payload[1].value, currency)}
            </p>
            <p className="text-sm font-semibold border-t pt-1">
              Net: {formatCurrency(payload[0].value - payload[1].value, currency)}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => {
              const date = new Date(value);
              return `${date.toLocaleDateString('en-US', { month: 'short' })} ${date.getDate()}`;
            }}
            stroke="#9CA3AF"
            fontSize={11}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            stroke="#9CA3AF"
            fontSize={11}
            axisLine={false}
            tickLine={false}
            domain={[0, 14000]}
            ticks={[0, 4000, 6000, 10000, 14000]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C8EE44"
            strokeWidth={3}
            dot={{ fill: '#C8EE44', r: 5 }}
            activeDot={{ r: 7 }}
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#29A073"
            strokeWidth={3}
            dot={{ fill: '#29A073', r: 5 }}
            activeDot={{ r: 7 }}
            name="Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

