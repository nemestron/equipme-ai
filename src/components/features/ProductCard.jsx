import React from 'react';
import { Package, Tag, ThumbsUp } from 'lucide-react';
import Card from '../common/Card';
import CompatibilityBadge from './CompatibilityBadge';

/**
 * ProductCard Component
 * Purpose: Displays a single recommended product with AI context.
 * Props:
 * - product: Object containing name, price, description, reason, etc.
 */
const ProductCard = ({ product }) => {
  // Safe formatting for currency
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(product.price || 0);

  return (
    <Card hoverable className="h-full flex flex-col">
      {/* 1. Image Placeholder Area */}
      <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100 relative group overflow-hidden">
        <Package className="h-12 w-12 text-slate-300 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Category Tag Overlay */}
        {product.category && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-slate-600 shadow-sm border border-slate-200">
            {product.category}
          </div>
        )}
      </div>

      {/* 2. Content Body */}
      <div className="p-5 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start gap-2 mb-2">
          <div>
            <h3 className="font-semibold text-slate-900 leading-tight line-clamp-2">
              {product.name}
            </h3>
            {product.brand && (
              <p className="text-xs text-slate-500 mt-1">{product.brand}</p>
            )}
          </div>
          <span className="font-bold text-slate-900 shrink-0">
            {formattedPrice}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>

        {/* AI Context Section */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <CompatibilityBadge type={product.compatibility || 'compatible'} />
          
          {/* Why Included Snippet */}
          <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
            <ThumbsUp size={14} className="text-brand-500 mt-0.5 shrink-0" />
            <span className="italic">
              &quot;{product.whyIncluded || 'Recommended for your goal'}&quot;
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
