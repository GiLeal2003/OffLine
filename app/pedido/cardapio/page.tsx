
'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface Produto {
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  quantidade: number;
}

const produtos: Produto[] = [
  {
    nome: 'Pão Francês na Chapa',
    descricao: 'Descrição',
    preco: 6.4,
    categoria: 'Recomendados',
    quantidade: 1,
  },
  {
    nome: 'Pão de Queijo 200g',
    descricao: 'Descrição',
    preco: 16,
    categoria: 'Recomendados',
    quantidade: 0,
  },
  {
    nome: 'Tapioca de Coco c/ Leite Condensado',
    descricao: 'Descrição',
    preco: 22.7,
    categoria: 'Recomendados',
    quantidade: 1,
  },
  {
    nome: 'Beirute Simples',
    descricao: 'Descrição',
    preco: 6,
    categoria: 'Combos',
    quantidade: 1,
  },
  {
    nome: 'Coxinha',
    descricao: 'Descrição',
    preco: 10.5,
    categoria: 'Combos',
    quantidade: 0,
  },
  {
    nome: 'Pudim',
    descricao: 'Descrição',
    preco: 12.2,
    categoria: 'Recomendados',
    quantidade: 1,
  },
  {
    nome: 'Torta de Limão',
    descricao: 'Descrição',
    preco: 13.4,
    categoria: 'Recomendados',
    quantidade: 1,
  },
  {
    nome: 'Pão doce',
    descricao: 'Descrição',
    preco: 10.00,
    categoria: 'Recomendados',
    quantidade: 0,
  },
  {
    nome: 'Coca-Cola',
    descricao: 'Descrição',
    preco: 0,
    categoria: 'Bebidas',
    quantidade: 0,
  },
  {
    nome: 'Café espresso',
    descricao: 'Descrição',
    preco: 5.00,
    categoria: 'Bebidas',
    quantidade: 0,
  },
  {
    nome: 'Chocolate Quente',
    descricao: 'Descrição',
    preco: 7.00,
    categoria: 'Bebidas',
    quantidade: 0,
  },
];

interface ProdutoProps {
  produto: Produto;
  onAdd: () => void;
  onQuantidadeChange: (delta: number) => void;
}

const ProdutoCard: React.FC<ProdutoProps> = ({
  produto,
  onAdd,
  onQuantidadeChange,
}) => {
  const [quantidade, setQuantidade] = useState(produto.quantidade);

  

  const handleQuantidadeChange = (delta: number) => {
    if (quantidade + delta >= 0) {
      setQuantidade(quantidade + delta);
      onQuantidadeChange(delta);
    }
  };

  return (
    <div className={styles.produto_card}>
      <img
        src="https://via.placeholder.com/50"
        alt="Produto"
        className={styles.produto_image}
      />
      <div className={styles.produto_info}>
        <h3 className={styles.produto_nome}>{produto.nome}</h3>
        <p className={styles.produto_descricao}>{produto.descricao}</p>
        <div className={styles.product_preco}>R$ {produto.preco.toFixed(2)}</div>
        <div className={styles.produto_quantidade}>
          <button
            className={styles.quantidade_button}
            onClick={() => handleQuantidadeChange(-1)}
          >
            -
          </button>
          <span className={styles.quantidade_value}>{quantidade}</span>
          <button
            className={styles.quantidade_button}
            onClick={() => handleQuantidadeChange(1)}
          >
            +
          </button>
        </div>
        
          <button className={styles.add_button} onClick={onAdd}>
            ADICIONAR
          </button>
      </div>
    </div>
  );
};

export default function Page() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string | null>(null);
  const [quantidades, setQuantidades] = useState({});

  const handleAdicionar = (produto: Produto) => {
    const novoCarrinho = [...carrinho, produto];
    setCarrinho(novoCarrinho);
  };

  const handleRemover = (produto: Produto) => {
    const novoCarrinho = carrinho.filter((item) => item !== produto);
    setCarrinho(novoCarrinho);
  };

  const handleQuantidadeChange = (produto: Produto, delta: number) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item === produto) {
        return { ...item, quantidade: item.quantidade + delta };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  const handleCategoriaChange = (categoria: string) => {
    setCategoriaSelecionada(categoria);
  };

  const filteredProdutos = categoriaSelecionada
    ? produtos.filter((produto) => produto.categoria === categoriaSelecionada)
    : produtos;

  const [searchQuery, setSearchQuery] = useState('');
  const filteredEstabelecimentos = filteredProdutos.filter((produto) =>
    produto.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <header className={styles.header}>
          <div className={styles.profile}>
            <button className={styles.backButton}>VOLTAR</button>
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
      

      <h1 className={styles.title}>Cafeteria</h1>
      <div className={styles.menu}>
        <button
          className={styles.menuButton}
          onClick={() => handleCategoriaChange('Recomendados')}
        >
          Recomendados
        </button>
        <button
          className={styles.menuButton}
          onClick={() => handleCategoriaChange('Combos')}
        >
          Combos
        </button>
        <button
          className={styles.menuButton}
          onClick={() => handleCategoriaChange('Bebidas')}
        >
          Bebidas
        </button>
      </div>
      </div>

      <div className={styles.produto_lista}>
        {filteredEstabelecimentos.map((produto) => (
          <ProdutoCard
            key={produto.nome}
            produto={produto}
            onAdd={() => handleAdicionar(produto)}
            onQuantidadeChange={(delta) => handleQuantidadeChange(produto, delta)}
          />
        ))}
      </div>
      <div className={styles.boxBtn}>
        <button className={styles.confirmar_button}>Confirmar Pedido</button>
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