import { formatDate } from '@/lib/formatters';
import { Transaction } from '@/types';

interface TransactionItemProps {
  transaction: Transaction;
}

const getTransactionIcon = (description: string) => {
  if (description.includes('iPhone') || description.includes('Apple')) {
    return (
      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-lg">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="currentColor"/>
        </svg>
      </div>
    );
  }
  
  if (description.includes('Netflix')) {
    return (
      <div className="w-10 h-10 flex items-center justify-center bg-[#E50914] rounded-lg">
        <span className="text-white font-bold text-xl">N</span>
      </div>
    );
  }
  
  if (description.includes('Figma')) {
    return (
      <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#F24E1E] via-[#FF7262] to-[#A259FF]">
        <span className="text-white font-bold text-sm">Fg</span>
      </div>
    );
  }

  // Default icon
  return (
    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
      <span className="text-sm text-blue-600 font-semibold">$</span>
    </div>
  );
};

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 py-3 px-4 hover:bg-gray-50 items-center">
      {/* Name/Business */}
      <div className="col-span-2 flex items-center gap-3">
        {getTransactionIcon(transaction.description)}
        <div>
          <p className="font-medium text-sm text-gray-900">{transaction.description}</p>
          <p className="text-xs text-gray-500">{transaction.category}</p>
        </div>
      </div>
      
      {/* Type - empty for now as per design */}
      <div>
        <p className="text-sm text-gray-600">{transaction.category}</p>
      </div>
      
      {/* Amount */}
      <div className="text-right">
        <p className="font-semibold text-sm text-gray-900">
          ${transaction.amount.toFixed(2)}
        </p>
      </div>
      
      {/* Date */}
      <div className="text-right col-start-4">
        <p className="text-xs text-gray-500">{formatDate(transaction.date)}</p>
      </div>
    </div>
  );
};
