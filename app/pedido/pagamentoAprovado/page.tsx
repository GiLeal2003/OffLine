
'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';


export default function PagamentoAprovado() {
    return (
      <div className={styles.container}>
        
        <div className={styles.header}>
          <button className={styles.backButton}>VOLTAR</button>
        </div>
        <h1 className={styles.title}>PEDIDO NÚMERO 12598</h1>
        <div className={styles.total}>
          <span>VALOR DA COMPRA</span>
          <span className={styles.price}>R$ 58,50</span>
        </div>
        <h1 className={styles.title2}>Pagamento aprovado</h1>
        <button className={styles.confirmButton}>CONCLUIR</button>
      </div>
    );
  }