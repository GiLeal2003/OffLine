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
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.center}>Pedido Nº: {pedido}</p>
          <p className={styles.center}>Data: {data}</p>
          <p className={styles.center}>Valor da Compra: R$ {valor}</p>
        </div>
        <div className={styles.body}>
          <p className={styles.center}>Nome Estabelecimento {nomeEstabelecimento}</p>
          <p className={styles.title}>NÚMERO DE TOKEN de Retirada do Pedido</p>
          <p className={styles.title}>{token}</p>
          <button className={styles.transparent_button}>
            Acesse seu PERFIL para ver seu TOKEN
          </button>
        </div>
        <div className={styles.footer}>
          <button className={styles.center}>CONCLUIR</button>
        </div>
      </div>
    );
  }



