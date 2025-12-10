import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import WhatsAppButton from './components/WhatsAppButton';
import { PRODUCTS } from './constants';
import { Phone, MapPin, Clock } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#2C1810] flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />

        {/* Products Section */}
        <section id="produtos" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-50 mb-4">Nossas Especialidades</h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-stone-300 max-w-2xl mx-auto">
              Confira nossa seleção de produtos frescos, feitos sob encomenda especialmente para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Info/Contact Section */}
        <section id="contato" className="bg-[#2C1810] py-16 border-t border-orange-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center p-6 bg-[#3E2519] rounded-xl shadow-lg border border-orange-900/50">
                <div className="bg-orange-900/50 p-3 rounded-full mb-4">
                  <Phone className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-amber-50">Faça seu Pedido</h3>
                <p className="text-stone-300">(11) 96922-5191</p>
                <p className="text-sm text-stone-400 mt-1">Atendimento via WhatsApp</p>
              </div>
              
              <div className="flex flex-col items-center p-6 bg-[#3E2519] rounded-xl shadow-lg border border-orange-900/50">
                <div className="bg-orange-900/50 p-3 rounded-full mb-4">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-amber-50">Horário</h3>
                <p className="text-stone-300">Segunda a Sábado</p>
                <p className="text-stone-300">08:00 às 18:00</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-[#3E2519] rounded-xl shadow-lg border border-orange-900/50">
                <div className="bg-orange-900/50 p-3 rounded-full mb-4">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-amber-50">Entrega</h3>
                <p className="text-stone-300">Entregamos na região</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-orange-600 text-white py-8 border-t border-orange-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-medium">© {new Date().getFullYear()} Delícias Caseiras. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;