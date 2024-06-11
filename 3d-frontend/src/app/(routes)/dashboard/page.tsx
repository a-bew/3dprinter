'use client';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import axios, { AxiosError } from 'axios';
import UserContext from '@/context/UserContext';

type UserResponse = {
  user: string | null;
  error: AxiosError | null;
}

const Dashboard = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter()
  const pathname = usePathname()
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    (async () => {
        const { user, error } = await getUser();
    if (!user) {
      router.push('/signin');
      return;
    } else {
      dispatch({ type: 'ADD_USER', payload: user });
      router.push('/dashboard/overview');
      return;
    }
    })()
  }, [router])
 
  if (!isSuccess) {
    return <p>Loading...</p>
  }

  return null
};

async function getUser(): Promise<UserResponse> {
  try {
    const { data } = await axios.get('/api/auth/me');
    console.log(data); // handle the response from the API
    return {
      user: data,
      error: null
    }
  } catch (e) {
    const error = e as AxiosError;

    return {
      user: null,
      error
    }
  }
}

export default Dashboard;
