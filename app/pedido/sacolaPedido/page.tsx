'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface ProdutoItem {
  nome: string;
  qtde: string;
  preco: string;
  subtotal: string;
}

const produtoItems: ProdutoItem[] = [
  { nome: 'Pão de Queijo', qtde: '02', preco: 'R$ 7,50', subtotal: 'R$ 15,00' },
  { nome: 'Café espresso', qtde: '01', preco: 'R$ 5,00', subtotal: 'R$ 5,00' },
  { nome: 'Salada de Fruta', qtde: '01', preco: 'R$ 11,00', subtotal: 'R$ 11,00' },
];

export default function SacolaPedido() {
  return (
    <div className={styles.container}>
  
      <div className={styles.header}>
        <button className={styles.backButton}>VOLTAR</button>
      </div>
      <h1 className={styles.title}>Minha Sacola</h1>
      <div className={styles.total}>
        <span>VALOR TOTAL</span>
        <span className={styles.price}>R$ 31,00</span>
      </div>
      <span className={styles.pending}>Pendente pagamento</span>
      <div className={styles.produtoList}>
        <div className={styles.produtoItemTitle}>
          <span className={styles.item}>Itens</span>
          <span className={styles.item}>Qtde</span>
          <span className={styles.item}>R$ Unid</span>
          <span className={styles.item}>Subtotal</span>
        </div>
        {produtoItems.map((item, index) => (
          <div key={index} className={styles.produtoItem}>
            <span className={styles.produto}>{item.nome}</span>
            <span className={styles.produto}>{item.qtde}</span>
            <span className={styles.produto}>{item.preco}</span>
            <span className={styles.produtoSubtotal}>{item.subtotal}</span>
          </div>
        ))}
      </div>
      <button className={styles.confirmButton}>PAGAR</button>
    </div>
  );
}