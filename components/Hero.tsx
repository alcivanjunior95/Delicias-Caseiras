import React from 'react';
import { WHATSAPP_CONFIG } from '../constants';
import { ChefHat, ArrowRight } from 'lucide-react';
import Badge from './Badge';

const Hero: React.FC = () => {
  const handleCtaClick = () => {
    const url = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="relative bg-[#2C1810] text-white overflow-hidden">
      {/* Background Pattern Overlay - Adjusted to warmer tones */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
        
        {/* Badge posicionado à esquerda e com tamanho maior */}
        <div className="absolute top-4 left-4 md:top-12 md:left-20 transform -rotate-12 hover:rotate-0 transition-transform duration-300 z-20">
            <Badge className="w-40 h-40 md:w-56 md:h-56" />
        </div>

        <div className="mb-6 bg-amber-600 p-3 rounded-full bg-opacity-90 animate-fade-in-up">
          <ChefHat className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up delay-100 text-amber-50">
          Sabor de Casa,<br />
          Feito com Amor
        </h1>
        
        <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
          Pães caseiros, esfihas quentinhas e tortas deliciosas. Tudo preparado artesanalmente para levar conforto à sua mesa.
        </p>
        
        <button
          onClick={handleCtaClick}
          className="group bg-orange-600 hover:bg-orange-700 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2 animate-fade-in-up delay-300 border border-orange-500"
        >
          Faça já o seu pedido
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default Hero;