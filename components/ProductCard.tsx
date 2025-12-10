import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-[#3E2519] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full border border-orange-900/50 p-6 group hover:-translate-y-1 overflow-hidden">
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-xl font-bold text-amber-50 mb-4 group-hover:text-orange-400 transition-colors text-center">{product.name}</h3>
        
        <p className="text-stone-300 text-sm leading-relaxed text-center">
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;