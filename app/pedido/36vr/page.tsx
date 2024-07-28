'use client';

import React from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function VrPage() {
    return (
      <div className={styles.container}>
        <button className={styles.back_button}>VOLTAR</button>
        <div className={styles.content}>
          <p>Pedido N: XXXXXX</p>
          <p>Valor da Compra: R$ XX,XX</p>
          <div className={styles.card_icon}>
            <img className={styles.img} src="/vr.jpeg" alt="VR" />
          </div>
          <h2 className={styles.title}>VR - VALE REFEIÇÃO</h2>
          <p className={styles.question}>Confirma a forma de pagamento?</p>
          <button className={styles.confirm_button}>CONCLUIR</button>
        </div>
      </div>
    );
  }

  