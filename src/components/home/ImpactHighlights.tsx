'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const stats = [
    { value: "34k+", label: "MFI NGO Members", sub: "across 65 countries" },
    { value: "8", label: "Core Policy Pillars", sub: "for sustainable growth" },
    { value: "100s", label: "Lives Impacted", sub: "via medical & youth outreach" },
];

export default function ImpactHighlights() {
    return (
        <section className="bg-[var(--color-deep-forest)] text-white py-24 lg:py-32 relative z-10">

            <div className="container-premium">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl lg:text-6xl font-serif font-light mb-4">
                            Driving <span className="font-bold text-[var(--color-wealth-gold)]">Real Impact</span>
                        </h2>
                        <p className="text-xl font-light text-white/70">
                            Transforming communities through humanitarian service, structured policy, and unwavering dedication to grassroots development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link
                            href="/social-impact"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-[var(--color-deep-forest)] transition-all duration-300 group"
                        >
                            <span className="text-xs font-bold uppercase tracking-widest">View Full Portfolio</span>
                            <span className="font-serif group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

                    {/* Main Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-2 glass-panel-dark rounded-3xl p-8 lg:p-12 relative overflow-hidden group min-h-[400px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-apc-green)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] self-start mb-12">
                                Flagship Initiative
                            </div>

                            <div>
                                <h3 className="text-3xl lg:text-5xl font-serif font-bold mb-4">"My Friends and I" (MFI)</h3>
                                <p className="text-lg font-light text-white/80 max-w-xl">
                                    A massive humanitarian network dedicated to medical outreach, youth empowerment, COVID-19 relief, and the D.A.R.E anti-drug program.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats Stack */}
                    <div className="space-y-4 lg:space-y-6 flex flex-col">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="glass-panel-dark rounded-3xl p-6 lg:p-8 flex-1 flex flex-col justify-center relative overflow-hidden"
                            >
                                {/* Subtle gradient flash on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-wealth-gold)]/0 via-[var(--color-wealth-gold)]/5 to-[var(--color-wealth-gold)]/0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] transition-transform" />

                                <h4 className="text-5xl lg:text-6xl font-bold font-serif text-[var(--color-wealth-gold)] mb-2">
                                    {stat.value}
                                </h4>
                                <p className="font-bold text-sm tracking-wide mb-1">{stat.label}</p>
                                <p className="text-xs text-white/50 uppercase tracking-widest">{stat.sub}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
