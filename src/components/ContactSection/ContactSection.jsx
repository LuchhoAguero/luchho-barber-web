import React, { useState } from "react";
import styles from "./ContactSection.module.scss";
import Button from "../UI/Button/Button";
import InfoItem from "./InfoItem/InfoItem";

// Agregamos FaInstagram
import {
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { cleanPhone } from "../../utils/phone";

const ContactSection = ({ phoneNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const mensaje = "Hola! Quiero reservar un turno.";
    const url = `https://wa.me/${cleanPhone(
      phoneNumber
    )}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // DATOS REALES (¡Cámbialos por los tuyos!)
  const mapLink = "https://maps.app.goo.gl/VwcQcJR4BDS95PQE9";
  const instagramLink = "https://instagram.com/luchhobarber";

  return (
    <section className={styles.contactContainer}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>
          RESERVA TU <span className={styles.highlight}>TURNO AHORA</span>
        </h2>
        <p className={`${styles.subtitle} ${!isOpen ? styles.hiddenMobile : ""}`}>
          Contactanos y asegura tu lugar
        </p>
      </div>

      <div className={styles.ctaWrapper}>
        <Button onClick={handleWhatsAppClick} icon={<FaWhatsapp />}>
          WHATSAPP
        </Button>
      </div>

      <button
        type="button"
        className={styles.toggleBtn}
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls="contact-collapsible"
      >
        <span className={styles.toggleText}>
          {isOpen ? "Ver menos" : "Ver horarios, ubicación y redes"}
        </span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div
        id="contact-collapsible"
        className={`${styles.collapsibleContent} ${
          isOpen ? styles.showContent : ""
        }`}
      >
        <div className={styles.infoGrid}>
          {/* 1. HORARIOS (Sin link, solo info) */}
          <InfoItem
            icon={<FaClock />}
            title="HORARIOS"
            lines={[
              "Lunes - Jueves: Consultar",
              "Viernes - Sabádo: 9:00 - 21:00",
            ]}
          />

          {/* 2. UBICACIÓN (¡Ahora con LINK al mapa!) */}
          <InfoItem
            icon={<FaMapMarkerAlt />}
            title="UBICACIÓN"
            lines={[
              "Calle Irrazabal s/n (200 m de Ruta 50)",
              "Alto Verde, Mendoza",
            ]}
            link={mapLink}
          />

          <InfoItem
            icon={<FaPhoneAlt />}
            title="LLAMAR"
            lines={[phoneNumber]}
            link={`tel:+${cleanPhone(phoneNumber)}`}
          />

          {/* 4. INSTAGRAM (Reemplazamos Email) */}
          <InfoItem
            icon={<FaInstagram />}
            title="INSTAGRAM"
            lines={["@luchhobarber", "Encontrá tu próximo look"]}
            link={instagramLink} // Link a tu perfil
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
