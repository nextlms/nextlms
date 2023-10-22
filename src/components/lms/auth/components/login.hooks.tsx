import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    const { email, password } = loginData;

    // TODO: Add validation

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const { message, error } = await res.json();
    if (error || !res.ok) {
      setLoading(false);
      toast.error(error);
      return;
    }

    setLoading(false);
    toast.success(message);
    router.push('/dashboard');
  };

  return { loading, loginData, handleChange, handleLogin };
};
