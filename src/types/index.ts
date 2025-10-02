export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  currency: string;
  description: string;
  company?: string;
  category: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface Wallet {
  id: string;
  name: string;
  balance: number;
  currency: string;
  type: 'cash' | 'bank' | 'credit' | 'crypto';
}

export interface ChartData {
  date: string;
  income: number;
  expense: number;
}

export interface DashboardData {
  user: User;
  totalBalance: number;
  businessCapital: number;
  currency: string;
  transactions: Transaction[];
  wallets: Wallet[];
  chartData: ChartData[];
}

