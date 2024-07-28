'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

export default function Page() {
    return (
      <div className={styles.container}>
        <div className={styles.message}>
          <h1 className={styles.h1}>ALTERAÇÕES REALIZADAS COM SUCESSO</h1>
        </div>
        <div className={styles.check_mark}>
            <img className={styles.img} src="/check7.png" alt="check" />
        </div>
        <button className={styles.button}>RETORNAR À PÁGINA INICIAL</button>
      </div>
    );
  }