//Funções de GET
import bcrypt from 'bcrypt';
 import { db } from '@vercel/postgres';
 import { cliente, estabelecimento, item, pedidos, itens_pedido,} from "app/lib/placeholder-data.js";
 const user = await db.connect();

 async function criarCliente() {
   await user.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await user.sql`
     CREATE TABLE IF NOT EXISTS cliente(
      cod INTEGER,
      nome VARCHAR(50),
      PRIMARY KEY(cod)
    );
  `;

   const insertCliente = await Promise.all(
     cliente.map(async (cliente) => {
       return user.sql`
         INSERT INTO clientes (cod, nome)
         VALUES (${cliente.cod}, ${cliente.nome},)
         ON CONFLICT (cod) DO NOTHING;
       `;
     }),
   );

   return insertCliente;
 }

 async function criarEstabelecimento() {
   await user.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await user.sql`
     CREATE TABLE IF NOT EXISTS estabelecimento(
      cod INTEGER,
      nome VARCHAR(50),
      PRIMARY KEY(cod)
    );
   `;

   const insertEstabelecimento = await Promise.all(
     estabelecimento.map(
       (estabelecimento) => user.sql`
         INSERT INTO estabelecimento (cod, nome)
         VALUES (${estabelecimento.cod}, ${estabelecimento.nome})
         ON CONFLICT (cod) DO NOTHING;
       `,
     ),
   );

   return insertEstabelecimento;
 }

 async function criarItem() {
   await user.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
   await user.sql`
     CREATE TABLE IF NOT EXISTS item(
      cod VARCHAR(50),
      nome VARCHAR(100),
      preco DECIMAL (15,2),
      tipo VARCHAR(50),
      descricao VARCHAR(200),
      cod_estabelecimento INTEGER,
      PRIMARY KEY (cod),
      FOREIGN KEY (cod_estabelecimento) REFERENCES estabelecimento (cod)
    );
   `;

   const insertItem = await Promise.all(
     item.map(
       (item) => user.sql`
         INSERT INTO item (cod, nome, preco, tipo, descricao, cod_estabelecimento)
         VALUES (${item.cod}, ${item.nome}, ${item.preco}, ${item.tipo}, ${item.descricao}, ${item.cod_estabelecimento})
         ON CONFLICT (cod) DO NOTHING;
       `,
     ),
   );

   return insertItem;
 }

 async function criarPedido() {
  await user.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await user.sql`
     CREATE TABLE IF NOT EXISTS pedido(
      cod INTEGER,
      datas date,
      statusPedido VARCHAR(50),
      tipo_pagamento VARCHAR(50),
      valor_total DECIMAL (15, 2),
      cod_cliente INTEGER,
      cod_estabelecimento INTEGER,
      PRIMARY KEY(cod),
      FOREIGN KEY (cod_cliente) REFERENCES cliente (cod),
      FOREIGN KEY (cod_estabelecimento) REFERENCES estabelecimento (cod)
    );
   `;

   const insertPedido = await Promise.all(
     pedidos.map(
       (pedidos) => user.sql`
         INSERT INTO pedidos (cod, datas, statusPedido, tipo_pagamento, valor_total, cod_cliente, cod_estabelecimento)
         VALUES (${pedidos.cod}, ${pedidos.datas}, ${pedidos.statusPedido}, ${pedidos.tipo_pagamento}, ${pedidos.valor_total}, ${pedidos.cod_cliente}, ${pedidos.cod_estabelecimento})
         ON CONFLICT (cod) DO NOTHING;
       `,
     ),
   );

   return insertPedido;
 }

 async function criarItem_Pedido() {
  await user.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await user.sql`
     CREATE TABLE itens_pedido(
      cod_pedido INTEGER,
      cod_item INTEGER,
      cod_estabelecimento INTEGER,
      quantidade_item INTEGER,
      PRIMARY KEY (cod_pedido, cod_item),
      FOREIGN KEY (cod_pedido) REFERENCES pedido (cod),
      FOREIGN KEY (cod_estabelecimento) REFERENCES estabelecimento (cod),
      FOREIGN KEY (cod_item) REFERENCES item (cod)
    );
   `;

   const insertItemPedido = await Promise.all(
     itens_pedido.map(
       (itens_pedido) => user.sql`
         INSERT INTO itens_pedido (cod_pedido, cod_item, cod_estabelecimento, quantidade_item)
         VALUES (${itens_pedido.cod_pedido}, ${itens_pedido.cod_item}, ${itens_pedido.cod_estabelecimento}, ${itens_pedido.quantidade_item})
         ON CONFLICT (cod) DO NOTHING;
       `,
     ),
   );

   return insertItemPedido;
 }

export async function GET() {
  return Response.json({
    message:
      'Dados',
  });
   try {
     await user.sql`BEGIN`;
     await criarCliente();
     await criarEstabelecimento();
     await criarItem();
     await criarPedido();
     await criarItem_Pedido();
     await user.sql`COMMIT`;

     return Response.json({ message: 'Database seeded successfully' });
   } catch (error) {
     await user.sql`ROLLBACK`;
     return Response.json({ error }, { status: 500 });
   }
}
