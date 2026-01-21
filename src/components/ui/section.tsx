import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("py-18 w-full relative overflow-hidden", className)}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                {children}
            </div>
        </section>
    );
};
