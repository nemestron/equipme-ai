import React from 'react';
import Card from '../common/Card';
import CompatibilityBadge from './CompatibilityBadge';
import { ExternalLink } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-full flex flex-col group hover:border-brand-200 transition-colors" hoverable={true}>
      
      {/* CONTENT SECTION (Expanded to fill full card) */}
      <div className="p-6 flex flex-col flex-grow space-y-4">
        
        {/* Header: Title & Price */}
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-slate-900 leading-tight group-hover:text-brand-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
              {product.brand} • {product.category}
            </p>
          </div>
          
          {/* Relocated Price Display */}
          <div className="text-lg font-bold text-slate-900 shrink-0">
            {formatCurrency(product.price)}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Metadata & Footer */}
        <div className="pt-4 border-t border-slate-100 space-y-3 mt-auto">
          
          {/* Compatibility & Reason */}
          <div className="space-y-2">
            <CompatibilityBadge type={product.compatibility} />
            
            {product.whyIncluded && (
              <p className="text-xs text-slate-500 italic bg-slate-50 p-2.5 rounded border border-slate-100">
                "{product.whyIncluded}"
              </p>
            )}
          </div>

          {/* Search Button */}
          <a 
            href={`https://www.google.com/search?q=${encodeURIComponent(product.brand + ' ' + product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 group-hover:border-slate-300"
          >
            <ExternalLink size={14} className="mr-1.5" />
            Find Online
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
