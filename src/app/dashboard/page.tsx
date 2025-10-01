"use client";

import { BalanceCard } from '@/components/dashboard/balance-card';
import { FinanceChart } from '@/components/dashboard/finance-chart';
import { TransactionItem } from '@/components/dashboard/transaction-item';
import { WalletCard } from '@/components/dashboard/wallet-card';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Logo } from '@/components/ui/logo';
import { useAuth } from '@/contexts/auth-context';
import dummyData from '@/data/dummy.json';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/sign-in');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/sign-in');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Financial Dashboard</h1>
            <p className="text-muted-foreground">
              Track your finances and manage your wealth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BalanceCard
              title="Total Balance"
              amount={dummyData.totalBalance}
              currency={dummyData.currency}
              trend={{ value: 12.5, isPositive: true }}
            />
            <BalanceCard
              title="Business Capital"
              amount={dummyData.businessCapital}
              currency={dummyData.currency}
              trend={{ value: 8.3, isPositive: true }}
            />
          </div>

          <FinanceChart data={dummyData.chartData} currency={dummyData.currency} />

          <div>
            <h2 className="text-xl font-semibold mb-4">Wallets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dummyData.wallets.map((wallet) => (
                <WalletCard key={wallet.id} wallet={wallet} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <Card className="p-6">
              <div>
                {dummyData.transactions.map((transaction) => (
                  <TransactionItem key={transaction.id} transaction={transaction} />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

