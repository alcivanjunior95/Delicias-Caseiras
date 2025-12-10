import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-orange-600 border-b border-orange-700 sticky top-0 z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg shadow-sm">
                <UtensilsCrossed className="h-6 w-6 text-orange-600" />
            </div>
            <span className="font-serif text-2xl font-bold text-white tracking-tight drop-shadow-sm">
              Delícias Caseiras
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;