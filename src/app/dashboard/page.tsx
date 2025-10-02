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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <Sidebar 
        onCollapseChange={setSidebarCollapsed}
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />

      <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <Header 
          title="Dashboard"
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />

        <div className="flex flex-col xl:flex-row flex-1 overflow-auto">
          <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-white">
            <div className="space-y-6">
              {/* Balance Cards - Figma Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Total Balance - Dark */}
                <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                  <div className="w-12 h-12 rounded-2xl bg-[#C5E866] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  </div>
                  <p className="text-sm opacity-70 mb-2">Total balance</p>
                  <p className="text-3xl font-bold">${dummyData.totalBalance.toLocaleString()}</p>
                </Card>

                {/* Total Spending */}
                <Card className="p-6 bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Total spending</p>
                  <p className="text-3xl font-bold text-gray-900">$250.80</p>
                </Card>

                {/* Total Saved */}
                <Card className="p-6 bg-white border border-gray-200">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">Total saved</p>
                  <p className="text-3xl font-bold text-gray-900">$550.25</p>
                </Card>
              </div>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Working Capital</h2>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#C8EE44' }}></div>
                      <span>Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#29A073' }}></div>
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
                {/* Table Headers - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-4 gap-4 px-4 pb-2 mb-2 border-b">
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

          <aside className="w-full xl:w-96 bg-white xl:border-l border-t xl:border-t-0 px-4 md:px-8 py-6">
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Wallet</h3>
                  <button className="text-2xl text-gray-400 hover:text-gray-600">⋯</button>
                </div>
                <div className="relative max-w-sm xl:max-w-none mx-auto xl:mx-0">
                  <div className="flex flex-col">
                    <CreditCard wallet={(dummyData.wallets as Wallet[])[1]} variant="back" />
                    <div className="scale-95 -mt-16 xl:-mt-20">
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

