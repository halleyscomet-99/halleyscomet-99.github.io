"use client";

import { ArrowUpRight, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";

import type { IProjectData } from "@/app/data";
import { DATA } from "@/app/data";
import { Contact, Footer, Navbar } from "@/components/sections";
import { CursorManager } from "@/components/ui/cursor-manager";

export default function Page() {
    const projectsData: Record<string, IProjectData> = DATA.PROJECTS;
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

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

    // Handle full card click
    const handleProjectClick = (slug?: string, moreInfo?: string) => {
        if (slug) {
            router.push(`/projects/${slug}`);
        } else if (moreInfo) {
            window.open(moreInfo, "_blank");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-12 p-8 w-full">
                
                {/* Search and Header Section */}
                <section className="w-full space-y-4 pb-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-2">
                            <p className="font-normal text-muted-foreground text-base">hello world 👋, these are my</p>
                            <div>
                                <h1 className="font-bold text-primary/90 text-4xl tracking-tight">My Projects.</h1>
                                <div className="mt-1 text-primary/90 text-sm font-normal">Robotics | Game Development | HCI | Music</div>
                            </div>
                        </div>

                        <div className="relative group w-full">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search relevant tags or project titles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-muted/30 border border-muted hover:border-muted-foreground/30 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-hidden rounded-3xl py-3 pl-12 pr-12 text-base transition-all shadow-sm"
                            />
                            {searchQuery && (
                                <button onClick={() => setSearchQuery("")} className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-primary transition-colors">
                                    <X size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                </section>

                {/* Projects List Section */}
                <div className="space-y-24 mb-12 w-full">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map(([key, value]) => (
                            <div 
                                key={key} 
                                className="cursor-target group"
                                onClick={() => handleProjectClick(value.SLUG, value.MORE_INFO)}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start transition-all duration-300">
                                    
                                    {/* Left Content Column */}
                                    <div className="flex flex-col py-1 overflow-hidden h-full">
                                        <div className="mb-4">
                                            <p className="text-primary/90 text-xl font-medium leading-none">{key}</p>
                                            <div className="flex items-center gap-3 mt-3 text-sm">
                                                {value.SLUG ? (
                                                    <Link 
                                                        className="flex items-center gap-1 hover:text-primary transition-colors font-medium text-primary" 
                                                        href={`/projects/${value.SLUG}`}
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        more info <ArrowUpRight size={14} />
                                                    </Link>
                                                ) : value.MORE_INFO && (
                                                    <a 
                                                        className="flex items-center gap-1 hover:text-primary transition-colors font-medium text-primary" 
                                                        href={value.MORE_INFO} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        more info <ArrowUpRight size={14} />
                                                    </a>
                                                )}
                                                {value.GITHUB && (
                                                    <a 
                                                        className="flex items-center gap-1 hover:text-primary transition-colors text-muted-foreground" 
                                                        href={value.GITHUB} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        github <ArrowUpRight size={14} />
                                                    </a>
                                                )}
                                                {value.PAPER && (
                                                    <a 
                                                        className="flex items-center gap-1 hover:text-primary transition-colors text-muted-foreground" 
                                                        href={value.PAPER} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        publication <ArrowUpRight size={14} />
                                                    </a>
                                                )}
                                                {value.YOUTUBE && (
                                                    <a 
                                                        className="flex items-center gap-1 hover:text-primary transition-colors text-muted-foreground" 
                                                        href={value.YOUTUBE} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        youtube <ArrowUpRight size={14} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Adaptive Paragraph */}
                                        <p className="text-muted-foreground text-sm text-justify leading-relaxed line-clamp-3 xl:line-clamp-5">
                                            {value.DESCRIPTION.join(" ")}
                                        </p>

                                        {/* Spacer to push tags to bottom */}
                                        <div className="flex-grow min-h-[1.5rem]" />
                                        <ul className="flex flex-wrap items-center gap-2 mt-auto">
                                            {value.TECH_STACK.map((tech, idx) => (
                                                <li key={idx} className="bg-muted px-2 py-1 rounded text-xs whitespace-nowrap">
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right Media Column */}
                                    <div className="relative rounded-xl overflow-hidden border border-muted bg-muted/20 w-full aspect-video shadow-2xl shadow-black/5 h-fit self-start">
                                        <ImageContent value={value} projectName={key} />
                                    </div>
                                </div>
                            </div>
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

                <Contact data={DATA.HEADER} />
                <Footer />
            </div>

            <CursorManager />
        </>
    );
}

function ImageContent({ value, projectName }: { value: IProjectData; projectName: string }) {
    if (!value.IMAGE) return <div className="flex items-center justify-center h-full text-muted-foreground text-xs text-center p-4">[Project Preview]</div>;
    
    if (typeof value.IMAGE === "string" && (value.IMAGE.endsWith(".mp4") || value.IMAGE.endsWith(".webm"))) {
        return (
            <video 
                src={value.IMAGE} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            />
        );
    }
    
    return (
        <Image 
            src={value.IMAGE as any} 
            alt={projectName} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
        />
    );
}