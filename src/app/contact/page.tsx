'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <div className="bg-[var(--color-platinum)] min-h-screen pt-32 pb-24">

            <div className="container-premium">

                {/* Header */}
                <div className="max-w-3xl mb-16 lg:mb-24">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-apc-green)]/20 text-[var(--color-apc-green)] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                        Connect
                    </span>
                    <h1 className="text-display text-[var(--color-deep-forest)] font-bold mb-6">
                        Let's Work <span className="italic text-[var(--color-wealth-gold)] font-light font-serif">Together.</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Contact Info Bento */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <div className="bg-[var(--color-deep-forest)] text-white rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-forest)] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

                            <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-wealth-gold)] mb-8 relative z-10">Direct Contact</h3>

                            <div className="space-y-8 relative z-10">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[#8fb9a8] mb-1">WhatsApp / Phone</p>
                                    <p className="text-xl font-light">0705 589 8989</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[#8fb9a8] mb-1">Email</p>
                                    <p className="text-xl font-light truncate">ayeolaademola80@gmail.com</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-[#8fb9a8] mb-1">Social Networks</p>
                                    <div className="flex gap-4 mt-2">
                                        <a href="https://web.facebook.com/asiwaju.Omoowo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-deep-forest)] transition-colors">FB</a>
                                        <a href="https://x.com/Ayeolaha" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-deep-forest)] transition-colors">X</a>
                                        <a href="https://www.tiktok.com/@asiwaju_omoowo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-deep-forest)] transition-colors">TT</a>
                                        <a href="https://www.instagram.com/asiwaju_omoowo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[var(--color-deep-forest)] transition-colors">IG</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-black/5 flex-1 flex flex-col justify-center text-center group hover:bg-[var(--color-wealth-gold)] transition-colors duration-500 cursor-pointer">
                            <p className="font-serif text-3xl font-bold text-[var(--color-deep-forest)] group-hover:text-white transition-colors">MFI Community</p>
                            <p className="text-sm text-gray-500 mt-2 group-hover:text-white/80 transition-colors">Join the Facebook Group →</p>
                        </div>
                    </motion.div>

                    {/* Premium Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl border border-black/5"
                    >
                        <form action="https://formsubmit.co/ayeolaademola80@gmail.com" method="POST" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-charcoal)]">Full Name</label>
                                    <input type="text" name="name" required className="w-full bg-[var(--color-platinum)] border border-transparent focus:border-[var(--color-wealth-gold)] focus:bg-white rounded-xl px-4 py-4 text-sm transition-all outline-none" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-charcoal)]">Email Address</label>
                                    <input type="email" name="email" required className="w-full bg-[var(--color-platinum)] border border-transparent focus:border-[var(--color-wealth-gold)] focus:bg-white rounded-xl px-4 py-4 text-sm transition-all outline-none" placeholder="Your email" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-charcoal)]">Subject</label>
                                <input type="text" name="_subject" required className="w-full bg-[var(--color-platinum)] border border-transparent focus:border-[var(--color-wealth-gold)] focus:bg-white rounded-xl px-4 py-4 text-sm transition-all outline-none" placeholder="What is this regarding?" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-charcoal)]">Message</label>
                                <textarea name="message" rows={5} required className="w-full bg-[var(--color-platinum)] border border-transparent focus:border-[var(--color-wealth-gold)] focus:bg-white rounded-2xl px-4 py-4 text-sm transition-all outline-none resize-none" placeholder="Your message here..." />
                            </div>

                            {/* Hidden fields for form routing */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_next" value="https://omooloore.vercel.app/contact/success" />

                            <button type="submit" className="bg-[var(--color-deep-forest)] text-[var(--color-wealth-gold)] w-full py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-black transition-colors">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
