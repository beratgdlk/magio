"use client";

import { CreditCard } from '@/components/dashboard/credit-card';
import { FinanceChart } from '@/components/dashboard/finance-chart';
import { Header } from '@/components/dashboard/header';
import { ScheduledTransfers } from '@/components/dashboard/scheduled-transfers';
import { Sidebar } from '@/components/dashboard/sidebar';
import { TransactionItem } from '@/components/dashboard/transaction-item';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import dummyData from '@/data/dummy.json';
import { Transaction, Wallet } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/sign-in');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onCollapseChange={setSidebarCollapsed} />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Header title="Dashboard" />

        <div className="flex flex-1 overflow-hidden">
          <main className="flex-1 overflow-y-auto p-8 bg-white">
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5E866] flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs opacity-70 mb-1">Total balance</p>
                  <p className="text-2xl font-bold">${dummyData.totalBalance.toLocaleString()}</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Total spending</p>
                  <p className="text-2xl font-bold">$250.80</p>
                </Card>
                <Card className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-1">Total saved</p>
                  <p className="text-2xl font-bold">$550.25</p>
                </Card>
              </div>

              <Card className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold">Working Capital</h2>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span>Expenses</span>
                    </div>
                    <select className="border rounded px-3 py-1 text-sm">
                      <option>Last 7 days</option>
                    </select>
                  </div>
                </div>
                <FinanceChart data={dummyData.chartData} currency={dummyData.currency} />
              </Card>

              <Card className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold">Recent Transaction</h2>
                  <button className="text-sm text-[#5B99EA] hover:underline">View All →</button>
                </div>
                {/* Table Headers */}
                <div className="grid grid-cols-4 gap-4 px-4 pb-2 mb-2 border-b">
                  <div className="col-span-2">
                    <p className="text-xs font-medium text-gray-400 uppercase">Name/Business</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400 uppercase">Type</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-gray-400 uppercase">Amount</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-medium text-gray-400 uppercase">Date</p>
                  </div>
                </div>
                {/* Transactions */}
                <div>
                  {(dummyData.transactions as Transaction[]).slice(0, 3).map((transaction) => (
                    <TransactionItem key={transaction.id} transaction={transaction} />
                  ))}
                </div>
              </Card>
            </div>
          </main>

          <aside className="w-96 bg-white border-l px-8 py-6 overflow-y-auto">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Wallet</h3>
                  <button className="text-2xl text-gray-400 hover:text-gray-600">⋯</button>
                </div>
                <div className="relative">
                  <div className="flex flex-col">
                    <CreditCard wallet={(dummyData.wallets as Wallet[])[1]} variant="back" />
                    <div className="scale-95 -mt-20">
                      <CreditCard wallet={(dummyData.wallets as Wallet[])[0]} variant="front" />
                    </div>
                  </div>
                </div>
              </div>

              <ScheduledTransfers transfers={dummyData.scheduledTransfers as Array<{ id: string; name: string; date: string; amount: number; avatar: string; }>} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

