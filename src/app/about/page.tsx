"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

import { DATA } from "@/app/data";
import { 
    Contact, 
    Footer, 
    Navbar, 
    Skills,
} from "@/components/sections";
import { CursorManager } from "@/components/ui/cursor-manager";
import { About } from "@/components/sections/about";

export default function Page() {
    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center gap-12 p-8 w-full">
                
                <section className="w-full">
                    <div className="space-y-2">
                        <p className="font-normal text-muted-foreground text-base">
                            hi there👋, I&apos;m
                        </p>

                        <div>
                            <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
                                {DATA.HEADER.NAME}
                            </h1>
                            <div className="flex flex-col gap-0 font-normal text-primary/90 text-base">
                                <p>
                                    {DATA.HEADER.AGE}, {DATA.HEADER.PRONOUN}
                                </p>
                                <p>{DATA.HEADER.HEADLINE}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="w-full">
                    <About data={DATA.EXPERIENCE} />
                </div>

                <div className="w-full">
                    <Skills data={DATA.SKILLS} />
                </div>

                <Contact data={DATA.HEADER} />
                <Footer />
            </main>

            <CursorManager />
        </>
    );
}