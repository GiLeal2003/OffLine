import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Props {
  pedido: string;
  valor: string;
  data: string;
}


export default function Page({ pedido, valor, data }: Props) {
  return (
    <div className={styles.container}>
      <p>Pedido Nº: {pedido}</p>
      <p>Data: {data}</p>
      <p className={styles.space}>Valor da Compra: R$ {valor}</p>
      <div className={styles.body}>
      <h2 className={styles.title}>Pagamento aprovado</h2>
      <div className={styles.footer}>
          <button className={styles.center}>CONCLUIR</button>
      </div>
      </div>
    </div>
  );
}