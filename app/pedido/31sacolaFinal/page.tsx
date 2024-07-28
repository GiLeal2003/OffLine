'use client';
//Com problemas
import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Props {
  nomeEstabelecimento: string;
  pedido: string;
  valor: string;
  data: string;
  hora: string;
  subtotal: string;
  desconto: string;
  cupom: string;
}


/*export default function Page({ nomeEstabelecimento, pedido, valor, data, hora, subtotal, desconto, cupom }: Props) {
    const [couponEnabled, setCouponEnabled] = useState(false);
  
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.back_button}>VOLTAR</button>
        </div>
        <h1 className={styles.h1}>Minha sacola</h1>
        <div className={styles.details}>
          <p>Nome Estabelecimento {nomeEstabelecimento}</p>
          <p>Pedido N: {pedido}</p>
          <p>DATA: {data}</p>
          <p>Horário: {hora}</p>
        </div>
        <div className={styles.coupon}>
          <p>Adicionar cupom de desconto</p>
          <label className={styles.switch}>
            <input type="checkbox" checked={couponEnabled} onChange={() => setCouponEnabled(!couponEnabled)} />
            <span className={styles.slider}></span>
          </label>
        </div>
        <div className={styles.summary}>
          <h2 className={styles.h2}>Resumo do Pedido</h2>
          <ul>
            <li>
              <span className={styles.title}>Subtotal</span>
              <span className={styles.value}>R$ {subtotal}</span>
            </li>
            <li>
              <span className={styles.title}>Desconto</span>
              <span className={styles.value}>R$ {desconto}</span>
            </li>
            <li>
              <span className={styles.title}>Cupom</span>
              <span className={styles.value}>R$ {cupom}</span>
            </li>
            <li>
              <span className={styles.title}>Total</span>
              <span className={styles.value}>R$ {valor}</span>
            </li>
          </ul>
        </div>
        
          <button className={styles.pagar_button}>PAGAR</button>
          <button className={styles.cancelar_button}>Cancelar pedido</button>
      
      </div>
    );
  }*/