'use client'
import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import { useRouter } from 'next/navigation';

const SignUp: React.FC = () => {
    const router = useRouter()
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to 3d Printer Pro</h1>
      <p className={styles.subtitle}>Enter your email address to get started</p>
      <div className={styles.inputContainer}>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="name@yourcompany.com"
          className={styles.input}
        />
      </div>
      <button className={styles.continueWithEmail} onClick={() => {
        router.push('/email-signup')
      }}>Continue with Email</button>
      <p className={styles.or}>OR</p>
      <button className={styles.continueWithGoogle}>Continue with Google</button>
      <button className={styles.continueWithApple}>Continue with Apple</button>
      <p className={styles.signIn}>Already have an account? <span className={styles.link}>Sign In</span></p>
    </div>
  );
};

export default SignUp;