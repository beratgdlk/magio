"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/auth-context';
import { validateEmail, validatePassword } from '@/lib/validators';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

interface SignInFormData {
  email: string;
  password: string;
}

export const SignInForm = () => {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      await login(data.email, data.password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          disabled={isLoading}
          className={errors.email ? 'border-red-500' : ''}
          {...register('email', {
            required: 'Email is required',
            validate: (value) => 
              validateEmail(value) || 'Invalid email format',
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          disabled={isLoading}
          className={errors.password ? 'border-red-500' : ''}
          {...register('password', {
            required: 'Password is required',
            validate: (value) =>
              validatePassword(value) || 'Password must be at least 6 characters',
          })}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-[#C5E866] hover:bg-[#b5d656] text-[#1B212D]"
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            Signing in...
          </span>
        ) : (
          'Sign In'
        )}
      </Button>
    </form>
  );
};

