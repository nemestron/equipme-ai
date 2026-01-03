import React from 'react';
import ProductCard from './ProductCard';
import Skeleton from '../common/Skeleton';
import { Sparkles, ArrowRight, Search, CheckCircle2 } from 'lucide-react';

const BundleDisplay = ({ bundle, isLoading }) => {
  
  // --- 1. LOADING STATE ---
  if (isLoading) {
    return (
      <div 
        className="space-y-8 animate-fadeIn" 
        aria-busy="true" 
        aria-live="polite"
        aria-label="Loading bundle results"
      >
        {/* Loading Header */}
        <div className="text-center space-y-2">
           <Skeleton className="h-8 w-64 mx-auto" />
           <Skeleton className="h-4 w-96 mx-auto" />
        </div>

        {/* Loading Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <div className="flex justify-between">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-6 w-16" />
              </div>
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <Skeleton className="h-8 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- 2. EMPTY / WELCOME STATE ---
  if (!bundle) {
    return (
      <div className="mt-12 py-12 border-t border-slate-100 dark:border-slate-800">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">How EquipMe Works</h2>
          <p className="text-slate-500 dark:text-slate-400">Three steps to your perfect setup</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
          {[
            { 
              icon: Search, 
              title: "1. Define Goal", 
              desc: "Tell us what you want to achieve (e.g., 'Stream on Twitch')." 
            },
            { 
              icon: ArrowRight, 
              title: "2. Set Budget", 
              desc: "Adjust the slider to match your financial comfort zone." 
            },
            { 
              icon: Sparkles, 
              title: "3. Get Curated", 
              desc: "AI selects the best compatible gear instantly." 
            }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-full text-brand-600" aria-hidden="true">
                <step.icon size={24} />
              </div>
              <h3 className="font-medium text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // --- 3. RESULTS STATE (BUNDLE) ---
  return (
    <div 
      className="space-y-8 animate-fadeIn pb-24" 
      aria-live="polite" // Announces updates when content changes
      id="bundle-results"
    >
      {/* Bundle Header */}
      <div className="text-center space-y-2 bg-white dark:bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-100/50">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          {bundle.bundleName}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {bundle.bundleDescription}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
        {bundle.items.map((product, index) => (
          // Staggered Animation Delay based on index
          <div 
            key={product.id || index} 
            className="animate-fadeIn"
            style={{ animationDelay: `${index * 100}ms` }}
            role="listitem"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      <div className="flex justify-center pt-8 text-slate-400 text-sm flex items-center gap-2">
        <CheckCircle2 size={16} aria-hidden="true" />
        <span>All items checked for compatibility</span>
      </div>
    </div>
  );
};

export default BundleDisplay;

