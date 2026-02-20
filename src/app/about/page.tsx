'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: 'Safety Officer',
        organization: 'Lekki Freeport Terminal',
        description: 'Ensuring community and industrial safety protocols',
        icon: '01',
    },
    {
        role: 'Senior Special Assistant',
        organization: 'Executive Chairman, Ibeju Lekki LG',
        description: 'Supporting local government administration and policy',
        icon: '02',
    },
    {
        role: 'Personal Secretary',
        organization: 'House of Representatives Member',
        description: 'Ibeju Lekki Federal Constituency communication',
        icon: '03',
    },
    {
        role: 'Press Secretary',
        organization: 'Executive Chairman, Lekki LCDA',
        description: 'Managing public communications and media relations',
        icon: '04',
    },
    {
        role: 'Ministry of Health',
        organization: 'Lagos State Government',
        description: 'Supporting critical state health initiatives',
        icon: '05',
    },
    {
        role: 'National Population Commission',
        organization: 'Federal Government',
        description: 'Contributing to vital demographic planning',
        icon: '06',
    },
];

const education = [
    {
        degree: 'B.Ed. Political Science',
        institution: 'Ekiti State University',
        status: 'In Progress',
        year: 'Current',
    },
    {
        degree: 'B.Sc. Mass Communication',
        institution: 'Olabisi Onabanjo University',
        status: 'Completed',
        year: '',
    },
    {
        degree: "Teacher's Grade II",
        institution: 'National Teachers Institute, Kaduna',
        status: 'Completed',
        year: '',
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[var(--color-deep-forest)] py-32 lg:py-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-platinum)] translate-y-[90%]" />
                <div className="container-premium relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-wealth-gold)]/30 text-[var(--color-wealth-gold)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
                    >
                        Biography
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-display text-white italic font-light mb-6"
                    >
                        Meet <span className="font-bold font-serif not-italic text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wealth-gold)] to-[var(--color-bright-gold)]">Ọmọ Olóore</span>
                    </motion.h1>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="bg-[var(--color-platinum)] pb-32">
                <div className="container-premium">

                    {/* Bio Layout */}
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32 -mt-20 lg:-mt-32 relative z-20">
                        {/* Huge Portrait */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="lg:col-span-5 relative"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] aspect-[3/4] relative">
                                <Image
                                    src="/images/portraits/highres-3.jpeg"
                                    alt="Hon. Ayeola Hammed Ademola"
                                    fill
                                    className="object-cover object-top"
                                />
                                {/* Soft overlay */}
                                <div className="absolute inset-0 bg-[var(--color-deep-forest)] mix-blend-color opacity-10" />
                            </div>

                            {/* Glass Roots Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="absolute -left-4 -bottom-8 lg:-left-12 glass-panel p-6 rounded-2xl w-64 bg-white/80"
                            >
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-apc-green)] mb-2">Heritage</p>
                                <p className="font-serif text-[var(--color-deep-forest)] leading-tight">Born into Ayeola, Okunraye, and Onisango families of Oshoroko.</p>
                            </motion.div>
                        </motion.div>

                        {/* Bio Text Editorial */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="lg:col-span-7 pt-12 lg:pt-32"
                        >
                            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[var(--color-deep-forest)] mb-12 leading-tight">
                                Deeply rooted in the history and tradition of <span className="font-bold italic">Lekki.</span>
                            </h2>

                            <div className="prose prose-lg prose-gray max-w-none text-[var(--color-charcoal)] font-light columns-1 md:columns-2 gap-8">
                                <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:text-[var(--color-apc-green)] first-letter:mr-3 first-letter:float-left">
                                    Over the past 45 years, I have cultivated a deep connection to our community and an unyielding commitment to its development. My educational journey began at Lupetoro Primary School in Epe, where I graduated in 1986, before continuing my secondary education at Ogunmodede College.
                                </p>
                                <p>
                                    Eager to further my academic pursuits, I earned a Teacher's Grade II certificate from the National Teachers Institute in Kaduna, followed by a B.Sc in Mass Communication from Olabisi Onabanjo University.
                                </p>
                                <p>
                                    Currently, I am finalizing a B.Ed in Political Science at Ekiti State University, further equipping myself with the knowledge to lead effectively.
                                </p>
                                <p>
                                    My public service career spans local, state, and national levels, having contributed meaningfully in various capacities—each role honing my leadership skills and broadening my understanding of governance challenges.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bento Box Grid for Experience & Education */}
                    <div className="grid lg:grid-cols-3 gap-6">

                        {/* Education Block (Col 1) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-black/5 lg:col-span-1"
                        >
                            <h3 className="text-2xl font-serif font-bold text-[var(--color-deep-forest)] mb-8 flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[var(--color-wealth-gold)]" />
                                Education
                            </h3>

                            <div className="space-y-8">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="relative pl-6 border-l border-[var(--color-platinum)]">
                                        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[var(--color-wealth-gold)]" />
                                        <h4 className="font-bold text-[var(--color-charcoal)] mb-1">{edu.degree}</h4>
                                        <p className="text-sm text-gray-500 font-light">{edu.institution}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Experience Grid (Col 2 & 3) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-[var(--color-deep-forest)] rounded-3xl p-8 lg:p-12 shadow-xl lg:col-span-2 text-white relative overflow-hidden"
                        >
                            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[var(--color-forest)] rounded-full blur-3xl opacity-50" />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold text-[var(--color-wealth-gold)] mb-8 flex items-center gap-4">
                                    <span className="w-8 h-[1px] bg-[var(--color-wealth-gold)]" />
                                    Public Service Record
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                                    {experiences.map((exp, idx) => (
                                        <div key={idx} className="group">
                                            <span className="text-[10px] font-bold font-serif text-[var(--color-wealth-gold)]/50 tracking-widest block mb-2 group-hover:text-[var(--color-wealth-gold)] transition-colors">
                                                {exp.icon}
                                            </span>
                                            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--color-wealth-gold)] transition-colors">
                                                {exp.role}
                                            </h4>
                                            <p className="text-[11px] uppercase tracking-widest text-[#8fb9a8] mb-2">{exp.organization}</p>
                                            <p className="text-sm font-light text-white/60">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </section>
        </>
    );
}
