'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactSuccessPage() {
    return (
        <div className="bg-[var(--color-platinum)] min-h-screen pt-32 pb-24 flex items-center justify-center">
            <div className="container-premium text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto bg-white rounded-[3rem] p-12 lg:p-20 shadow-2xl border border-black/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-wealth-gold)] rounded-full blur-3xl opacity-10 -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="w-20 h-20 bg-[var(--color-apc-green)]/10 text-[var(--color-apc-green)] rounded-full flex items-center justify-center mx-auto mb-8">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-serif text-[var(--color-deep-forest)] font-bold mb-6">
                        Message Received.
                    </h1>
                    
                    <p className="text-lg text-[var(--color-charcoal)] font-light leading-relaxed mb-12">
                        Thank you for reaching out. Your message has been sent directly to Ọmọ Olóore's office. We will get back to you shortly.
                    </p>

                    <Link 
                        href="/"
                        className="inline-block bg-[var(--color-deep-forest)] text-[var(--color-wealth-gold)] px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors"
                    >
                        Return Home
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
