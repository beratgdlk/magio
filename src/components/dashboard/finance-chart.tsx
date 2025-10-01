"use client";

import { Card } from '@/components/ui/card';
import { formatCurrency, formatDate } from '@/lib/formatters';
import { ChartData } from '@/types';
import {
    CartesianGrid,
    Legend,
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
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <p className="text-sm font-medium mb-2">
            {formatDate(payload[0].payload.date)}
          </p>
          <div className="space-y-1">
            <p className="text-sm text-green-600">
              Income: {formatCurrency(payload[0].value, currency)}
            </p>
            <p className="text-sm text-red-600">
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
    <Card className="p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Financial Overview</h3>
        <p className="text-sm text-muted-foreground">
          Daily income and expense trends
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
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
          <Legend />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ fill: '#ef4444', r: 4 }}
            activeDot={{ r: 6 }}
            name="Expense"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

