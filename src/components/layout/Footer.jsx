import React from 'react';
import Container from './Container';
import { Github } from 'lucide-react';

/**
 * Footer Component
 * Purpose: Site-wide footer with legal and social links.
 */
const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <Container>
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} EquipMe AI. All rights reserved.
          </p>

          {/* Social Links */}
          <a
            href="https://github.com/nemestron/equipme-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
            aria-label="GitHub Repository"
          >
            <Github size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
