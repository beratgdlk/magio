import { SignInForm } from '@/components/auth/sign-in-form';
import { Button } from '@/components/ui/button';
import { GoogleIcon } from '@/components/ui/google-icon';
import { Logo } from '@/components/ui/logo';
import Image from 'next/image';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col p-8 lg:p-12">
        <div className="mb-12">
          <Logo />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-[#1B212D]">
                Welcome Back
              </h1>
              <p className="text-[#6B7280]">
                Please enter your details
              </p>
            </div>

            <SignInForm />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full"
            >
              <GoogleIcon />
              <span className="ml-2">Sign in with Google</span>
            </Button>

            <p className="text-center text-sm text-[#6B7280]">
              Don&apos;t have an account?{' '}
              <Link href="#" className="text-[#1B212D] relative inline-block">
                Contact us
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7C20 1 60 1 79 7" stroke="#C5E866" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative bg-zinc-900">
        <Image
          src="/images/signup.webp"
          alt="Sign In"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

