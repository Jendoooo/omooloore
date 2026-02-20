'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const highlights = [
    { title: "BAT GAME", desc: "Coordinating grassroots movement for Bola Ahmed Tinubu", image: "/images/portraits/highres-4.jpeg" },
    { title: "Loyal Member", desc: "Consistent APC member since 1999, bridging leadership with grassroots", image: "/images/portraits/highres-8.jpeg" },
    { title: "Campaign Agent", desc: "Key driver in Tokunbo Abiru & Sanwo-Olu/Hamzat Campaigns (2019)", image: "/images/portraits/highres-9.jpeg" },
];

export default function PoliticalJourneyPage() {
    return (
        <div className="bg-[var(--color-platinum)] min-h-screen">

            {/* Header */}
            <header className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 text-center border-b border-black/5 bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-3 mb-8">
                        <span className="w-12 h-[1px] bg-[var(--color-apc-green)]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-apc-green)]">The Pedigree</span>
                        <span className="w-12 h-[1px] bg-[var(--color-apc-green)]" />
                    </div>
                    <h1 className="text-display text-[var(--color-deep-forest)] mb-6">
                        Political <span className="font-bold italic">Journey.</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-charcoal)] font-light max-w-2xl mx-auto">
                        A steadfast commitment to progressive politics, rooted in unwavering loyalty to the party since 1999.
                    </p>
                </motion.div>
            </header>

            {/* Masonry-style Bento Grid */}
            <section className="py-20 lg:py-32">
                <div className="container-premium">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Large Featured Card (BAT GAME) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="md:col-span-2 lg:col-span-2 bg-[var(--color-deep-forest)] text-white rounded-3xl overflow-hidden relative min-h-[500px] flex flex-col justify-end p-8 lg:p-12 shadow-xl group"
                        >
                            <Image
                                src="/images/political/bat-game.png"
                                alt="BAT GAME Movement"
                                fill
                                className="object-cover object-top opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)] via-[var(--color-deep-forest)]/60 to-transparent" />

                            <div className="relative z-10 w-full md:w-2/3">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-wealth-gold)]">Flagship Role</span>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4">BAT GAME Coordinator</h2>
                                <p className="text-lg font-light text-white/80">
                                    Spearheading the Bola Ahmed Tinubu Grassroots & Media Electioneering movement, uniting the community for progressive leadership.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stacked Side Cards */}
                        <div className="flex flex-col gap-6">

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-white rounded-3xl p-8 flex-1 flex flex-col justify-center border border-black/5 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-5xl font-bold font-serif text-[var(--color-apc-green)] mb-2">1999</h3>
                                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-charcoal)] mb-2">APC Membership</p>
                                <p className="text-sm font-light text-gray-500">
                                    A foundation member demonstrating deep-seated loyalty to the progressive ideology.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="bg-gradient-to-br from-[var(--color-wealth-gold)] to-[#b08c40] rounded-3xl p-8 flex-1 flex flex-col justify-center text-white"
                            >
                                <h3 className="text-2xl font-bold font-serif mb-4">Campaign Leadership</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 text-white/50">→</span>
                                        <span className="text-sm font-medium">Tokunbo Abiru Campaign</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="mt-1 text-white/50">→</span>
                                        <span className="text-sm font-medium">Sanwo-Olu/Hamzat Agent (2019)</span>
                                    </li>
                                </ul>
                            </motion.div>

                        </div>

                        {/* Bottom Row Images */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-white rounded-3xl overflow-hidden aspect-video relative group"
                        >
                            <Image src="/images/portraits/highres-8.jpeg" alt="Action shot" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="bg-white rounded-3xl overflow-hidden aspect-video relative group md:col-span-2"
                        >
                            <Image src="/images/portraits/highres-9.jpeg" alt="Action shot" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)] to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-2xl font-bold text-white mb-2">Community Engagement</h3>
                                <p className="text-sm text-white/80 font-light max-w-lg">Bridging the gap between active governance and the grassroots population through unyielding dedication.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
