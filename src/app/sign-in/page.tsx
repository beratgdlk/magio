import { SignInForm } from '@/components/auth/sign-in-form';
import Image from 'next/image';

export default function SignInPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome Back
            </h1>
            <p className="text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <SignInForm />

          <p className="text-center text-sm text-muted-foreground">
            Demo credentials: demo@maglo.com / password
          </p>
        </div>
      </div>

      <div className="hidden lg:block relative bg-zinc-900">
        <Image
          src="/images/image-signup.png"
          alt="Sign In"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

