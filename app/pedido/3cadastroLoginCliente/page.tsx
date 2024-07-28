'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface FormValues {
  nomeCompleto: string;
  cpf: string;
  email: string;
  usuario: string;
  senha: string;
  confirmarSenha: string;
}

const CadastroCliente = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    nomeCompleto: '',
    cpf: '',
    email: '',
    usuario: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // enviar do formulário
    console.log(formValues);
  };

  return (
    <div className={styles.container}>
      <button className={styles.back_button}>VOLTAR</button>
      <h1 className={styles.h1}>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input
            type="text"
            id="nomeCompleto"
            name="nomeCompleto"
            value={formValues.nomeCompleto}
            onChange={handleChange}
            className={styles.form_control}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            value={formValues.cpf}
            onChange={handleChange}
            className={styles.form_control}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            className={styles.form_control}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="usuario">Usuário:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={formValues.usuario}
            onChange={handleChange}
            className={styles.form_control}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formValues.senha}
            onChange={handleChange}
            className={styles.form_control}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            value={formValues.confirmarSenha}
            onChange={handleChange}
            className={styles.form_control}
          />
        </div>
        
      </form>
      <button type="submit" className={styles.confirm_button}>
          SALVAR
        </button>
    </div>
  );
};

export default CadastroCliente;