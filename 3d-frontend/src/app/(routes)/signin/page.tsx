'use client'
// SignIn.tsx
import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle sign-in logic here
    const payload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
  }
    try {
      const { data } = await axios.post('/api/auth/login', payload);
      alert(JSON.stringify(data));
      router.push('/dashboard');
  } catch (error: any) {
      console.error(error);
      alert(JSON.stringify(error.message));
  }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign In</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Sign In
        </button>
      </form>
      <p className={styles.forgotPassword}>Forgot Password?</p>
    </div>
  );
};

export default SignIn;