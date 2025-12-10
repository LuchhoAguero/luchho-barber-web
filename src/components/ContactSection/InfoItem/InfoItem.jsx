import React from "react";
import styles from "./InfoItem.module.scss";
// Importamos un icono de "link externo" pequeñito para mejorar UX
import { FaExternalLinkAlt } from "react-icons/fa";

// Nuevo prop: 'link' (opcional)
const InfoItem = ({ icon, title, lines, link }) => {
  // Definimos el contenido interno para no repetirlo
  const content = (
    <>
      <div className={styles.iconCircle}>{icon}</div>
      <div className={styles.textContent}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{title}</h3>
          {/* Si es un link, mostramos una flechita visual sutil */}
          {link && <FaExternalLinkAlt className={styles.linkIcon} />}
        </div>
        {lines.map((line, index) => (
          <p key={index} className={styles.textLine}>
            {line}
          </p>
        ))}
      </div>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.itemContainer} ${styles.interactive}`}
      >
        {content}
      </a>
    );
  }

  return <div className={styles.itemContainer}>{content}</div>;
};

export default InfoItem;
