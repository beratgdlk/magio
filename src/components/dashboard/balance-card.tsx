import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';

interface BalanceCardProps {
  title: string;
  amount: number;
  currency: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export const BalanceCard = ({ title, amount, currency, trend }: BalanceCardProps) => {
  return (
    <Card className="p-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-2">
          <h2 className="text-3xl font-bold">
            {formatCurrency(amount, currency)}
          </h2>
          {trend && (
            <span
              className={`text-sm font-medium ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {trend.isPositive ? '+' : '-'}
              {Math.abs(trend.value)}%
            </span>
          )}
        </div>
      </div>
    </Card>
  );
};

