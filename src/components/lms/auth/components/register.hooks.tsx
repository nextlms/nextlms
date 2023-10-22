import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const useRegister = () => {
  const initialData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [registerData, setRegisterData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleRegister = async () => {
    const { firstName, lastName, email, password } = registerData;

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const { message, error } = await res.json();
    if (error || !res.ok) {
      toast.error(error);
      return;
    }

    toast.success(message);
  };

  return { registerData, handleChange, handleRegister };
};
