'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <section
            ref={containerRef}
            className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[var(--color-deep-forest)]"
        >
            {/* Immersive Background Image */}
            <motion.div
                style={{ y: y1, scale, opacity }}
                className="absolute inset-0 w-full h-full"
            >
                <Image
                    src="/images/portraits/highres-1.jpeg"
                    alt="Hon. Ayeola Hammed Ademola"
                    fill
                    className="object-cover object-top opacity-60 mix-blend-luminosity"
                    priority
                    quality={100}
                />
                {/* Gradients to mask edges and create depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)] via-[var(--color-deep-forest)]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-deep-forest)]/80 via-transparent to-transparent" />
            </motion.div>

            {/* Hero Content - Editorial Layout */}
            <div className="container-premium relative z-10 w-full h-full flex flex-col justify-end pb-24 md:pb-32">
                <div className="grid md:grid-cols-12 gap-8 items-end">

                    {/* Main Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        <div className="overflow-hidden mb-4">
                            <motion.p
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                className="text-[var(--color-wealth-gold)] font-medium tracking-[0.2em] uppercase text-xs sm:text-sm pl-1"
                            >
                                Leadership &bull; Service &bull; Progress
                            </motion.p>
                        </div>

                        <h1 className="text-display text-white italic font-light mb-2">
                            Hon. Ayeola
                        </h1>
                        <h1 className="text-display text-white font-bold max-w-[900px]">
                            Hammed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wealth-gold)] to-[var(--color-bright-gold)]">Ademola.</span>
                        </h1>
                    </motion.div>

                    {/* Right side info / Abstract Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        className="md:col-span-5 lg:col-span-4 pb-4"
                    >
                        <div className="glass-panel-dark p-6 rounded-2xl relative overflow-hidden backdrop-blur-2xl">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--color-wealth-gold)] rounded-full blur-3xl opacity-20" />

                            <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
                                Deeply rooted in the history of Lekki. A dedicated public servant committed to humanity with over 45 years of community connection.
                            </p>

                            <div className="flex gap-4 items-center border-t border-white/10 pt-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-wealth-gold)] flex items-center justify-center shrink-0">
                                    <span className="text-[var(--color-deep-forest)] font-bold font-serif">O</span>
                                </div>
                                <div>
                                    <p className="text-white text-xs font-bold uppercase tracking-widest">Ọmọ Olóore</p>
                                    <p className="text-[var(--color-wealth-gold)] text-[10px] uppercase tracking-widest">A Promising Political Leader</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
            >
                <span className="text-[var(--color-wealth-gold)] text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="absolute top-0 left-0 w-full h-full bg-[var(--color-wealth-gold)]"
                    />
                </div>
            </motion.div>
        </section>
    );
}
