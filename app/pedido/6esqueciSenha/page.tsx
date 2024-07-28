'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function Page() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log('New password:', password);
      console.log('Confirm password:', confirmPassword);
    };
  
    return (
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor="password">NOVA SENHA</label>
            <input
            className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor="confirmPassword">CONFIRME SUA NOVA SENHA</label>
            <input
            className={styles.input}
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
        </form>
        <button type="submit" className={styles.button}>
            SALVAR
          </button>
      </div>
    );
  }