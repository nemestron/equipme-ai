import React, { useState } from 'react';
import { Menu, X, Package } from 'lucide-react';
import Container from './Container';

/**
 * Header Component
 * Purpose: Top navigation bar.
 * Features: Sticky positioning, mobile menu toggle.
 */
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-16">
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo Area */}
          <div className="flex items-center space-x-2">
            <div className="bg-brand-600 p-1.5 rounded-lg">
              <Package className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              EquipMe
            </span>
          </div>

          {/* Desktop Navigation (Placeholder for future links) */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              How it Works
            </a>
            <a href="https://github.com/nemestron/equipme-ai" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#" 
              className="text-base font-medium text-slate-600 hover:text-brand-600 px-2 py-1 rounded-md hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a 
              href="https://github.com/nemestron/equipme-ai" 
              target="_blank" 
              rel="noreferrer"
              className="text-base font-medium text-slate-600 hover:text-brand-600 px-2 py-1 rounded-md hover:bg-slate-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
