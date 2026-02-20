'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LegacyPage() {
    return (
        <div className="bg-[var(--color-deep-forest)] text-white min-h-screen pt-32 lg:pt-48 pb-24 relative overflow-hidden">

            {/* Dark background noise and gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,135,81,0.15),transparent_50%)] pointer-events-none" />

            <div className="container-premium relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 text-white/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            The Inspiration
                        </span>
                        <h1 className="text-display font-light mb-8 font-serif italic text-[var(--color-wealth-gold)]">
                            A Legacy of Inspiration.
                        </h1>
                        <p className="text-xl lg:text-3xl font-light leading-relaxed opacity-90">
                            Dedicated to the enduring memory and philosophy of my great mentor and brother, <strong className="font-serif text-white block mt-2">Late Otunba Abdul Kabir Abayomi Ayeola.</strong>
                        </p>
                    </motion.div>
                </div>

                {/* Legacy Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="glass-panel-dark rounded-[3rem] p-8 lg:p-16 relative overflow-hidden max-w-6xl mx-auto"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-wealth-gold)] opacity-50" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/legacy/adebe-kodun.jpg"
                                alt="Legacy"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 border border-white/10 rounded-3xl z-10" />
                        </div>

                        <div>
                            <h3 className="text-3xl lg:text-5xl font-serif text-[var(--color-wealth-gold)] mb-8">"Adebe Ko Kodun"</h3>

                            <div className="space-y-6 text-lg font-light text-white/80 leading-relaxed">
                                <p>
                                    As the First Executive Chairman of Lekki LCDA, his vision laid the foundation upon which we continue to build today.
                                </p>
                                <p>
                                    His guiding philosophy, <strong className="text-white italic">"Adebe Ko Kodun"</strong>, serves as a constant reminder that true leadership is characterized by selflessness, profound empathy, and an unyielding commitment to the welfare of the people.
                                </p>
                                <p>
                                    We do not just remember him; we actively execute his blueprint for a prosperous and united community.
                                </p>
                            </div>

                            <div className="mt-12 flex gap-4 border-t border-white/10 pt-8">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center flex-1">
                                    <p className="text-3xl mb-2 font-serif text-[var(--color-apc-green)]">1st</p>
                                    <p className="text-[10px] uppercase tracking-widest text-white/50">Exec. Chairman</p>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center flex-1">
                                    <p className="text-3xl mb-2 font-serif text-[var(--color-wealth-gold)]">∞</p>
                                    <p className="text-[10px] uppercase tracking-widest text-white/50">Enduring Legacy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
