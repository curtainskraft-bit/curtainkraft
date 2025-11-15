'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [whatsappNumber] = useState('+971586023677');

  const handleClick = () => {
    // Fire Google Ads conversion for WhatsApp click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11361089409/3MTICMCb_OsZEIHvsakq',
      });
    }

    // Format the WhatsApp URL with your number
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-6 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse"
      style={{
        position: 'fixed',
        bottom: '60px',
        left: '20px',
        zIndex: '9999',
      }}
    >
      <FaWhatsapp className="text-xl" />
    </button>
  );
};

export default WhatsAppButton;
