// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
//Tipo de dados com que vou trabalhar
export type User = {
  cod: number;
  nome: string;
};

export type Cliente = {
  cod: number;
  nome: string;
};

export type Estabelecimento = {
  cod: number;
  nome: string;
};

export type Item = {
  cod: string;
  nome: string;
  preco: number;
  tipo: string;
  descricao: string;
  cod_estabelecimento: number;
};

export type Pedido = {
  cod: number;
  datas: string;
  statusPedido:  'Em andamento' | 'Cancelado' | 'Finalizado';
  tipo_pagamento: string;
  valor_total: number;
  cod_cliente: number;
  cod_estabelecimento: number;

};

export type Item_Pedido = {
  cod_pedido: number;
  cod_item: number;
  cod_estabelecimento: number;
  quantidade_item: number;

};

