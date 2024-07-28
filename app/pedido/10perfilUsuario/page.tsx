
'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface PageProps {
    onLogout: () => void;
  }
  
  export default function Page() {
    const handleLogout = () => {
      console.log('Logout clicked!');
    };
  
    return (
      <div className={styles.container}>
        <button className={styles.back_button}>VOLTAR</button>
        <div className={styles.user_menu}>
          <div className={styles.user_info}>
            <img className={styles.img} src="/perfil.png" alt="Logo" />
          </div>
          <span className={styles.user_name}>NOME DO USUÁRIO</span>
          <ul className={styles.user_menu_list}>
            <li>
              <a href="#">Dados Pessoais</a>
            </li>
            <li>
              <a href="#">Histórico de Compras</a>
            </li>
            <li>
              <a href="#">Favoritos</a>
            </li>
            <li>
              <a href="#">Acessibilidade</a>
            </li>
            <li>
              <a href="#">Tokens</a>
            </li>
            <li>
              <a href="#">Cancelar Pedido</a>
            </li>
            <li>
              <a href="#">Fale Conosco / Ajuda</a>
            </li>
            <li>
              <a href="#">Configurações</a>
            </li>
            <li>
              <button className={styles.logout_button} onClick={handleLogout}>
                SAIR
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }