'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Estabelecimento {
  nome: string;
  localizacao: string;
  avaliacao: number;
}

const estabelecimentos: Estabelecimento[] = [
  {
    nome: 'Cafeteria & Confeitaria',
    localizacao: 'Localização',
    avaliacao: 5.0,
  },
  {
    nome: 'Restaurante A',
    localizacao: 'Localização',
    avaliacao: 4.0,
  },
  {
    nome: 'Doceria A',
    localizacao: 'Localização',
    avaliacao: 3.5,
  },
  {
    nome: 'Doceria B',
    localizacao: 'Localização',
    avaliacao: 4.0,
  },
  {
    nome: 'Restaurante B',
    localizacao: 'Localização',
    avaliacao: 5.0,
  },
];

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEstabelecimentos = estabelecimentos.filter((estabelecimento) =>
    estabelecimento.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img src="/perfil.png" alt="Perfil" />
          </div>
          <p>Nome do Usuário</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.shoppingBag}>
            <img src="/sacola.png" alt="Sacola" />
          </div>
        </div>
      </header>

      <div className={styles.barraBusca}>
        <div className={styles.searchIcon}>
          <img src="/lupa.png" alt="Lupa" />
        </div>
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar"
        />
        <div className={styles.settings}>
            <img src="/filtro.png" alt="Filtro" />
          </div>
      </div>
      </div>
      
      <div className={styles.estabelecimentoList}>
        {filteredEstabelecimentos.map((estabelecimento) => (
          <div key={estabelecimento.nome} className={styles.estabelecimentoCard}>
            <div className={styles.headerCard}>
              <div className={styles.rating}>
                <div className={styles.starIcon}>
                  <img src="/estrela.png" alt="Estrela" />
                </div>
                <p>4.8 (30 avaliações)</p>
              </div>
              <div className={styles.heartIcon}></div>
            </div>
            <div className={styles.image}>
              
            </div>
            <div className={styles.title}>
              <h2>{estabelecimento.nome}</h2>
            </div>
            <div className={styles.categories}>
              <button className={styles.buttonCategory}>Combos Clássicos</button>
              <button className={styles.buttonCategory}>Salgados</button>
              <button className={styles.buttonCategory}>Doces</button>
            </div>
            <div className={styles.location}>
              <div className={styles.locationIcon}>
                <img src="/localizacao.png" alt="Localização" />
              </div>
              <p>{estabelecimento.localizacao}</p>
            </div>
          </div>
        ))}
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