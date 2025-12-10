import React from "react";
import styles from "./ContactSection.module.scss";
// Importamos el botón reutilizable
import Button from "../UI/Button/Button";
// Importamos el sub-componente InfoItem
import InfoItem from "./InfoItem/InfoItem";

// Importamos iconos de react-icons
import {
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const ContactSection = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    // ... misma lógica que tenías antes ...
    const mensaje = "Hola! Quiero reservar un turno.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(url, "_blank");
  };

  return (
    // Este es el contenedor negro con bordes redondeados
    <section className={styles.contactContainer}>
      {/* Header: Títulos */}
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          RESERVA TU <span className={styles.highlight}>TURNO AHORA</span>
        </h2>
        <p className={styles.subtitle}>
          Contactanos y asegura tu lugar con los mejores
        </p>
      </div>

      {/* Botón Central */}
      <div className={styles.ctaWrapper}>
        <Button onClick={handleWhatsAppClick} icon={<FaWhatsapp />}>
          WHATSAPP
        </Button>
      </div>

      {/* Grilla de Información */}
      <div className={styles.infoGrid}>
        <InfoItem
          icon={<FaClock />}
          title="HORARIOS"
          lines={["Lun-jueves: Consultar", "vier-sab: 9:00 - 21:00"]}
        />
        <InfoItem
          icon={<FaMapMarkerAlt />}
          title="UBICACIÓN"
          lines={[
            "Calle irrazabal s/n, Alto Verde, San Martin,Mendoza, Argentina",
          ]}
        />
        <InfoItem
          icon={<FaPhoneAlt />}
          title="TELÉFONO"
          lines={[`+${phoneNumber}`]}
        />
        <InfoItem
          icon={<FaEnvelope />}
          title="EMAIL"
          lines={["agueroluciano1970@gmail.com"]}
        />
      </div>
    </section>
  );
};

export default ContactSection;
