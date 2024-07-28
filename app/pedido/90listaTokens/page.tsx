
'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface TokenData {
    data: string;
    nomeEstabelecimento: string;
    pedido: number;
    status: 'Confirmado' | 'Finalizado' | 'Cancelado';
    valorCompra: number;
    token: string;
  }
  
  const tokenData: TokenData[] = [
    {
      data: 'dd/mm/ano',
      nomeEstabelecimento: 'Nome Estabelecimento',
      pedido: 12345,
      status: 'Confirmado',
      valorCompra: 100.00,
      token: 'XXXXXXXXXXXX',
    },
    {
      data: 'dd/mm/ano',
      nomeEstabelecimento: 'Nome Estabelecimento',
      pedido: 54321,
      status: 'Finalizado',
      valorCompra: 50.00,
      token: 'XXXXXXXXXXXX',
    },
    {
      data: 'dd/mm/ano',
      nomeEstabelecimento: 'Nome Estabelecimento',
      pedido: 98765,
      status: 'Cancelado',
      valorCompra: 25.00,
      token: 'XXXXXXXXXXXX',
    },
  ];
  
  export default function Page() {
    const [selectedToken, setSelectedToken] = useState<TokenData | null>(null);
  
    const handleTokenClick = (token: TokenData) => {
      setSelectedToken(token);
    };
  
    return (
      <div className={styles.container}>
        <header className={styles.header}>
            <button className={styles.back_button} onClick={() => window.history.back()}>VOLTAR</button>
        </header>
        <main>
        <h1 className={styles.h1}>TOKENS</h1>  
        <h2 className={styles.h2}>Clique para acessar QR Code e apresente no CAIXA do estabelecimento</h2>
          
          <section className={styles.token_list}>
            {tokenData.map((token) => (
              <div
                key={token.pedido}
                className={styles.token_item}
                onClick={() => handleTokenClick(token)}
              >
                <div className={styles.token_info}>
                  <p>Data: {token.data}</p>
                  <p>Nome Estabelecimento: {token.nomeEstabelecimento}</p>
                  <p>Pedido Nº: {token.pedido}</p>
                  <p>Status: {token.status}</p>
                  <p>Valor da Compra: R$ {token.valorCompra.toFixed(2)}</p>
                </div>
                <div className={styles.token_actions}>
                  <h3 className={styles.h3}>Nº Token: {token.token}</h3>
                </div>
              </div>
            ))}
          </section>
          {selectedToken && (
            <section className={styles.selected_token}>
              <h2>Token Selecionado</h2>
              <p>Data: {selectedToken.data}</p>
              <p>Nome Estabelecimento: {selectedToken.nomeEstabelecimento}</p>
              <p>Pedido N: {selectedToken.pedido}</p>
              <p>Status: {selectedToken.status}</p>
              <p>Valor da Compra: R$ {selectedToken.valorCompra.toFixed(2)}</p>
              <p>N° TOKEN: {selectedToken.token}</p>
              <div className={styles.token_actions}>
                  <h3 className={styles.h3}>Nº Token: {selectedToken.token}</h3>
                </div>
            </section>
          )}
        </main>

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

