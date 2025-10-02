import { formatCurrency } from '@/lib/formatters';
import Image from 'next/image';

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
      <div className="flex items-center justify-between mb-5">  
        <h3 className="text-base font-semibold">Scheduled Transfers</h3>
        <button className="text-sm text-[#29A073] font-medium hover:underline">View All →</button>
      </div>

      <div className="space-y-4">
        {transfers.map((transfer) => (
          <div key={transfer.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={transfer.avatar}
                alt={transfer.name}
                width={44}
                height={44}
                className="rounded-full object-cover"
              />      
              <div> 
                <p className="font-semibold text-sm text-gray-900 mb-0.5">{transfer.name}</p>
                <p className="text-xs text-gray-400">{transfer.date}</p>
              </div>
            </div>
            <p className="font-semibold text-sm text-gray-900">
              - {formatCurrency(transfer.amount, 'USD')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

