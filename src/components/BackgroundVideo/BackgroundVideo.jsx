// src/components/BackgroundVideo/BackgroundVideo.jsx
import React from 'react';
// Importamos los estilos del módulo. 
// "styles" es un nombre que le damos nosotros, podría ser cualquier cosa.
import styles from './BackgroundVideo.module.scss';

// Recibimos 'videoSource' como prop. Así este componente sirve para CUALQUIER video.
const BackgroundVideo = ({ videoSource }) => {
  return (
    <div className={styles.videoContainer}>
      {/* El overlay es una capa oscura para que el texto de encima se lea bien */}
      <div className={styles.overlay}></div>
      
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
    </div>
  );
};

export default BackgroundVideo;