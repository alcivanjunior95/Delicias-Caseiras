import React from 'react';

const Badge: React.FC<{ className?: string }> = ({ className = 'w-32 h-32' }) => {
  return (
    <div className={`relative ${className}`}>
      <style>
        {`
          @keyframes border-color-cycle {
            0%, 100% { stroke: #F59E0B; } /* Amarelo/Amber */
            50% { stroke: #DC2626; } /* Vermelho */
          }
          .animate-border-cycle {
            animation: border-color-cycle 2s infinite ease-in-out;
          }
        `}
      </style>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-lg overflow-visible"
      >
        {/* Forma de estrela/explosão de 16 pontas */}
        <path
          d="M50 2 L58.5 28.5 L85.5 23 L73.5 47 L97 62 L69 72 L66 99 L46 79 L20 93 L27 66 L3 56 L26.5 41 L14.5 17 L41.5 28.5 Z"
          fill="transparent" 
          strokeWidth="4"
          strokeLinejoin="round"
          className="animate-border-cycle"
        />
        <text
          x="50"
          y="56"
          fill="white"
          fontSize="22"
          fontWeight="900"
          fontFamily="Arial, sans-serif"
          textAnchor="middle"
          dominantBaseline="middle"
          className="tracking-widest drop-shadow-md select-none"
        >
          FAZEMOS
        </text>
      </svg>
    </div>
  );
};

export default Badge;