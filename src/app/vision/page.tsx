'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const pillars = [
    { title: "Education", desc: "E-learning integration and comprehensive teacher welfare programs.", num: "I" },
    { title: "Social Infrastructure", desc: "Renovating critical infrastructure like schools, health centers, and road stabilization.", num: "II" },
    { title: "Security", desc: "Bolstering neighborhood watch architectures and structured intelligence gathering.", num: "III" },
    { title: "Youth Empowerment", desc: "Establishing vocational tech centers and demanding inclusion in governance.", num: "IV" },
    { title: "Healthcare", desc: "Deploying mobile clinics for rural areas and elevating sanitation standards.", num: "V" },
    { title: "Traditional Rulers", desc: "Ensuring improved welfare and establishing regular consultation councils.", num: "VI" },
    { title: "Women Empowerment", desc: "Targeted financial aid, widow support, and small business stimulus grants.", num: "VII" },
    { title: "Agric & Economy", desc: "Micro-loans for local farmers/fishermen and development of new modern markets.", num: "VIII" },
];

export default function VisionPage() {
    return (
        <div className="bg-white min-h-screen">

            {/* Header */}
            <header className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 text-center bg-[var(--color-platinum)] rounded-b-[4rem] relative z-20 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-apc-green)]/20 text-[var(--color-apc-green)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                        The Blueprint
                    </span>
                    <h1 className="text-display text-[var(--color-deep-forest)] mb-8">
                        8-Point <span className="font-bold italic text-[var(--color-wealth-gold)]">Agenda.</span>
                    </h1>
                    <p className="text-xl lg:text-2xl text-[var(--color-charcoal)] font-light leading-relaxed">
                        A structurally sound, actionable development policy framework focused entirely on the sustainable growth of the Lekki LCDA.
                    </p>
                </motion.div>
            </header>

            {/* Content & Image Flex */}
            <section className="py-20 lg:py-32 relative z-10 -mt-20">
                <div className="container-premium">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                        {/* Interactive Pillar List */}
                        <div className="lg:col-span-7 pt-20">
                            <div className="space-y-6 lg:space-y-8">
                                {pillars.map((pillar, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="group flex gap-6 lg:gap-8 items-start pb-6 border-b border-black/5 last:border-0"
                                    >
                                        <div className="font-serif text-3xl lg:text-5xl text-[var(--color-platinum)] group-hover:text-[var(--color-wealth-gold)] font-bold transition-colors duration-500 w-16 lg:w-24 shrink-0">
                                            {pillar.num}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[var(--color-deep-forest)] mb-3 group-hover:text-[var(--color-apc-green)] transition-colors">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-lg text-[var(--color-charcoal)] font-light leading-relaxed">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sticky Image Column */}
                        <div className="lg:col-span-5 relative hidden lg:block">
                            <div className="sticky top-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="rounded-[3rem] overflow-hidden shadow-2xl aspect-[3/4] relative"
                                >
                                    <Image
                                        src="/images/portraits/highres-6.jpeg"
                                        alt="Vision for Lekki LCDA"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)]/60 via-transparent to-transparent mix-blend-multiply" />

                                    {/* Overlay Text */}
                                    <div className="absolute inset-x-8 bottom-8 text-white">
                                        <div className="w-12 h-12 bg-[var(--color-wealth-gold)] rounded-full flex items-center justify-center mb-6 shadow-lg">
                                            <span className="font-serif text-xl text-[var(--color-deep-forest)]">O</span>
                                        </div>
                                        <p className="font-serif italic text-2xl font-light">"A vision without execution is just hallucination. We focus on execution."</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
