
'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import '@fontsource/inter';

type Props = {};

const labels: { [index: string]: string } = {
  0.5: '0.5',
  1: '1.0',
  1.5: '1.5',
  2: '2.0',
  2.5: '2.5',
  3: '3.0',
  3.5: '3.5',
  4: '4.0',
  4.5: '4.5',
  5: '5.0',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


//const Avaliacao: React.FC<Props> = () => 
export default function Page(){

  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

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
      </header>
      </div>
      
      <div className={styles.imageContainer}>
      <img className={styles.img} src="/logo_offline.jpg" alt="Logo" />
      </div>
      <h1 className={styles.titulo}>Obrigado!</h1>
      <h1 className={styles.titulo}>Boa Refeição</h1>
      <div className={styles.total}>
        <span>Por gentileza, avalie sua experiência</span>
      </div>

      <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height:'70px', 
        marginBottom:'0px'
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>



      <input
        type="text"
        className={styles.inputText}
        placeholder="Digite sua avaliação aqui"
      />
      <button className={styles.confirmaButton}>ENVIAR</button>
      <button className={styles.confirmaButton2}>PULAR</button>

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
};

