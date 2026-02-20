'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Biography' },
  { href: '/political-journey', label: 'Pedigree' },
  { href: '/social-impact', label: 'Impact' },
  { href: '/vision', label: 'Vision' },
  { href: '/legacy', label: 'Legacy' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-6 pointer-events-none flex justify-center w-full"
      >
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-6xl rounded-full flex items-center justify-between px-6 py-4 ${isScrolled || isOpen
            ? 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]'
            : 'bg-transparent'
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 rounded-full bg-[var(--color-deep-forest)] flex items-center justify-center overflow-hidden relative">
              <span className="text-[var(--color-wealth-gold)] font-serif text-xl absolute z-10">O</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-wealth-gold)]/20 to-transparent group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
            </div>
            <div className={`hidden sm:block transition-colors duration-300 ${isScrolled || pathname !== '/' ? 'text-[var(--color-deep-forest)]' : 'text-white'}`}>
              <p className="font-serif font-bold text-sm leading-none tracking-wide uppercase">Ọmọ Olóore</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-2 py-1 border border-white/20">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-widest transition-all duration-300 relative group ${isActive || (isScrolled && !isActive) || pathname !== '/'
                    ? 'text-[var(--color-deep-forest)] hover:text-black'
                    : 'text-white/80 hover:text-white'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/40 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-white/50 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50">
            <Link
              href="/contact"
              className={`hidden md:block px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105 ${isScrolled || pathname !== '/'
                ? 'bg-[var(--color-deep-forest)] text-[var(--color-wealth-gold)] hover:shadow-xl hover:shadow-[var(--color-deep-forest)]/20'
                : 'bg-white text-[var(--color-deep-forest)] hover:bg-[var(--color-wealth-gold)] hover:text-white'
                }`}
            >
              Get in Touch
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 transition-colors ${isScrolled || pathname !== '/' || isOpen ? 'bg-black/5 text-black' : 'bg-white/10 text-white backdrop-blur-md'
                }`}
            >
              <motion.span animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className={`w-4 h-0.5 block transition-colors ${isScrolled || pathname !== '/' || isOpen ? 'bg-[var(--color-deep-forest)]' : 'bg-white'}`} />
              <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className={`w-4 h-0.5 block transition-colors ${isScrolled || pathname !== '/' || isOpen ? 'bg-[var(--color-deep-forest)]' : 'bg-white'}`} />
              <motion.span animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className={`w-4 h-0.5 block transition-colors ${isScrolled || pathname !== '/' || isOpen ? 'bg-[var(--color-deep-forest)]' : 'bg-white'}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-platinum)] pt-32 px-6 pb-12 flex flex-col lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-serif text-[var(--color-deep-forest)] hover:text-[var(--color-wealth-gold)] transition-colors block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-8 pt-8 border-t border-black/10"
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[var(--color-deep-forest)] text-[var(--color-wealth-gold)] rounded-full text-sm font-bold uppercase tracking-widest"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
