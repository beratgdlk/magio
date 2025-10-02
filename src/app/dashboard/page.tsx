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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Total Balance - Dark */}
                <Card className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21.5" r="21" fill="#4E5257"/>
                        <path d="M29.3335 20.641V22.3577C29.3335 22.816 28.9668 23.191 28.5001 23.2077H26.8668C25.9668 23.2077 25.1418 22.5493 25.0668 21.6493C25.0168 21.1243 25.2168 20.6327 25.5668 20.291C25.8751 19.9743 26.3001 19.791 26.7668 19.791H28.5001C28.9668 19.8077 29.3335 20.1827 29.3335 20.641Z" fill="#C8EE44"/>
                        <path d="M28.0583 24.4583H26.8666C25.2833 24.4583 23.95 23.2667 23.8166 21.75C23.7416 20.8833 24.0583 20.0167 24.6916 19.4C25.225 18.85 25.9666 18.5417 26.7666 18.5417H28.0583C28.3 18.5417 28.5 18.3417 28.475 18.1C28.2916 16.075 26.95 14.6917 24.9583 14.4583C24.7583 14.425 24.55 14.4167 24.3333 14.4167H16.8333C16.6 14.4167 16.375 14.4333 16.1583 14.4667C14.0333 14.7333 12.6666 16.3167 12.6666 18.5833V24.4167C12.6666 26.7167 14.5333 28.5833 16.8333 28.5833H24.3333C26.6666 28.5833 28.275 27.125 28.475 24.9C28.5 24.6583 28.3 24.4583 28.0583 24.4583ZM21.8333 19.625H16.8333C16.4916 19.625 16.2083 19.3417 16.2083 19C16.2083 18.6583 16.4916 18.375 16.8333 18.375H21.8333C22.175 18.375 22.4583 18.6583 22.4583 19C22.4583 19.3417 22.175 19.625 21.8333 19.625Z" fill="#C8EE44"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs opacity-70 mb-1">Total balance</p>
                      <p className="text-2xl font-bold">${dummyData.totalBalance.toLocaleString()}</p>
                    </div>
                  </div>
                </Card>

                {/* Total Spending */}
                <Card className="p-5 bg-white border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21.5" r="21" fill="#EBE8E8"/>
                        <path d="M29.3336 20.641V22.3577C29.3336 22.816 28.9669 23.191 28.5003 23.2077H26.8669C25.9669 23.2077 25.1419 22.5493 25.0669 21.6493C25.0169 21.1243 25.2169 20.6327 25.5669 20.291C25.8753 19.9743 26.3003 19.791 26.7669 19.791H28.5003C28.9669 19.8077 29.3336 20.1827 29.3336 20.641Z" fill="#363A3F"/>
                        <path d="M28.0584 24.4583H26.8667C25.2834 24.4583 23.9501 23.2667 23.8167 21.75C23.7417 20.8833 24.0584 20.0167 24.6917 19.4C25.2251 18.85 25.9667 18.5417 26.7667 18.5417H28.0584C28.3001 18.5417 28.5001 18.3417 28.4751 18.1C28.2917 16.075 26.9501 14.6917 24.9584 14.4583C24.7584 14.425 24.5501 14.4167 24.3334 14.4167H16.8334C16.6001 14.4167 16.3751 14.4333 16.1584 14.4667C14.0334 14.7333 12.6667 16.3167 12.6667 18.5833V24.4167C12.6667 26.7167 14.5334 28.5833 16.8334 28.5833H24.3334C26.6667 28.5833 28.2751 27.125 28.4751 24.9C28.5001 24.6583 28.3001 24.4583 28.0584 24.4583ZM21.8334 19.625H16.8334C16.4917 19.625 16.2084 19.3417 16.2084 19C16.2084 18.6583 16.4917 18.375 16.8334 18.375H21.8334C22.1751 18.375 22.4584 18.6583 22.4584 19C22.4584 19.3417 22.1751 19.625 21.8334 19.625Z" fill="#363A3F"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Total spending</p>
                      <p className="text-2xl font-bold text-gray-900">$250.80</p>
                    </div>
                  </div>
                </Card>

                {/* Total Saved */}
                <Card className="p-5 bg-white border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="21" cy="21.5" r="21" fill="#EBE8E8"/>
                        <path d="M15.1666 24C13.3249 24 11.8333 25.4917 11.8333 27.3333C11.8333 27.9583 12.0083 28.55 12.3166 29.05C12.8916 30.0167 13.9499 30.6667 15.1666 30.6667C16.3833 30.6667 17.4416 30.0167 18.0166 29.05C18.3249 28.55 18.4999 27.9583 18.4999 27.3333C18.4999 25.4917 17.0083 24 15.1666 24ZM16.4083 27.9417H15.7916V28.5917C15.7916 28.9333 15.5083 29.2167 15.1666 29.2167C14.8249 29.2167 14.5416 28.9333 14.5416 28.5917V27.9417H13.9249C13.5833 27.9417 13.2999 27.6583 13.2999 27.3167C13.2999 26.975 13.5833 26.6917 13.9249 26.6917H14.5416V26.1C14.5416 25.7583 14.8249 25.475 15.1666 25.475C15.5083 25.475 15.7916 25.7583 15.7916 26.1V26.6917H16.4083C16.7499 26.6917 17.0333 26.975 17.0333 27.3167C17.0333 27.6583 16.7583 27.9417 16.4083 27.9417ZM28.9166 21.9167H26.8333C25.9166 21.9167 25.1666 22.6667 25.1666 23.5833C25.1666 24.5 25.9166 25.25 26.8333 25.25H28.9166C29.1499 25.25 29.3333 25.0667 29.3333 24.8333V22.3333C29.3333 22.1 29.1499 21.9167 28.9166 21.9167ZM24.7743 16.0001C25.0243 16.2418 24.8159 16.6168 24.4659 16.6168L17.5659 16.6085C17.1659 16.6085 16.9659 16.1251 17.2493 15.8418L18.7076 14.3751C19.9409 13.1501 21.9326 13.1501 23.1659 14.3751L24.7409 15.9668C24.7493 15.9751 24.7659 15.9918 24.7743 16.0001Z" fill="#363A3F"/>
                        <path d="M29.2245 27.05C28.7162 28.7667 27.2495 29.8333 25.2495 29.8333H19.8328C19.5078 29.8333 19.2995 29.475 19.4328 29.175C19.6828 28.5917 19.8412 27.9333 19.8412 27.3333C19.8412 24.8083 17.7828 22.75 15.2578 22.75C14.6245 22.75 14.0078 22.8833 13.4411 23.1333C13.1328 23.2667 12.7578 23.0583 12.7578 22.725V21.5C12.7578 19.2333 14.1245 17.65 16.2495 17.3833C16.4578 17.35 16.6828 17.3333 16.9161 17.3333H25.2495C25.4662 17.3333 25.6745 17.3417 25.8745 17.375C27.5578 17.5667 28.7745 18.5917 29.2245 20.1167C29.3078 20.3917 29.1078 20.6667 28.8245 20.6667H26.9162C25.1078 20.6667 23.6745 22.3167 24.0662 24.1917C24.3412 25.5583 25.6078 26.5 26.9995 26.5H28.8245C29.1162 26.5 29.3078 26.7833 29.2245 27.05Z" fill="#363A3F"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Total saved</p>
                      <p className="text-2xl font-bold text-gray-900">$550.25</p>
                    </div>
                  </div>
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
                {/* Table Headers - Figma Style */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-3 mb-2 border-b border-gray-200">
                  <div className="col-span-5">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Name/Business</p>
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Date</p>
                  </div>
                  <div className="col-span-3 text-center">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Type</p>
                  </div>
                  <div className="col-span-2 text-right">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</p>
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

