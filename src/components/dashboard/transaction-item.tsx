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
    <div className="py-4 border-b last:border-b-0 hover:bg-gray-50/50 transition-colors">
      <div className="grid grid-cols-12 gap-4 items-center">
        {/* Name/Business - 5 columns */}
        <div className="col-span-12 md:col-span-5 flex items-center gap-3">
          {getTransactionIcon(transaction.description)}
          <div>
            <p className="font-medium text-sm text-gray-900">{transaction.description}</p>
            <p className="text-xs text-gray-400">{transaction.company || transaction.category}</p>
          </div>
        </div>
        
        {/* Date - 2 columns, shown below name on mobile */}
        <div className="col-span-6 md:col-span-2 md:text-center order-3 md:order-2">
          <p className="text-xs text-gray-400">{formatDate(transaction.date)}</p>
        </div>
        
        {/* Type - 3 columns */}
        <div className="hidden md:block md:col-span-3 md:text-center order-2 md:order-3">
          <p className="text-sm text-gray-600">{transaction.category}</p>
        </div>
        
        {/* Amount - 2 columns */}
        <div className="col-span-6 md:col-span-2 text-right order-2 md:order-4">
          <p className="font-semibold text-base text-gray-900">
            ${transaction.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
};
