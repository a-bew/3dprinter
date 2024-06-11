'use client';
// EmailSignup.tsx
import React, { useState } from 'react';
import styles from './EmailSignup.module.scss';

interface EmailSignupProps {
  initialEmail?: string;
}

const EmailSignup: React.FC<EmailSignupProps> = ({ initialEmail = '' }) => {
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create Your Account</h1>
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
            minLength={8}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirmPassword" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input}
            minLength={8}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;