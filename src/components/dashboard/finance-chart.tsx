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
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => formatDate(value, 'en-US', { month: 'short', day: 'numeric' })}
            stroke="#888888"
            fontSize={12}
          />
          <YAxis
            tickFormatter={(value) => `$${value / 1000}k`}
            stroke="#888888"
            fontSize={12}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C8EE44"
            strokeWidth={2}
            dot={{ fill: '#C8EE44', r: 4 }}
            activeDot={{ r: 6 }}
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#29A073" 
            strokeWidth={2}
            dot={{ fill: '#29A073', r: 4 }}
            activeDot={{ r: 6 }}
            name="Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

