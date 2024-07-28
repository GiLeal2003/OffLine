
'use client';

import React from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Props {
    nomeEstabelecimento: string;
    pedido: string;
    valor: string;
    data: string;
    hora: string;
    token: string;
  }
  
  export default function Page({ nomeEstabelecimento, pedido, valor, data, hora, token }: Props) {
      return (
        <div className={styles.container}>
          <div className={styles.header}>
            <p>Nome do Estabelecimento{nomeEstabelecimento}</p>
            <p>Pedido Nº: {pedido}</p>
            <p>Valor da Compra: R$ {valor}</p>
            <p>DIA/MÊS/ANO{data}</p>
            <p>Horário: {hora}</p>
          </div>
          <div className={styles.content}>
            <p>Número do token: {token}</p>
            <p className={styles.you}>Você confirma o novo horário para retirada do pedido?</p>
          </div>
          <div className={styles.button_container}>
            <button className={styles.confirm_button}>CONFIRMO</button>
            <button className={styles.cancel_button}>Não confirmo</button>
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