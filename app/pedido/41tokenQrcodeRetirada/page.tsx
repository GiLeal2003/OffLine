
'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';


interface Props {
  nomeEstabelecimento: string;
  pedido: string;
  valor: string;
  data: string;
  token: string;
}

export default function Page({ nomeEstabelecimento, pedido, valor, data, token }: Props) {
  const [searchQuery, setSearchQuery] = useState('');


  
  return (
      <div className={styles.container}>
        
      <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img src="/perfil.png" alt="Perfil" />
          </div>
          <p>Nome do Usuário</p>
        </div>
      </header>

        <h1 className={styles.h1}>TOKEN</h1>
        <div className={styles.details}>
        <p className={styles.text}>Estabelecimento {nomeEstabelecimento}</p>
          <p className={styles.text}>Data: {data}</p>
          <p className={styles.text}>Pedido N: {pedido}</p>
          <p className={styles.text}>Valor da Compra: R$ {valor}</p>
          <p className={styles.text}>{token}</p>
          <p className={styles.status}>Status: <span className={styles.confirmed}>Confirmado</span></p>
        </div>
        <div className={styles.qr_code}>
          <img className={styles.img} src="/qrcode.png" alt="QR Code" />
        </div>
        <p className={styles.info}>Apresente este QR Code na retirada do pedido</p>
        <button className={styles.continue_button}>PROSSEGUIR</button>

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