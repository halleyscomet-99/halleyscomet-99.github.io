"use client";

import { ArrowUpRight, Search, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useMemo } from "react";

import type { ILogData } from "@/app/data";
import { DATA } from "@/app/data";
import { Contact, Footer, Navbar } from "@/components/sections";
import { CursorManager } from "@/components/ui/cursor-manager";

export default function Page() {
    const logsData: Record<string, ILogData> = DATA.LOGS;
    const [searchQuery, setSearchQuery] = useState("");

    const filteredLogs = useMemo(() => {
        const entries = Object.entries(logsData);
        if (!searchQuery.trim()) return entries;

        const query = searchQuery.toLowerCase();
        return entries.filter(([title, log]) => {
            const matchTitle = title.toLowerCase().includes(query);
            const matchDescription = log.DESCRIPTION.toLowerCase().includes(query);
            return matchTitle || matchDescription;
        });
    }, [searchQuery, logsData]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-12 p-8 w-full">
                
                <section className="w-full space-y-4 pb-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-2">
                            <p className="font-normal text-muted-foreground text-base">
                                welcome 👋, feel free to browse my
                            </p>
                            <div>
                                <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
                                    Technical Logs.
                                </h1>
                                <div className="mt-1 text-primary/90 text-sm font-normal">
                                    Learning Notes | Literature Reviews | Discoveries
                                </div>
                            </div>
                        </div>

                        <div className="relative group w-full">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search relevant tags or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-muted/30 border border-muted hover:border-muted-foreground/30 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-hidden rounded-3xl py-3 pl-12 pr-12 text-base transition-all shadow-sm"
                            />
                            {searchQuery && (
                                <button 
                                    onClick={() => setSearchQuery("")}
                                    className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                <div className="space-y-16 mb-12 w-full min-h-[400px]">
                    {filteredLogs.length > 0 ? (
                        filteredLogs.map(([key, value]) => (
                            <div key={key} className="cursor-target group">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pl-0 transition-all duration-300">
                                    
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-primary/90 text-xl font-medium">
                                                {key}
                                            </p>

                                            <p className="flex items-center gap-3 mt-1 text-sm">
                                                <a
                                                    className="flex items-center gap-1 hover:text-primary transition-colors"
                                                    href={value.LINK}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Read more{" "}
                                                    <ArrowUpRight size={16} />
                                                </a>
                                                <span className="text-muted-foreground text-xs">
                                                    {value.DATE} • {value.TIME} min read
                                                </span>
                                            </p>
                                        </div>

                                        <p className="text-muted-foreground text-sm text-justify leading-snug line-clamp-4">
                                            {value.DESCRIPTION}
                                        </p>
                                    </div>

                                    <div className="relative rounded-lg overflow-hidden border border-muted bg-muted/20 w-full aspect-video">
                                        {value.IMAGE ? (
                                            <Image
                                                src={value.IMAGE}
                                                alt={key}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-muted-foreground text-xs text-center p-4">
                                                [Log Preview]
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="w-full py-20 text-center space-y-3">
                            <p className="text-muted-foreground text-lg">No logs found matching &quot;{searchQuery}&quot;</p>
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="text-primary underline underline-offset-4 text-sm font-medium"
                            >
                                Clear all search results
                            </button>
                        </div>
                    )}
                </div>

                <Contact data={DATA.HEADER} />
                <Footer />
            </div>

            <CursorManager />
        </>
    );
}