"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { IProjectData } from "@/app/data";
import { useRouter } from "next/navigation";

export function Projects({ data }: { data: Record<string, IProjectData> }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = Object.entries(data);
    const router = useRouter();
    
    const projectGroups = [];
    for (let i = 0; i < projects.length; i += 3) {
        projectGroups.push(projects.slice(i, i + 3));
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projectGroups.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [currentIndex, projectGroups.length]);

    const handleManualChange = (index: number) => {
        setCurrentIndex(index);
    };

    const handleProjectClick = (value: IProjectData) => {
        if (value.SLUG) {
            router.push(`/projects/${value.SLUG}`);
        } else if (value.MORE_INFO) {
            window.open(value.MORE_INFO, "_blank");
        }
    };

    return (
        <div id="projects" className="w-full">
            <h2 className="font-medium text-primary/90 text-base mb-8">projects.</h2>

            <div className="relative w-full overflow-hidden">
                {projectGroups.map((group, groupIndex) => {
                    const isActive = groupIndex === currentIndex;
                    return (
                        <div
                            key={groupIndex}
                            className={`w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                                isActive 
                                    ? "opacity-100 scale-100 blur-0 relative z-10 visible" 
                                    : "opacity-0 scale-[0.96] blur-sm absolute inset-0 z-0 invisible"
                            }`}
                        >
                            <div className="flex flex-col gap-16 lg:gap-20">
                                {group.map(([key, value]) => (
                                    <div 
                                        key={key} 
                                        onClick={() => handleProjectClick(value)}
                                        className="cursor-target group"
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start transition-all duration-300 hover:bg-muted/5 p-2 -m-2 rounded-2xl">
                                            
                                            <div className="flex flex-col py-1 h-full min-h-[200px]">
                                                <div className="mb-4">
                                                    <p className="text-primary/90 text-xl font-medium leading-none">
                                                        {key}
                                                    </p>
                                                    <div className="flex items-center gap-3 mt-3 text-sm">
                                                        {value.SLUG ? (
                                                            <Link 
                                                                className="flex items-center gap-1 hover:text-primary transition-colors font-medium" 
                                                                href={`/projects/${value.SLUG}`}
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                more info <ArrowUpRight size={14} />
                                                            </Link>
                                                        ) : value.MORE_INFO && (
                                                            <a 
                                                                className="flex items-center gap-1 hover:text-primary transition-colors font-medium" 
                                                                href={value.MORE_INFO} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                more info <ArrowUpRight size={14} />
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
                                                        {value.LIVE_PREVIEW && (
                                                            <a
                                                                className="flex items-center gap-1 hover:text-primary transition-colors text-muted-foreground"
                                                                href={value.LIVE_PREVIEW}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                live preview <ArrowUpRight size={14} />
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>

                                                <p className="text-muted-foreground text-sm text-justify leading-relaxed line-clamp-3 xl:line-clamp-5">
                                                    {value.DESCRIPTION.join(" ")}
                                                </p>

                                                <div className="flex-grow min-h-[1.5rem]" />
                                                <ul className="flex flex-wrap items-center gap-2 mt-auto">
                                                    {value.TECH_STACK.map((tech, idx) => (
                                                        <li key={idx} className="bg-muted px-2 py-1 rounded text-xs whitespace-nowrap">
                                                            {tech}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="relative rounded-xl overflow-hidden border border-muted bg-muted/20 w-full aspect-video shadow-2xl shadow-black/5 h-fit self-start">
                                                {value.IMAGE ? (
                                                    typeof value.IMAGE === "string" && (value.IMAGE.endsWith(".mp4") || value.IMAGE.endsWith(".webm")) ? (
                                                        <video 
                                                            src={value.IMAGE} 
                                                            autoPlay 
                                                            loop 
                                                            muted 
                                                            playsInline 
                                                            className="w-full h-full object-cover" 
                                                        />
                                                    ) : (
                                                        <Image src={value.IMAGE as any} alt={key} fill className="object-cover" />
                                                    )
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-muted-foreground text-xs">[Preview]</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex flex-col items-center mt-12 gap-8">
                <div className="flex gap-4">
                    {projectGroups.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => handleManualChange(i)}
                            className={`h-0.5 transition-all duration-1000 cursor-pointer ${
                                i === currentIndex ? "bg-primary w-16" : "bg-muted w-8"
                            }`}
                        />
                    ))}
                </div>

                <Link
                    href={"/projects"}
                    className="inline-flex justify-center items-center hover:bg-primary/10 px-6 border border-primary rounded-md h-9 font-medium text-primary text-sm transition-all cursor-target"
                >
                    <LayoutGrid className="mr-2 w-4 h-4" />
                    View all projects
                </Link>
            </div>
        </div>
    );
}