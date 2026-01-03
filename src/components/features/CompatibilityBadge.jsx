import React from 'react';
import { CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

/**
 * CompatibilityBadge Component
 */
const CompatibilityBadge = ({ type = 'compatible' }) => {
  const config = {
    compatible: {
      color: 'bg-green-100 text-green-700 border-green-200',
      icon: CheckCircle2,
      text: 'Fully Compatible',
    },
    conditional: {
      color: 'bg-amber-100 text-amber-700 border-amber-200',
      icon: AlertCircle,
      text: 'Conditions Apply',
    },
    standalone: {
      color: 'bg-slate-100 text-slate-600 border-slate-200',
      icon: HelpCircle,
      text: 'Standalone Item',
    },
  };

  const style = config[type] || config.compatible;
  const Icon = style.icon;

  return (
    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${style.color}`}>
      <Icon size={12} />
      <span>{style.text}</span>
    </div>
  );
};

export default CompatibilityBadge;
