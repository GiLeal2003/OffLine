
'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import '@fontsource/inter';

interface DiaListItem {
  label: string;
  date: string;
}


interface DiaListProps {
  items: DiaListItem[];
  onItemClick: (day: DiaListItem) => void;
}

const DiaList: React.FC<DiaListProps> = ({ items, onItemClick }) => {
  return (
    <ul className={styles.diaList}>
      {items.map((item, index) => (
        <li key={index} className={styles.diaListItem} onClick={() => onItemClick(item)}>
          <span>{item.label === 'Hoje' ? <strong>{item.label}</strong> : item.label}</span>
          <span>{item.date}</span>
        </li>
      ))}
    </ul>
  );
};

export default function Horario() {
  const [diaListItems, setDiaListItems] = useState<DiaListItem[]>([]);
  const [horaListItems, setHoraListItems] = useState<{ label: string, label2: string, selected: boolean }[]>([]);
  //const [selectedHour, setSelectedHour] = useState(null);
  const [selectedHour, setSelectedHour] = useState<{ label: string, label2: string, selected: boolean } | null>(null);
  

  useEffect(() => {
    const today = new Date();
    const diaListItemsTemp: DiaListItem[] = [];
    for (let i = 0; i < 5; i++) {
      const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
      let label = getDayOfWeek(date.getDay());
      if (i === 0) {
        label = 'Hoje';
      }
      const month = date.toLocaleDateString('pt-BR', { month: 'short' });
      const day = date.toLocaleDateString('pt-BR', { day: 'numeric' });
      diaListItemsTemp.push({
        label,
        date: `${day} ${month}`,
      });
    }
    setDiaListItems(diaListItemsTemp);

    const selectedDay = diaListItemsTemp[0]; 
    const horaListItemsTemp: { label: string, label2: string, selected: boolean }[] = [];
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    for (let i = 0; i < 96; i++) {
      const hora = new Date(now.getTime() + i * 15 * 60 * 1000);
      const hora2 = new Date(hora.getTime() + 15 * 60 * 1000);
      if (hora.getHours() >= 6 && hora.getHours() <= 22) {
        const horaDay = hora.toLocaleDateString('pt-BR', { day: 'numeric' });
        const horaMonth = hora.toLocaleDateString('pt-BR', { month: 'short' });
        const currentDay = now.toLocaleDateString('pt-BR', { day: 'numeric' });
        const currentMonth = now.toLocaleDateString('pt-BR', { month: 'short' });
        if (horaDay === currentDay && horaMonth === currentMonth) {
          horaListItemsTemp.push({
            label: hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            label2: hora2.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            selected: false,
          });
        }
      }
    }
    setHoraListItems(horaListItemsTemp);
  }, []);

  const handleHourClick = (hour: { label: string, label2: string, selected: boolean }) => {
    setSelectedHour(hour);
    setHoraListItems(
      horaListItems.map((item) => ({
        ...item,
        selected: item.label === hour.label,
      }))
    );
  };

  const handleDayChange = (day: DiaListItem) => {
    const horaListItemsTemp: { label: string, label2: string, selected: boolean }[] = [];
    const selectedDate = new Date(day.date);
    const now = new Date(selectedDate.getTime());
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    for (let i = 0; i < 96; i++) {
      const hora = new Date(now.getTime() + i * 15 * 60 * 1000);
      const hora2 = new Date(hora.getTime() + 15 * 60 * 1000);
      if (hora.getHours() >= 6 && hora.getHours() <= 22) {
        horaListItemsTemp.push({
          label: hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          label2: hora2.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
          selected: false,
        });
      }
    }
    setHoraListItems(horaListItemsTemp);
  };

  
  const getDayOfWeek = (day:number) => {
    if (day < 0 || day > 6) {
      throw new Error('Invalid day of the week');
    }
    switch (day) {
      case 0:
        return 'Dom';
      case 1:
        return 'Seg';
      case 2:
        return 'Ter';
      case 3:
        return 'Qua';
      case 4:
        return 'Qui';
      case 5:
        return 'Sex';
      case 6:
        return 'Sáb';
      default:
        return '';
    }
  };

  const today = new Date();
  const currentDay = today.toLocaleDateString('pt-BR', { day: 'numeric' });
  const currentMonth = today.toLocaleDateString('pt-BR', { month: 'short' });

  
  

  return (
    <div className={styles.container}>
      <div>
        <button className={styles.backButton}>VOLTAR</button>
        <h1 className={styles.title}>Reagendar Horário de Retirada do Pedido</h1>
      </div>
      <div className={styles.menu}>
        <button className={styles.today}>{`HOJE, ${currentDay} ${currentMonth}`}</button>
      </div>
      <ul className={styles.horaSlots}>
        <h3 className={styles.title3}>Escolha uma opção</h3>
      {horaListItems.map((item, index) => (
        <li key={index}>
          <button
          style={{
            backgroundColor: item.selected ? 'red' : 'transparent',
            color: item.selected ? 'white' : 'black',
          }}
          onClick={() => handleHourClick(item)}
          
          >{item.label} - {item.label2}</button>
        </li>
      ))}
    </ul>
      <button className={styles.confirmarBtn}>CONFIRMAR</button>

      
    </div>
  );
}