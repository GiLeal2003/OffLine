'use server';
//Garante que aquilo que foi digitado bate com os tipos de dados
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//CriarPedido
const FormSchema = z.object({
  cod: z.number(),
  datas: z.string(),
  statusPedido:  z.enum(['Em andamento' , 'Cancelado' , 'Finalizado']),
  tipo_pagamento: z.string(),
  valor_total: z.coerce.number(),
  cod_cliente: z.number(),
  cod_estabelecimento: z.number()
});
 
const CreateInvoice = FormSchema.omit({cod: true, datas: true,});
 
export async function criarPedido (formData: FormData) {
     const {statusPedido, tipo_pagamento, valor_total, cod_cliente, cod_estabelecimento } = CreateInvoice.parse({
      statusPedido: formData.get('statusPedido'),
      tipo_pagamento: formData.get('tipo_pagamento'),
      valor_total: formData.get('valor_total'),
      cod_cliente: formData.get('cod_cliente'),
      cod_estabelecimento: formData.get('cod_estabelecimento'),
    });
    const valor = valor_total * 100;
    const data = new Date().toISOString().split('T')[0];
    try {
        await sql`
          INSERT INTO pedido (datas, statusPedido, tipo_pagamento, valor_total, cod_cliente, cod_estabelecimento)
          VALUES (${data}, ${statusPedido}, ${tipo_pagamento},${valor}, ${cod_cliente}, ${cod_estabelecimento})
        `;
      } catch (error) {
        return {
          message: 'Database Error: Falha ao criar pedido.',
        };
      }
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
    //console.log(rawFormData);
}
// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({cod: true, datas: true,});
 
export async function updatePedido(cod: number, formData: FormData) {
  const {statusPedido, tipo_pagamento, valor_total, cod_cliente, cod_estabelecimento} = UpdateInvoice.parse({
      statusPedido: formData.get('statusPedido'),
      tipo_pagamento: formData.get('tipo_pagamento'),
      valor_total: formData.get('valor_total'),
      cod_cliente: formData.get('cod_cliente'),
      cod_estabelecimento: formData.get('cod_estabelecimento'),
  });
 
  const valor = valor_total * 100;
 
  try {
    await sql`
        UPDATE pedido
        SET statusPedido = ${statusPedido}, tipo_pagamento = ${tipo_pagamento}, valor_total = ${valor}
        WHERE id = ${cod_cliente}
      `;
  } catch (error) {
    return { message: 'Database Error: Falha ao atualizar pedido.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
export async function deletarPedido(cod: string) {
    try {
        await sql`DELETE FROM pedidos WHERE id = ${cod}`;
        revalidatePath('/dashboard/invoices');
        return { message: 'Pedido cancelado.' };
      } catch (error) {
        return { message: 'Database Error: Falha ao apagar pedido.' };
      }
}