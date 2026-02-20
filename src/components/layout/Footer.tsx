'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const footerLinks = {
    navigation: [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'Biography' },
        { href: '/political-journey', label: 'Political Journey' },
        { href: '/social-impact', label: 'Humanitarian Impact' },
    ],
    more: [
        { href: '/vision', label: 'The Blueprint' },
        { href: '/legacy', label: 'The Inspiration' },
        { href: '/contact', label: 'Connect' },
    ],
    social: [
        { href: 'https://facebook.com', label: 'Facebook', Icon: FaFacebookF },
        { href: 'https://twitter.com', label: 'Twitter/X', Icon: FaXTwitter },
        { href: 'https://instagram.com', label: 'Instagram', Icon: FaInstagram },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-[var(--color-deep-forest)] text-white relative overflow-hidden rounded-t-[3rem] mt-[-2rem] z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] pb-12">

            {/* Background Texture & Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,135,81,0.1),transparent_50%)] pointer-events-none" />
            <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-wealth-gold)]/30 to-transparent" />

            <div className="container-premium relative z-10 pt-24 lg:pt-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

                    {/* Brand Section - Massive Impact */}
                    <div className="md:col-span-12 lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mb-12"
                        >
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-wealth-gold)] to-[#b08c40] flex items-center justify-center mb-8 shadow-[0_10px_30px_rgba(212,175,55,0.2)]">
                                <span className="text-[var(--color-deep-forest)] font-bold text-3xl font-serif">O</span>
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-serif font-light mb-4">
                                Ọmọ Olóore<span className="text-[var(--color-wealth-gold)]">.</span>
                            </h2>
                            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-[var(--color-apc-green)] mb-6">
                                The Benefactor
                            </p>
                            <p className="text-white/60 font-light text-lg max-w-md leading-relaxed">
                                A dedicated public servant committed to the progressive development of Lekki LCDA, grounded in 45 years of authentic grassroots connection.
                            </p>
                        </motion.div>
                    </div>

                    {/* Links Grid */}
                    <div className="md:col-span-12 lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 pt-4">

                        {/* Core Navigation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-wealth-gold)] mb-8">Platform</h4>
                            <ul className="space-y-4">
                                {footerLinks.navigation.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-white/70 hover:text-white text-sm font-light transition-colors duration-300 relative group inline-block"
                                        >
                                            <span className="relative z-10">{link.label}</span>
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-wealth-gold)] transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* More Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-wealth-gold)] mb-8">Discover</h4>
                            <ul className="space-y-4">
                                {footerLinks.more.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-white/70 hover:text-white text-sm font-light transition-colors duration-300 relative group inline-block"
                                        >
                                            <span className="relative z-10">{link.label}</span>
                                            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[var(--color-wealth-gold)] transition-all duration-300 group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Social Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="col-span-2 md:col-span-1 mt-8 md:mt-0"
                        >
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-wealth-gold)] mb-8">Connect</h4>
                            <div className="flex flex-row md:flex-col gap-4">
                                {footerLinks.social.map((social) => (
                                    <a
                                        key={social.href}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 text-white/70 hover:text-[var(--color-wealth-gold)] transition-colors duration-300"
                                        aria-label={social.label}
                                    >
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[var(--color-wealth-gold)] group-hover:bg-[var(--color-wealth-gold)]/10 transition-all duration-300">
                                            <social.Icon className="text-sm" />
                                        </div>
                                        <span className="text-sm font-light hidden md:block">{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>

                {/* Massive Bottom Text & Copyright */}
                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col items-center">
                    <p className="text-[clamp(10px,2vw,14px)] text-white/40 font-light mb-8 text-center uppercase tracking-widest">
                        Designed with progressive intent &bull; &copy; {new Date().getFullYear()} Hon. Ayeola Hammed Ademola
                    </p>
                    <h1 className="text-[clamp(40px,15vw,250px)] font-serif font-bold text-white/5 uppercase tracking-tighter leading-none select-none pointer-events-none">
                        Progress.
                    </h1>
                </div>

            </div>
        </footer>
    );
}
