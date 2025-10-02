"use client";

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/auth-context';
import { Bell, ChevronDown, HelpCircle, LogOut, Menu, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export const Header = ({ title, onMenuClick }: HeaderProps) => {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/sign-in');
    setUserMenuOpen(false);
  };

  return (
    <header className="bg-white border-b px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
        </div>

        <div className="flex items-center gap-2 md:gap-4 ml-auto">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => console.log('Search clicked')}
            className="cursor-pointer"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => console.log('Notifications clicked')}
            className="cursor-pointer"
          >
            <Bell className="h-5 w-5 text-gray-600" />
          </Button>

          <div className="relative">
            <button 
              className="flex items-center gap-2 md:gap-3 hover:bg-gray-50 rounded-lg px-2 md:px-3 py-2 transition-colors cursor-pointer"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <Avatar>
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                    {user?.name?.charAt(0) || 'U'}
                  </div>
                )}
              </Avatar>
              <span className="font-medium text-sm hidden sm:inline">{user?.name}</span>
              <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform duration-200 ${userMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* User Dropdown Menu */}
            {userMenuOpen && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setUserMenuOpen(false)}
                />
                {/* Menu */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* User Info */}
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{user?.email}</p>
                  </div>
                  
                  {/* Menu Items */}
                  <button 
                    className="w-full px-4 py-2.5 text-left text-sm hover:bg-[#C5E866]/10 transition-colors cursor-pointer flex items-center gap-3"
                    onClick={() => {
                      console.log('Help clicked');
                      setUserMenuOpen(false);
                    }}
                  >
                    <HelpCircle className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">Help & Support</span>
                  </button>
                  
                  <hr className="my-1 border-gray-100" />
                  
                  <button 
                    className="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer flex items-center gap-3"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

