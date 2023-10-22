import { useState } from 'react';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const initialData = {
    email: '',
    password: '',
  };

  const [loginData, setLoginData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    const { email, password } = loginData;

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const { message, error } = await res.json();
    if (error || !res.ok) {
      toast.error(error);
      return;
    }
    toast.success(message);
  };

  return { loginData, handleChange, handleLogin };
};
