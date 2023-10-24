'use client';

import { Button } from '@/components/sharedui/button';
import { Input } from '@/components/sharedui/input';
import Link from 'next/link';
import Image from 'next/image';
import { useRegister } from '../hooks/useRegister';

export const RegisterUI = () => {
  const { loading, registerData, handleChange, handleRegister } = useRegister();

  return (
    <>
      <Image alt="Nextlms" src="/logo.svg" width={36} height={36} />
      <div className="space-y-2">
        <h3>Register</h3>
        <p className="w-[280px]">
          <span className="font-bold tracking-tight mr-1">Nextlms</span>
          help you to build engaging and fun learning management system.
        </p>
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <Input
            value={registerData.firstName}
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleChange}
          />
          <Input
            value={registerData.lastName}
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleChange}
          />
        </div>
        <Input value={registerData.email} type="email" name="email" placeholder="Email" onChange={handleChange} />
        <Input
          value={registerData.password}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <Button disabled={loading} className="w-full" onClick={handleRegister}>
          Sign up
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex space-x-1">
          <p>Do you have an account?</p>
          <Link href="login" className="link">
            Login
          </Link>
        </div>
        <div>
          <Link href="" className="link">
            Forgot password
          </Link>
        </div>
      </div>
    </>
  );
};
