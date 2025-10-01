import { formatCurrency, formatDate } from '@/lib/formatters';
import { Transaction } from '@/types';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface TransactionItemProps {
  transaction: Transaction;
}

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const isIncome = transaction.type === 'income';

  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div className="flex items-center gap-4">
        <div
          className={`p-2 rounded-lg ${
            isIncome ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
          }`}
        >
          {isIncome ? (
            <ArrowDownLeft className="h-5 w-5" />
          ) : (
            <ArrowUpRight className="h-5 w-5" />
          )}
        </div>
        <div>
          <p className="font-medium text-sm">{transaction.description}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{transaction.category}</span>
            <span>•</span>
            <span>{formatDate(transaction.date)}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p
          className={`font-semibold ${
            isIncome ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isIncome ? '+' : '-'}
          {formatCurrency(transaction.amount, transaction.currency)}
        </p>
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${
            transaction.status === 'completed'
              ? 'bg-green-100 text-green-700'
              : transaction.status === 'pending'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {transaction.status}
        </span>
      </div>
    </div>
  );
};

