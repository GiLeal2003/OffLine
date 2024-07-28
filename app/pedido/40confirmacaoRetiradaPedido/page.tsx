'use client';

import React from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Props {
    pedido: string;
    valor: string;
    data: string;
    hora: string;
    token: string;
  }

  
  export default function Page({ pedido, valor, data, hora, token }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.p}>Pedido N: {pedido}</p>
          <p className={styles.text}>Valor da Compra: R$ {valor}</p>

          <p className={styles.p}>DIA/MÊS/ANO: {data}</p>
          <p className={styles.p}>Horário: {hora}</p>
          <p className={styles.p}>Número do token: {token}</p>

          <h1 className={styles.h1}>Retirada do pedido confirmada</h1>

          <button className={styles.buttonC}>CONTINUAR</button>
        </div>

        <div className={styles.footer}>
        <button className={styles.button}>
          <img className={styles.icon1} src="/home.png" alt="Home" />
        </button>
        <button className={styles.button}>
          <img className={styles.icon2} src="/chat.png" alt="Chat" />
        </button>
        <button className={styles.button}>
          <img className={styles.icon3} src="/token.png" alt="Token" />
        </button>
        <button className={styles.button}>
          <img className={styles.icon4} src="/menu_hamburguer.png" alt="menu" />
        </button>
      </div>
      </div>
    );
    
  }
