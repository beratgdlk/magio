# 💳 MagIo - Modern Financial Management Dashboard

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-19.1.0-61dafb?style=for-the-badge&logo=react)

A modern, responsive financial management dashboard built with Next.js, TypeScript, and Tailwind CSS. Track your finances, manage multiple wallets, and visualize your spending habits with elegant UI components.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Tech Stack](#-tech-stack) • [Project Structure](#-project-structure)

</div>

---

## ✨ Features

### 🎯 Core Features
- **🔐 Authentication System** - Secure login with mock authentication
- **📊 Interactive Dashboard** - Real-time financial overview with charts
- **💰 Multi-Wallet Support** - Manage bank accounts, credit cards, cash, and crypto wallets
- **📈 Financial Analytics** - Income vs. Expense tracking with Recharts visualization
- **💳 Virtual Credit Cards** - Beautiful SVG-based card designs with chip & contactless icons
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **🎨 Modern UI Components** - Built with Radix UI and shadcn/ui principles
- **⚡ Turbopack Enabled** - Lightning-fast development with Next.js Turbopack

### 🎨 UI/UX Highlights
- Glassmorphism effects on credit cards
- Smooth animations and transitions
- Dark mode ready architecture
- Accessible components (ARIA compliant)
- Skeleton loading states
- Toast notifications

---

## 🖼️ Demo

### Dashboard Overview
The main dashboard provides a comprehensive view of your financial status:
- Total balance across all accounts
- Business capital tracking
- Transaction history with categorization
- Income/Expense trends visualization
- Scheduled transfers management

### Key Components
- **Balance Cards** - Display total and business capital
- **Credit Card Visualizations** - Front & back card designs
- **Wallet Cards** - Multi-currency wallet management
- **Finance Charts** - Interactive income/expense graphs
- **Transaction Items** - Detailed transaction list with icons and status

---

## 🚀 Installation

### Prerequisites
- Node.js 20.x or higher
- npm, yarn, pnpm, or bun package manager

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/magio.git
cd magio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
```
Navigate to http://localhost:3000
```

The application will automatically redirect to the sign-in page.

---

## 📦 Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

---

## 🛠️ Tech Stack

### Frontend Framework
- **[Next.js 15.5.4](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Animation utilities
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

### UI Components
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
  - Avatar
  - Slot (Polymorphic components)
- **[Lucide React](https://lucide.dev/)** - Beautiful icon system
- **[Recharts](https://recharts.org/)** - Charting library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **Turbopack** - Fast bundler (experimental)

---

## 📁 Project Structure

```
magio/
├── public/
│   └── images/
│       └── signup.webp          # Sign-in page illustration
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Dashboard page
│   │   ├── sign-in/
│   │   │   └── page.tsx         # Authentication page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page (redirects to sign-in)
│   ├── components/
│   │   ├── auth/
│   │   │   └── sign-in-form.tsx # Login form component
│   │   ├── dashboard/
│   │   │   ├── balance-card.tsx
│   │   │   ├── credit-card.tsx
│   │   │   ├── finance-chart.tsx
│   │   │   ├── header.tsx
│   │   │   ├── scheduled-transfers.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── transaction-item.tsx
│   │   │   └── wallet-card.tsx
│   │   └── ui/
│   │       ├── avatar.tsx       # shadcn/ui Avatar
│   │       ├── button.tsx       # shadcn/ui Button
│   │       ├── card.tsx         # shadcn/ui Card
│   │       ├── input.tsx        # shadcn/ui Input
│   │       ├── google-icon.tsx
│   │       └── logo.tsx
│   ├── contexts/
│   │   └── auth-context.tsx     # Authentication context & provider
│   ├── data/
│   │   └── dummy.json           # Mock data for development
│   ├── lib/
│   │   ├── formatters.ts        # Currency & date formatters
│   │   ├── utils.ts             # Utility functions
│   │   └── validators.ts        # Form validation helpers
│   └── types/
│       └── index.ts             # TypeScript interfaces
├── .vscode/
│   └── settings.json            # VS Code workspace settings
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.js           # Tailwind CSS configuration (auto-generated)
└── tsconfig.json                # TypeScript configuration
```

---

## 🎨 Component Architecture

### Authentication Flow
```typescript
AuthProvider → useAuth() → Protected Routes
```

### Dashboard Components
- **Header** - User profile, notifications, search
- **Sidebar** - Navigation menu with icons
- **Balance Cards** - Financial overview cards
- **Credit Cards** - SVG-based card designs
- **Wallet Cards** - Multi-currency support
- **Finance Chart** - Recharts area chart
- **Transaction List** - Scrollable transaction feed

---

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
```

### Tailwind Configuration
The project uses Tailwind CSS 4 with custom configuration:
- Custom color palette
- Extended spacing utilities
- Custom animation utilities

### TypeScript Configuration
Strict mode enabled with Next.js specific settings:
- Path aliases: `@/*` → `./src/*`
- ES2017 target
- Strict type checking

---

## 🎯 Key Features Explained

### Authentication Context
```typescript
// Global authentication state management
const { user, login, logout, isAuthenticated, isLoading } = useAuth();
```

### Multi-Wallet System
Supports 4 wallet types:
- 💵 **Cash** - Physical currency tracking
- 🏦 **Bank** - Bank account balances
- 💳 **Credit** - Credit card management
- ₿ **Crypto** - Cryptocurrency wallets

### Transaction Management
Track all financial activities:
- Income vs. Expense categorization
- Company/merchant information
- Status tracking (completed, pending, failed)
- Date-based filtering

---

## 📊 Data Models

### User Interface
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}
```

### Transaction Interface
```typescript
interface Transaction {
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
```

### Wallet Interface
```typescript
interface Wallet {
  id: string;
  name: string;
  balance: number;
  currency: string;
  type: 'cash' | 'bank' | 'credit' | 'crypto';
}
```

---

## 🎨 Design System

### Color Palette
- **Primary**: Brand colors for main actions
- **Secondary**: Supporting UI elements
- **Muted**: Background and borders
- **Accent**: Highlights and notifications

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Readable, optimized line height
- **Monospace**: For card numbers and codes

### Spacing
Consistent spacing scale based on Tailwind's default configuration with custom extensions.

---

## 🚀 Performance Optimizations

- ⚡ **Turbopack** for faster development builds
- 🖼️ **Next.js Image Optimization** ready
- 📦 **Code Splitting** with dynamic imports
- 🎯 **Tree Shaking** for smaller bundles
- 💾 **Static Generation** where possible

---

## 🧪 Testing

The project structure supports:
- Unit testing with Jest (setup required)
- Component testing with React Testing Library (setup required)
- E2E testing with Playwright (setup required)

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain component modularity
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Lucide](https://lucide.dev/) - Icon system
- [shadcn/ui](https://ui.shadcn.com/) - Component inspiration
- [Recharts](https://recharts.org/) - Chart library

---

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

<div align="center">

**[⬆ back to top](#-magio---modern-financial-management-dashboard)**

Made with ❤️ using Next.js and TypeScript

</div>
