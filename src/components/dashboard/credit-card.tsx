import { formatCurrency } from '@/lib/formatters';
import { Wallet } from '@/types';

interface CreditCardProps {
  wallet: Wallet;
}

export const CreditCard = ({ wallet }: CreditCardProps) => {
  const getCardGradient = (type: string) => {
    switch (type) {
      case 'bank':
        return 'bg-gradient-to-br from-gray-800 to-gray-900';
      case 'credit':
        return 'bg-gradient-to-br from-orange-400 to-pink-500';
      case 'crypto':
        return 'bg-gradient-to-br from-blue-500 to-purple-600';
      default:
        return 'bg-gradient-to-br from-gray-700 to-gray-800';
    }
  };

  const formatCardNumber = () => {
    const randomNum = Math.floor(Math.random() * 10000);
    return `5495 7381 3789 ${String(randomNum).padStart(4, '0')}`;
  };

  return (
    <div className={`${getCardGradient(wallet.type)} rounded-2xl p-6 text-white relative overflow-hidden h-48`}>
      <div className="absolute top-4 right-4 opacity-20">
        <div className="w-16 h-16 rounded-full border-8 border-white"></div>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-6 bg-yellow-400 rounded"></div>
          </div>
          <p className="text-sm opacity-80">{wallet.name}</p>
        </div>

        <div>
          <p className="text-lg font-mono tracking-wider mb-3">
            {formatCardNumber()}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs opacity-60">Balance</p>
              <p className="text-xl font-bold">
                {formatCurrency(wallet.balance, wallet.currency)}
              </p>
            </div>
            <div className="text-2xl font-bold opacity-90">VISA</div>
          </div>
        </div>
      </div>
    </div>
  );
};

