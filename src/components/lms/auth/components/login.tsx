'use client';

import { Button } from '@/components/sharedui/button';
import { Input } from '@/components/sharedui/input';
import Link from 'next/link';
import Image from 'next/image';
import { useLogin } from '../hooks/useLogin';

export const LoginUI = () => {
  const { loading, loginData, handleChange, handleLogin } = useLogin();

  return (
    <>
      <Image alt="Nextlms" src="/logo.svg" width={36} height={36} />
      <div className="space-y-2">
        <h3>Login</h3>
        <p className="w-[280px]">
          <span className="font-bold tracking-tight mr-1">Nextlms</span>
          help you to build engaging and fun learning management system.
        </p>
      </div>
      <div className="space-y-2">
        <Input value={loginData.email} type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input
          value={loginData.password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button disabled={loading} className="w-full" onClick={handleLogin}>
          Sign in
        </Button>
      </div>
      <div className="flex space-x-1">
        <p>Don&apos;t have an account?</p>
        <Link href="/register" className="link">
          Sign up
        </Link>
      </div>
    </>
  );
};
