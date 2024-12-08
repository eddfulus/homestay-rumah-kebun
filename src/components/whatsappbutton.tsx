import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Optional for WhatsApp icon

interface WhatsAppButtonProps {
    phoneNumber: string;
    message: string;
  }

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        textDecoration: 'none',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;