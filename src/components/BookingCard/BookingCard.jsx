// src/components/BookingCard/BookingCard.jsx
import React from 'react';
import styles from './BookingCard.module.scss';

// Recibimos titulo y telefono para que sea reutilizable en otras barberías
const BookingCard = ({ title, phone }) => {
  
  const handleTurnoClick = () => {
    // Lógica para enviar a WhatsApp
    const mensaje = "Hola! Quiero reservar un turno en la barbería.";
    // encodeURIComponent convierte espacios y acentos en formato URL seguro
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;
    
    // Abrir en nueva pestaña
    window.open(url, '_blank');
  };

  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>Reserva tu estilo con nosotros</p>
      
      <button className={styles.button} onClick={handleTurnoClick}>
        SACAR TURNO
      </button>
    </div>
  );
};

export default BookingCard;