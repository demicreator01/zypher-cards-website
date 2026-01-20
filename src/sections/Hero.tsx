import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Shield, Globe, CreditCard, ArrowRight } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines";

export function Hero() {
    return (
        <BackgroundLines className="flex flex-col justify-center items-center bg-background">
            <Section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-transparent relative w-full">
                {/* Background Decor - Optional additional gradient if needed, but BackgroundLines handles most */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-accent/20 via-background/0 to-background/0 opacity-50 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-start text-left space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                            <Shield className="w-4 h-4" />
                            <span>Privacy First Finance</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Banking Without <br />
                            <span className="text-secondary-foreground/50">the Bank.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                            The world's most private, secure, and anonymous crypto card platform.
                            Spend anywhere — <span className="text-foreground font-semibold">no KYC, no ID, no tracking.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20 h-14 px-8 text-lg">
                                Get Started Instantly
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                                View Card Options
                            </Button>
                        </div>

                        <div className="pt-8 flex items-center gap-6 border-t border-border w-full">
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium text-muted-foreground">160+ Countries</span>
                            </div>
                            <div className="w-px h-8 bg-border" />
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium text-muted-foreground">150M+ Merchants</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
                    >
                        {/* Main Card Visual Wrapper */}
                        <div className="relative w-full max-w-md aspect-[1.586/1] transform transition-transform hover:scale-105 duration-500">
                            {/* Glow backing */}
                            <div className="absolute -inset-4 bg-accent/30 blur-3xl opacity-50 rounded-full" />

                            {/* Using div placeholders for now, simulating the glass cards if image not available */}
                            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between overflow-hidden group">
                                {/* Shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="flex justify-between items-start">
                                    <Shield className="w-8 h-8 text-white/80" />
                                    <span className="text-white/60 font-mono text-sm tracking-widest">DEBIT</span>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex gap-2">
                                        <div className="w-10 h-6 bg-yellow-500/80 rounded" />
                                        <div className="w-10 h-6 bg-red-500/80 rounded -ml-4 mix-blend-screen" />
                                    </div>
                                    <div className="font-mono text-white/90 text-xl tracking-widest">
                                        **** **** **** 2314
                                    </div>
                                    <div className="flex justify-between text-white/60 text-sm font-medium">
                                        <span>JOHN DOE</span>
                                        <span>12/28</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements (Badges / Small cards) */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-12 -right-8 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-2 rounded-full">
                                        <Shield className="w-4 h-4 text-green-500" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-foreground">Status</div>
                                        <div className="text-sm font-bold text-foreground">Zero KYC</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </BackgroundLines>
    );
}
