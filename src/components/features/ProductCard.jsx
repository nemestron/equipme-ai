import React from 'react';
import Card from '../common/Card';
import CompatibilityBadge from './CompatibilityBadge';
import { ExternalLink } from 'lucide-react';
import { formatCurrency } from '../../utils/formatCurrency';

const ProductCard = ({ product }) => {
  return (
    <Card className="h-full flex flex-col group transition-all duration-300
                     hover:border-brand-200 dark:hover:border-brand-700
                     bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" hoverable={true}>
      
      <div className="p-6 flex flex-col flex-grow space-y-4">
        {/* Header */}
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg leading-tight transition-colors
                           text-slate-900 group-hover:text-brand-600
                           dark:text-slate-100 dark:group-hover:text-brand-400">
              {product.name}
            </h3>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {product.brand} • {product.category}
            </p>
          </div>
          <div className="text-lg font-bold shrink-0 text-slate-900 dark:text-white">
            {formatCurrency(product.price)}
          </div>
        </div>

        {/* Desc */}
        <p className="text-sm leading-relaxed flex-grow text-slate-600 dark:text-slate-400">
          {product.description}
        </p>

        {/* Footer */}
        <div className="pt-4 mt-auto border-t space-y-3 border-slate-100 dark:border-slate-800">
          <div className="space-y-2">
            <CompatibilityBadge type={product.compatibility} />
            {product.whyIncluded && (
              <p className="text-xs italic p-2.5 rounded border 
                            bg-slate-50 border-slate-100 text-slate-500
                            dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">
                "{product.whyIncluded}"
              </p>
            )}
          </div>

          <a 
            href={`https://www.google.com/search?q=${encodeURIComponent(product.brand + ' ' + product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-2 text-xs font-medium rounded-lg transition-colors border 
                       text-slate-600 bg-slate-50 border-slate-200 hover:bg-slate-100
                       dark:text-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700"
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
