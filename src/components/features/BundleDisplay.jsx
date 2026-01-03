import React from 'react';
import ProductCard from './ProductCard';
import Skeleton from '../common/Skeleton';
import { Sparkles, ShoppingBag } from 'lucide-react';

/**
 * BundleDisplay Component
 * Purpose: Renders the grid of generated products or loading states.
 * Props:
 * - bundle: Object containing 'items' array
 * - isLoading: boolean
 */
const BundleDisplay = ({ bundle, isLoading }) => {
  
  // 1. Loading State: Show Grid of Skeletons
  if (isLoading) {
    return (
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-6 text-brand-600 animate-pulse">
          <Sparkles className="h-5 w-5" />
          <span className="font-medium">Curating your perfect setup...</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-full bg-white rounded-xl border border-slate-100 p-4 space-y-4">
              <Skeleton className="h-40 w-full rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/4" />
              </div>
              <Skeleton className="h-16 w-full" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 2. Empty State: Show Welcome Message
  if (!bundle || !bundle.items || bundle.items.length === 0) {
    return (
      <div className="mt-12 text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
        <div className="bg-white p-4 rounded-full inline-flex mb-4 shadow-sm">
          <ShoppingBag className="h-8 w-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-medium text-slate-900">No bundle generated yet</h3>
        <p className="text-slate-500 mt-1 max-w-sm mx-auto">
          Enter a goal and budget above, then ask EquipMe to curate your setup.
        </p>
      </div>
    );
  }

  // 3. Success State: Render Product Grid
  return (
    <div className="mt-8 pb-24">
      {/* Bundle Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          {bundle.bundleName || 'Your Custom Bundle'}
        </h2>
        <p className="text-slate-600 mt-1">
          {bundle.bundleDescription}
        </p>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bundle.items.map((item, index) => (
          <div key={item.id || index} className="h-full">
            <ProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BundleDisplay;
