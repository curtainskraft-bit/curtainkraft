'use client';
import { FaPhoneAlt } from 'react-icons/fa';

const CallButton = () => {
  const phoneNumber = '+971586023677';

  const handleClick = () => {
    // Fire Google Ads conversion for Call Button click
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11361089409/wchnCMOb_OsZEIHvsakq',
      });
    }

    // Initiate the call
    const formattedPhoneNumber = `tel:${phoneNumber}`;
    window.location.href = formattedPhoneNumber;
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#c38d90] text-white font-bold py-6 px-6 rounded-full flex items-center space-x-2 sm:py-4 sm:px-4 animate-pulse md:hidden"
      style={{
        position: 'fixed',
        bottom: '60px',
        right: '40px',
        zIndex: '9999', // Ensure the button is on top of other elements
      }}
    >
      <FaPhoneAlt className="text-2xl" />
    </button>
  );
};

export default CallButton;
