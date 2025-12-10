import React from "react";
import styles from "./Button.module.scss";

// Este botón es genérico.
// Recibe 'children' (el texto), un 'icon' opcional, y la función 'onClick'.
const Button = ({ children, icon, onClick, type = "button" }) => {
  return (
    <button type={type} className={styles.uiButton} onClick={onClick}>
      {/* Si existe el icono, lo renderizamos dentro de un span */}
      {icon && <span className={styles.iconWrapper}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
