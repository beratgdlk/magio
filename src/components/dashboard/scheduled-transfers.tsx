import { formatCurrency } from '@/lib/formatters';

interface Transfer {
  id: string;
  name: string;
  date: string;
  amount: number;
  avatar: string;
}

interface ScheduledTransfersProps {
  transfers: Transfer[];
}

export const ScheduledTransfers = ({ transfers }: ScheduledTransfersProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Scheduled Transfers</h3>
        <button className="text-sm text-blue-600 hover:underline">View All →</button>
      </div>

      <div className="space-y-3">
        {transfers.map((transfer) => (
          <div key={transfer.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={transfer.avatar}
                alt={transfer.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm">{transfer.name}</p>
                <p className="text-xs text-muted-foreground">{transfer.date}</p>
              </div>
            </div>
            <p className="font-semibold text-sm">
              {formatCurrency(transfer.amount, 'USD')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

