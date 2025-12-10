// src/pages/LandingPage/LandingPage.jsx
import React from "react";

// Solo importamos el Orchestrator

// Importamos los recursos (assets) específicos de ESTA barbería
import videoBarberia from "../assets/video-fondo.mp4";
import LandingOrchestrator from "../components/Landing/LandingOrchestrator";

const LandingPage = () => {
  // Aquí definimos los datos "de negocio".
  // Si mañana vendes esto a otra barbería, solo cambias estas 3 variables.
  const config = {
    video: videoBarberia,
    nombre: "Luchho Barber",
    telefono: "542634621194",
  };

  return (
    // Llamamos al orchestrator y le pasamos los datos
    <LandingOrchestrator
      videoSource={config.video}
      businessName={config.nombre}
      phoneNumber={config.telefono}
    />
  );
};

export default LandingPage;
