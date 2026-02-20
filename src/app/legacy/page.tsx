'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const legacyPillars = [
    {
        title: "A Commitment to Power & Infrastructure",
        content: (
            <>
                <p>The administration took bold and decisive actions to restore and enhance the power infrastructure across Lekki LCDA, bringing light to communities that had been plunged into darkness for over 20 months. Electricity supply was restored from Tiye down to Folu.</p>
                <p>The administration purchased and installed transformers in key towns: Folu received a 650 KVA transformer, while Shiriwon benefited from a 500 KVA transformer. Recognizing the unique challenges on Refugee Island, giant generators were procured to serve Igbodola and Ide towns.</p>
                <p>Beyond power, he oversaw the stabilization of roads in Tiye, Imobido, Ilege, Idasho, and Magbon Segun Oke. He spearheaded an 11-kilometer road connecting Ise to Igbogun, constructed eleven culverts across key locations, and built fourteen bus shelters to improve public transportation.</p>
                <p>Access to clean water was also prioritized. Over 200 surface wells were dug, and six modern boreholes were installed across various communities, significantly enhancing the health and well-being of residents.</p>
            </>
        )
    },
    {
        title: "Economic Empowerment & Industry",
        content: (
            <>
                <p>Understanding the importance of economic empowerment, Otunba Ayeola's administration initiated a Poverty Alleviation Program. Women, as key drivers of local economies, were offered loans at zero interest to support and expand their businesses.</p>
                <p>Further empowering the fishing community, the administration facilitated the purchase and distribution of outboard engines, transforming fishing into a more profitable business. Grinding machines were also distributed for economic empowerment.</p>
                <p>Under his leadership, over 562 men and women were empowered. Tools, machines, and cash were distributed to over 400 women across the constituency's eleven wards, enabling families to break free from the cycle of hardship.</p>
            </>
        )
    },
    {
        title: "Healthcare Wellness & Facilities",
        content: (
            <>
                <p>Otunba Ayeola's administration prioritized healthcare as the foundation for a strong community. His government undertook the renovation of facilities including Idasho Public Health Centre, Magbon Segun PHC, and Idotun Dispensary.</p>
                <p>The total upgrade of public health centers in Folu, Igbogun, Igbolomi, Obada, and Okun-Ise was a reflection of his commitment to quality services for all residents.</p>
                <p>In 2014, he partnered with the Eye Foundation for a Free Health Mission Program. Over 493 patients benefited from free eye tests, cataract surgeries, and eyeglasses, reaffirming his deep commitment to ensuring no one was left behind in accessing critical healthcare.</p>
            </>
        )
    },
    {
        title: "Education & Youth Development",
        content: (
            <>
                <p>Recognizing education as the bedrock of advancement, Otunba Ayeola made access to higher education a priority. Annually, hundreds of students across Ibeju Lekki received free GCE and JAMB forms, removing financial barriers to academic pursuits.</p>
                <p>His administration built classrooms, including a three-classroom building at RCM Primary School in Awoyaya and a six-classroom building at Community Junior High School in Lekki.</p>
                <p>Believing in the power of youth, he launched an empowerment program that equipped 768 young men and women with skills in trades such as vulcanizing, tailoring, and hairdressing. They underwent fully sponsored 6-12 months of training and were provided with tools to start businesses.</p>
                <p>In 2013, he organized the first Otunba Abayomi Ayeola Grassroots Football Competition, engaging over 396 youths to foster unity. He also successfully lobbied for an ultra-modern recreational center in Epe.</p>
            </>
        )
    },
    {
        title: "Preserving Heritage & Leadership",
        content: (
            <>
                <p>Despite financial constraints, Otunba Ayeola demonstrated deep respect for traditional institutions by increasing the allowances of traditional rulers and ensuring timely payments. His administration provided financial support to preserve the rich cultural heritage of Lekki LCDA.</p>
                <p>A major milestone was the installation of the Oni Lekki of Lekki, resolving long-standing traditional disputes. His administration gazetted seven Baales, presenting each with a Mercedes Benz 190 series as their official car, while the Onise of Ise was presented with a Montero Jeep.</p>
            </>
        )
    }
];

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

                {/* Legacy Card (Main Portrait) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="glass-panel-dark rounded-[3rem] p-8 lg:p-16 relative overflow-hidden max-w-6xl mx-auto mb-24 lg:mb-32"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-wealth-gold)] opacity-50" />

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/legacy/adebe-kodun.jpg"
                                alt="Otunba Abdul Kabir Abayomi Ayeola"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 border border-white/10 rounded-3xl z-10" />
                        </div>

                        <div>
                            <h3 className="text-3xl lg:text-5xl font-serif text-[var(--color-wealth-gold)] mb-8">"Adebe Ko Kodun"</h3>

                            <div className="space-y-6 text-lg font-light text-white/80 leading-relaxed">
                                <p>
                                    As the First Executive Chairman of Lekki LCDA, his visionary leadership and unwavering dedication to public service continue to inspire. His journey is a profound testament to his commitment to the welfare of the people.
                                </p>
                                <p>
                                    Despite immense financial challenges, including the withholding of federal allocations, his leadership was characterized by unprecedented progress and the democratization of benefits. His tireless efforts cemented his reputation as a leader who truly cared, earning him the affectionate moniker <strong className="text-white italic">"ADEBE KO KODUN."</strong>
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

                {/* Editorial Sections (The Pillars of Legacy) */}
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 lg:mb-24">
                        <h2 className="text-3xl lg:text-5xl font-serif text-white mb-6">A Life Devoted to <span className="italic text-[var(--color-wealth-gold)]">Service.</span></h2>
                        <div className="w-24 h-[1px] bg-[var(--color-wealth-gold)] mx-auto opacity-50" />
                    </div>

                    <div className="space-y-24 lg:space-y-32">
                        {legacyPillars.map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start"
                            >
                                <div className="md:col-span-4 lg:col-span-5 md:sticky md:top-32">
                                    <span className="text-[var(--color-wealth-gold)] font-serif text-xl mb-4 block opacity-50">0{idx + 1}</span>
                                    <h3 className="text-2xl lg:text-4xl font-serif text-white leading-tight">{pillar.title}</h3>
                                </div>
                                <div className="md:col-span-8 lg:col-span-7 prose prose-lg prose-invert text-white/70 font-light prose-p:leading-relaxed">
                                    {pillar.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Conclusion */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center mt-32 pt-20 border-t border-white/10"
                >
                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
                        <span className="text-[var(--color-wealth-gold)] text-2xl font-serif">❦</span>
                    </div>
                    <p className="text-2xl lg:text-4xl font-serif font-light text-white leading-relaxed mb-8">
                        "The legacy of Late Otunba Abayomi Ayeola continues to serve as a beacon of hope, inspiration, and progress... His leadership stands as a testament to the power of visionary governance and unwavering commitment to the people."
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--color-wealth-gold)]">
                        — The Benefactor's Blueprint
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
