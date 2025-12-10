import React from "react";
import styles from "./LandingOrchestrator.module.scss";

// Importamos el video de fondo
import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
// CAMBIO: En vez de BookingCard, importamos la nueva ContactSection
import ContactSection from "../ContactSection/ContactSection";

const LandingOrchestrator = ({ videoSource, phoneNumber }) => {
  return (
    <section className={styles.orchestratorContainer}>
      {/* 1. El Video de fondo (Sigue igual) */}
      <BackgroundVideo videoSource={videoSource} />
      <h1 className={styles.brandTitle}>
        LUCHHO<span className={styles.goldText}>BARBER</span>
      </h1>
      {/* 2. El contenido central (Ahora es la ContactSection) */}
      <div className={styles.centerContent}>
        <ContactSection phoneNumber={phoneNumber} />
      </div>
    </section>
  );
};

export default LandingOrchestrator;
