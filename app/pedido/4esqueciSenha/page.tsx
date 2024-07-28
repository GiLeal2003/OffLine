'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';


interface Props {
  onSubmit: (email: string) => void;
}

const EsqueciSenha: React.FC<Props> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(email);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.back_button} onClick={() => window.history.back()}>VOLTAR</button>
      </div>
      <div className={styles.content}>
        <h1 className={styles.h1}>ESQUECI MINHA SENHA</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_group}>
            <label className={styles.label} htmlFor="email">EMAIL:</label>
            <input
              type="email"
              id="email"
              value={email}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
        </form>
      </div>
      <button type="submit" className={styles.send_button}>ENVIAR</button>
    </div>
  );
};

export default EsqueciSenha;


/*
import React, { useState } from 'react';
import './styles.css';

export default function Page() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Call API or send email to reset password
    console.log('Send email to reset password:', email);
  };

  return (
    <div className="container">
      <div className="header">
        <button className="button" onClick={() => window.history.back()}>VOLTAR</button>
      </div>
      <div className="content">
        <h1>ESQUECI MINHA SENHA</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="button">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}


*/