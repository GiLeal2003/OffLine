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

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
/*export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};*/
