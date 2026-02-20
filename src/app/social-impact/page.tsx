'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaUserDoctor, FaLaptopCode, FaHandsHoldingCircle, FaShieldHalved, FaHospital } from 'react-icons/fa6';

const impacts = [
    { title: "Medical Outreach", text: "Free eye exams and glasses in Olota", Icon: FaUserDoctor },
    { title: "Youth Empowerment", text: "Vocational training: Tailoring, Baking, Tech", Icon: FaLaptopCode },
    { title: "Crisis Relief", text: "COVID-19 Food Relief distribution", Icon: FaHandsHoldingCircle },
    { title: "Anti-Drug", text: '"DARE" program with NDLEA', Icon: FaShieldHalved },
    { title: "Maternal Health", text: "Gbagada General Hospital donations", Icon: FaHospital },
];

export default function SocialImpactPage() {
    return (
        <div className="bg-[var(--color-platinum)] min-h-screen">

            {/* Split Screen Header */}
            <header className="pt-24 lg:pt-32 relative">
                <div className="grid lg:grid-cols-2 min-h-[60vh]">

                    {/* Text Side */}
                    <div className="flex flex-col justify-center px-6 lg:px-20 py-20 bg-[var(--color-deep-forest)] text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-forest)] to-transparent opacity-50" />

                        <div className="relative z-10 max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-wealth-gold)]/30 text-[var(--color-wealth-gold)] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                                    Humanitarian Service
                                </span>

                                <h1 className="text-display font-serif font-bold leading-tight mb-6">
                                    Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-wealth-gold)] to-[var(--color-bright-gold)] italic font-light">Impact.</span>
                                </h1>

                                <div className="space-y-4 text-white/80 font-light text-lg">
                                    <p>
                                        The <strong>"My Friends and I" (MFI)</strong> organization is the humanitarian vehicle of the Ọmọ Olóore brand.
                                    </p>
                                    <p>
                                        With a staggering network of over <strong>34,000 members across 65 countries</strong>, we are dedicated to tangible, grassroots community intervention.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="relative hidden lg:block h-full min-h-[500px]"
                    >
                        <Image
                            src="/images/portraits/highres-5.jpeg"
                            alt="Social Impact"
                            fill
                            className="object-cover object-center"
                        />
                    </motion.div>
                </div>
            </header>

            {/* Impact Grid */}
            <section className="py-24 lg:py-32">
                <div className="container-premium">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <h2 className="text-4xl lg:text-5xl font-serif text-[var(--color-deep-forest)] mb-6">Core Initiatives</h2>
                        <div className="w-16 h-[1px] bg-[var(--color-wealth-gold)] mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {impacts.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-platinum)] rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700 opacity-50" />

                                <item.Icon className="w-10 h-10 mb-6 text-[var(--color-wealth-gold)] drop-shadow-sm" />
                                <h3 className="text-2xl font-bold font-serif text-[var(--color-deep-forest)] mb-3">{item.title}</h3>
                                <p className="text-[var(--color-charcoal)] font-light leading-relaxed">{item.text}</p>
                            </motion.div>
                        ))}

                        {/* Call to action card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-gradient-to-br from-[var(--color-deep-forest)] to-[#003d24] rounded-3xl p-8 lg:p-10 shadow-xl text-white flex flex-col justify-center items-center text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgMEw4IDhaTTAgOEw4IDBaIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-50" />
                            <h3 className="text-2xl font-bold font-serif text-[var(--color-wealth-gold)] mb-4 relative z-10">Join the Movement</h3>
                            <p className="text-sm text-white/80 font-light mb-6 relative z-10">Become part of the 34,000+ strong network making realistic changes globally.</p>
                            <a href="#" className="inline-block px-6 py-2 rounded-full border border-[var(--color-wealth-gold)] text-[var(--color-wealth-gold)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-wealth-gold)] hover:text-[var(--color-deep-forest)] transition-colors relative z-10">
                                Get Involved
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
