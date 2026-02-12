"use client";

import { ArrowUpRight, Search, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useMemo } from "react";

import type { IProjectData } from "@/app/data";
import { DATA } from "@/app/data";
import { Contact, Footer, Navbar } from "@/components/sections";
import { CursorManager } from "@/components/ui/cursor-manager";

export default function Page() {
    const projectsData: Record<string, IProjectData> = DATA.PROJECTS;
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        const entries = Object.entries(projectsData);
        if (!searchQuery.trim()) return entries;

        const query = searchQuery.toLowerCase();
        return entries.filter(([title, project]) => {
            const matchTitle = title.toLowerCase().includes(query);
            const matchDescription = project.DESCRIPTION.some(d => d.toLowerCase().includes(query));
            const matchTech = project.TECH_STACK.some(t => t.toLowerCase().includes(query));
            
            return matchTitle || matchDescription || matchTech;
        });
    }, [searchQuery, projectsData]);

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-12 p-8 w-full">
                <section className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 pb-4">
                    <div className="space-y-2">
                        <p className="font-normal text-muted-foreground text-base">
                            hi there 👋, these are
                        </p>
                        <div>
                            <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
                                My Projects.
                            </h1>
                            <div className="mt-1 text-primary/90 text-sm text-base font-normal ">
                                Robotics | Game Development | HCI | Music
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full md:w-130 group">
                        <div className="relative w-full max-w-3xl group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search relevant tags, tools, or project titles..."
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

                <div className="space-y-20 mb-12 w-full min-h-[400px] pt-2">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(([key, value], index) => (
                            <React.Fragment key={key}>
                                <div className="items-start gap-12 grid grid-cols-1 lg:grid-cols-2 cursor-target animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    
                                    <div className="space-y-6 size-full transition-all duration-300 pl-0 lg:order-1">
                                        <div>
                                            <h2 className="mb-1 font-semibold text-2xl tracking-tight">
                                                {key}
                                            </h2>

                                            <p className="flex items-center gap-4 text-sm font-medium">
                                                {value.LIVE_PREVIEW && (
                                                    <a
                                                        className="flex items-center gap-1 hover:text-primary transition-colors"
                                                        href={value.LIVE_PREVIEW}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        live preview <ArrowUpRight size={16} />
                                                    </a>
                                                )}
                                                {value.GITHUB && (
                                                    <a
                                                        className="flex items-center gap-1 hover:text-primary transition-colors"
                                                        href={value.GITHUB}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        github <ArrowUpRight size={16} />
                                                    </a>
                                                )}
                                            </p>
                                        </div>
                                        
                                        <ul className="space-y-2 mt-1 pl-4 text-muted-foreground text-sm text-justify list-disc leading-relaxed">
                                            {value.DESCRIPTION.map((desc, i) => (
                                                <li key={i}><span>{desc}</span></li>
                                            ))}
                                        </ul>

                                        <ul className="flex flex-wrap items-center gap-2 mt-2 pl-3">
                                            {value.TECH_STACK.map((tech, index) => (
                                                <li
                                                    key={index}
                                                    className="bg-muted px-2 py-1 rounded text-xs"
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="lg:order-2">
                                        <div className="relative rounded-xl overflow-hidden shadow-sm group bg-muted">
                                            <Image
                                                src={value.IMAGE || "/placeholder.svg"}
                                                alt={key}
                                                width={600}
                                                height={400}
                                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {index < filteredProjects.length - 1 && (
                                    <div className="w-full" />
                                )}
                            </React.Fragment>
                        ))
                    ) : (

                        <div className="w-full py-20 text-center space-y-3">
                            <p className="text-muted-foreground text-lg">No projects found matching &quot;{searchQuery}&quot;</p>
                            <button 
                                onClick={() => setSearchQuery("")}
                                className="text-primary underline underline-offset-4 text-sm font-medium"
                            >
                                Clear all search results
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full space-y-4 p-6">
                <Contact data={DATA.HEADER} />
                <Footer />
            </div>

            <CursorManager />
        </>
    );
}