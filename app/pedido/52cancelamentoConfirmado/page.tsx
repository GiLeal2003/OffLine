
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
  }

  
  export default function Page({ nomeEstabelecimento, pedido, valor, data, hora }: Props) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
            <p className={styles.p}>Estabelecimento{nomeEstabelecimento}</p>
          <p className={styles.p}>Pedido Nº: {pedido}</p>
          <p className={styles.text}>Valor da Compra: R$ {valor}</p>

          <p className={styles.p}>DIA/MÊS/ANO: {data}</p>
          <p className={styles.p}>Horário: {hora}</p>

          <h1 className={styles.h1}>Cancelamento realizado com sucesso!</h1>

          <button className={styles.buttonC}>VOLTAR MENU PRINCIPAL</button>
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
