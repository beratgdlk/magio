"use client";

import { User } from '@/types';
import { createContext, ReactNode, useContext, useState } from 'react';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {    
    setIsLoading(true);
    
    // Simulate API call - in production, validate password here
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock successful authentication
    if (password) {
      const mockUser: User = {
        id: '1',
        email: email,
        name: 'Berat Güdelek',
        avatar: 'https://i.pravatar.cc/150?img=12'
      };
      
      setUser(mockUser);
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user, 
        login, 
        logout, 
        isLoading 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

