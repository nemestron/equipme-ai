import React from 'react';
import Container from './Container';
import { Cpu } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkedInUrl = "https://www.linkedin.com/in/dhiraj-malwade-6a8385399/";

  return (
    <footer className="mt-auto border-t transition-colors duration-300 bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <Container>
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* CENTERED CONTENT (Since right side is gone, we let this take focus) */}
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
             
             {/* Copyright & Creator */}
             <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-sm font-medium text-slate-900 dark:text-slate-100 text-center md:text-left">
                <span>&copy; {currentYear} EquipMe.</span>
                <span className="hidden md:inline text-slate-300">|</span>
                <span>
                  Creator -{' '}
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 hover:text-brand-700 hover:underline transition-colors font-semibold"
                    aria-label="Visit Dhiraj Malwade's LinkedIn Profile"
                  >
                    Dhiraj Malwade
                  </a>
                </span>
             </div>
             
             {/* Tech Stack Badge */}
             <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 dark:border-slate-700 px-3 py-1.5 rounded-full border border-slate-100">
               <Cpu size={14} />
               <span>Powered by Google Gemini 2.5 Flash</span>
             </div>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;

