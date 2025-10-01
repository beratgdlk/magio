import { Card } from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import { Wallet } from '@/types';
import { Wallet as WalletIcon, CreditCard, Banknote, Bitcoin } from 'lucide-react';

interface WalletCardProps {
  wallet: Wallet;
}

const getWalletIcon = (type: string) => {
  switch (type) {
    case 'bank':
      return <WalletIcon className="h-5 w-5" />;
    case 'credit':
      return <CreditCard className="h-5 w-5" />;
    case 'cash':
      return <Banknote className="h-5 w-5" />;
    case 'crypto':
      return <Bitcoin className="h-5 w-5" />;
    default:
      return <WalletIcon className="h-5 w-5" />;
  }
};

export const WalletCard = ({ wallet }: WalletCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            {getWalletIcon(wallet.type)}
            <span className="text-sm font-medium">{wallet.name}</span>
          </div>
          <p className="text-2xl font-bold">
            {formatCurrency(wallet.balance, wallet.currency)}
          </p>
        </div>
      </div>
    </Card>
  );
};

