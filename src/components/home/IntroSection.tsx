'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const badges = [
    "Safety Officer",
    "Senior Special Assistant",
    "Personal Secretary",
    "Press Secretary",
    "Ministry of Health",
    "National Population Commission"
];

export default function IntroSection() {
    return (
        <section className="bg-white text-[var(--color-charcoal)] py-20 lg:py-32 relative z-20 rounded-t-[3rem] -mt-10 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <div className="container-premium">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Image & Decorative Elements */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        {/* The offset aesthetic background */}
                        <div className="absolute -top-6 -left-6 w-full h-full bg-[var(--color-platinum)] rounded-3xl -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-[var(--color-apc-green)]/5 rounded-3xl -z-10" />

                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                            <Image
                                src="/images/portraits/highres-2.jpeg"
                                alt="Hon. Ayeola Hammed Ademola"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-forest)]/40 to-transparent mix-blend-multiply" />
                        </div>

                        {/* Floating Experience Badge */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
                            className="absolute -bottom-10 -right-4 lg:-right-12 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]"
                        >
                            <h3 className="text-4xl font-serif text-[var(--color-wealth-gold)] mb-1">45+</h3>
                            <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-charcoal)] leading-tight">Years of Deep Community Connection</p>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Editorial Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-7 pt-12 lg:pt-0"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-apc-green)]/20 text-[var(--color-apc-green)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            The Leader's Profile
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-serif font-light leading-tight mb-8">
                            A legacy built on <span className="font-bold text-[var(--color-deep-forest)]">genuine service</span> and structural progress.
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed mb-12">
                            <p>
                                I am <strong className="font-medium text-[var(--color-charcoal)]">Ayeola Hammed Ademola</strong>, born into the esteemed families of Ayeola, Okunraye, and Onisango of Oshoroko. My entire journey is woven into the fabric of the Lekki Local Council Development Area.
                            </p>
                            <p>
                                From coordinating the grassroots movement of BAT GAME to serving as Press Secretary, my public service career spans local, state, and national levels—always with a singular focus: uplifting the people.
                            </p>
                        </div>

                        {/* Badges styling like editorial tags */}
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#999]">Key Public Service Roles</h4>
                            <div className="flex flex-wrap gap-2">
                                {badges.map((badge, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-[var(--color-platinum)] hover:bg-[var(--color-deep-forest)] hover:text-white transition-colors duration-300 text-[11px] font-medium uppercase tracking-wider rounded-full"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
