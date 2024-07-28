'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';
//import nodemailer from 'nodemailer';


export default function Page() {
  const [code, setCode] = useState('');
  const [error, setError] = useState(String);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/enviar-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code })
      });
    
      if (response.ok) {
        setError(String); 
        console.log('Email enviado com sucesso');
      } else {
        setError(() => 'Erro ao enviar email');
      }
    } catch (error) {
      console.error(error);
      setError(() => 'Erro ao enviar email');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Inserir o código</h1>
      <input className={styles.input} type="text" value={code} onChange={handleCodeChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className={styles.button} onClick={handleSubmit}>Enviar</button>

      <p className={styles.p}>Não recebeu o email de validação?</p>
      <button className={styles.button}>Clique aqui para enviar novamente</button>
    </div>
  );
}



/*interface InputFieldProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField = ({ label, value, onChange }: InputFieldProps) => {
    return (
      <div>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} key={label} />
      </div>
    );
  };
  
  export default function Page() {
    const [code, setCode] = useState('');
   //const [error, setError] = useState(null);
    const [error, setError] = useState<string | null>(null);
  
    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCode(e.target.value);
    };
  
    const handleSubmit = () => {
      try {
        // Gerar sequência numérica
        const sequenceLength = 6;
        const sequence = generateSequence(sequenceLength);
        const nodemailer = require('nodemailer');
  
        const transporter = nodemailer.createTransport({
          host: 'smtp.example.com',
          port: 587,
          secure: false, // ou 'STARTTLS'
          auth: {
            user: 'seu_usuario_de_email',
            pass: 'sua_senha_de_email'
          }
        });
  
        const mailOptions = {
          from: 'seu_usuario_de_email',
          to: 'destinatario@example.com',
          subject: 'Código de verificação',
          text: `Código de verificação: ${sequence}`
        };
  
        transporter.sendMail(mailOptions, (error: NodeJS.ErrnoException, info: any) => {
          if (error) {
            setError(error.message);
          } else {
            console.log('Código enviado com sucesso!');
          }
        });
      } catch (error) {
        console.error(error);
      }
    };
  
    function generateSequence(length: number) {
      const sequence = [];
      for (let i = 0; i < length; i++) {
        sequence.push(Math.floor(Math.random() * 10));
      }
      return sequence.join('');
    }
  
    return (
      <div className={styles.container}>
        <h1>Inserir o código</h1>
        <InputField label="Código" value={code} onChange={handleCodeChange} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button onClick={handleSubmit}>Enviar</button>
  
        <p>Não recebeu o email de validação?</p>
        <button>Clique aqui para enviar novamente</button>
      </div>
    );
  }*/
