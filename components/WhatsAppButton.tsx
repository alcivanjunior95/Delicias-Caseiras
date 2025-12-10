import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95 animate-bounce-subtle"
      aria-label="Fazer pedido pelo WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span>Faça seu pedido</span>
    </button>
  );
};

export default WhatsAppButton;