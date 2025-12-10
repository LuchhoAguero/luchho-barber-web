import React from "react";
import styles from "./InfoItem.module.scss";

// Recibe el icono, el título (ej: HORARIOS) y un array de líneas de texto
const InfoItem = ({ icon, title, lines }) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.iconCircle}>{icon}</div>
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        {/* Mapeamos las líneas de texto (útil para los horarios que son 2 líneas) */}
        {lines.map((line, index) => (
          <p key={index} className={styles.textLine}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoItem;
