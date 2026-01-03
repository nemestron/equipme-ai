import React, { useState } from 'react';
import Container from './Container';
import { Package, Menu, X, Github, Linkedin } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkedInUrl = "https://www.linkedin.com/in/dhiraj-malwade-6a8385399/";
  const githubUrl = "https://github.com/nemestron/equipme-ai";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b backdrop-blur-md
                       bg-white/80 border-slate-200 
                       dark:bg-slate-900/80 dark:border-slate-800 transition-colors duration-300">
      <Container className="h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-brand-600 p-1.5 rounded-lg text-white shadow-sm">
              <Package size={20} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              EquipMe
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full transition-all duration-200
                          text-slate-500 hover:text-slate-900 hover:bg-slate-100
                          dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800">
              <Github size={20} />
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full transition-all duration-200
                          text-slate-500 hover:text-[#0077b5] hover:bg-blue-50
                          dark:text-slate-400 dark:hover:text-[#0077b5] dark:hover:bg-slate-800">
              <Linkedin size={20} />
            </a>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <ThemeToggle />
             <button 
               className="p-2 rounded-lg transition-colors
                          text-slate-600 hover:bg-slate-100
                          dark:text-slate-300 dark:hover:bg-slate-800"
               onClick={toggleMenu}
             >
               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b shadow-lg animate-fadeIn
                        bg-white border-slate-200 
                        dark:bg-slate-900 dark:border-slate-800">
          <nav className="flex flex-col p-4 space-y-2">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors
                          text-slate-600 hover:bg-slate-50 hover:text-slate-900
                          dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
               onClick={() => setIsMenuOpen(false)}>
              <Github size={20} />
              <span>GitHub Repository</span>
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg transition-colors
                          text-slate-600 hover:bg-blue-50 hover:text-[#0077b5]
                          dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-[#0077b5]"
               onClick={() => setIsMenuOpen(false)}>
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
