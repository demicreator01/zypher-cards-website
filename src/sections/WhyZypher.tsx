import { Section } from "@/components/ui/section";
import { ShieldCheck, Globe2, Lock } from "lucide-react";

const features = [
    {
        title: "No KYC. No Limits.",
        description: "Use crypto like cash – without identity checks or background verification.",
        icon: ShieldCheck,
    },
    {
        title: "Global Access",
        description: "Available in 160+ countries, accepted at 150M+ merchants and ATMs worldwide.",
        icon: Globe2,
    },
    {
        title: "Privacy-First",
        description: "Total privacy, encrypted transactions, absolute control over your crypto.",
        icon: Lock,
    },
];

export function WhyZypher() {
    return (
        <Section className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why ZYPHER.CARDS?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    We've reinvented the crypto card experience to prioritize what matters most: your privacy and freedom.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
                    >
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                            <feature.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
