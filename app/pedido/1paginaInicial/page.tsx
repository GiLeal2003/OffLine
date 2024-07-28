import React from 'react';
import { Button } from '@mui/material';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.img} src="/logo_offline.jpg" alt="Logo" />
        <h1 className={styles.title}>Seja Bem Vindo!</h1>
        <Button variant="contained" color="primary" className={styles.button}>
          ACESSAR
        </Button>
      </div>
    </div>
  );
}