import { ReactNode } from 'react';

interface AvatarProps {
  children: ReactNode;
  className?: string;
}

export const Avatar = ({ children, className = '' }: AvatarProps) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {children}
    </div>
  );
};
