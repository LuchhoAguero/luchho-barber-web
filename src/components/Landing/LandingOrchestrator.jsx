import React from "react";
import styles from "./LandingOrchestrator.module.scss";

import BackgroundVideo from "../BackgroundVideo/BackgroundVideo";
import ContactSection from "../ContactSection/ContactSection";

const LandingOrchestrator = ({
  videoSource,
  phoneNumber,
  businessName = "",
}) => {
  const [nameFirst, ...nameRest] = businessName.split(" ");
  const nameAccent = nameRest.join(" ");
  return (
    <section className={styles.orchestratorContainer}>
      {/* 1. El Video de fondo queda igual */}
      <BackgroundVideo videoSource={videoSource} />

      {/* 2. EL CAMBIO CLAVE: Metemos todo DENTRO de centerContent */}
      <div className={styles.centerContent}>
        {/* AQUI va el Título, ahora es hijo del flexbox */}
        <h1 className={styles.brandTitle}>
          {nameFirst}
          {nameAccent && (
            <span className={styles.goldText}> {nameAccent}</span>
          )}
        </h1>

        {/* Y debajo la sección de contacto */}
        <ContactSection phoneNumber={phoneNumber} />
      </div>
    </section>
  );
};

export default LandingOrchestrator;
