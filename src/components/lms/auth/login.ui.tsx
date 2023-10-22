'use client';

import { Button } from '@/components/sharedui/button';
import { Input } from '@/components/sharedui/input';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export const LoginUI = () => {
  const initialData = {
    email: '',
    password: '',
  };

  const [loginData, setLoginData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

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
        <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <Button className="w-full">Sign in</Button>
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
