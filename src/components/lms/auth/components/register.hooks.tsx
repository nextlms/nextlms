import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const { firstName, lastName, email, password } = registerData;

    // TODO: Add validation

    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password }),
    });
    const { message, error } = await res.json();

    if (error || !res.ok) {
      setLoading(false);
      toast.error(error);
      return;
    }

    toast.success(message);
    setLoading(false);
  };

  return { loading, registerData, handleChange, handleRegister };
};
