"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { IProjectData } from "@/app/data";

function Highlight({ text, query }: { text: string; query?: string }) {
    const q = query?.trim();
    if (!q) return <>{text}</>;
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === q.toLowerCase() ? (
                    <mark key={i} className="bg-transparent text-foreground font-semibold">
                        {part}
                    </mark>
                ) : (
                    part
                )
            )}
        </>
    );
}

export function ProjectCard({
    title,
    project,
    onClick,
    highlight,
}: {
    title: string;
    project: IProjectData;
    onClick: () => void;
    highlight?: string;
}) {
    const q = highlight?.trim().toLowerCase();
    const matchedTags = q ? project.TECH_STACK.filter((t) => t.toLowerCase().includes(q)) : [];

    return (
        <div onClick={onClick} className="group cursor-target cursor-pointer">
            <div className="relative bg-muted/20 shadow-2xl shadow-black/5 border border-muted rounded-xl w-full aspect-video overflow-hidden">
                {project.IMAGE ? (
                    typeof project.IMAGE === "string" && (project.IMAGE.endsWith(".mp4") || project.IMAGE.endsWith(".webm")) ? (
                        <video
                            src={project.IMAGE}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <Image src={project.IMAGE as any} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    )
                ) : (
                    <div className="flex justify-center items-center h-full text-muted-foreground text-xs">[Preview]</div>
                )}
            </div>

            <div className="flex flex-col gap-2 mt-4">
                <p className="font-medium text-primary/90 text-lg leading-tight">
                    <Highlight text={title} query={highlight} />
                </p>

                <div className="flex flex-wrap items-center gap-3 text-sm">
                    {project.SLUG ? (
                        <Link
                            className="flex items-center gap-1 font-medium hover:text-primary transition-colors"
                            href={`/projects/${project.SLUG}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            more info <ArrowUpRight size={14} />
                        </Link>
                    ) : project.MORE_INFO && (
                        <a
                            className="flex items-center gap-1 font-medium hover:text-primary transition-colors"
                            href={project.MORE_INFO}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            more info <ArrowUpRight size={14} />
                        </a>
                    )}
                    {project.GITHUB && (
                        <a
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                            href={project.GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            github <ArrowUpRight size={14} />
                        </a>
                    )}
                    {project.PAPER && (
                        <a
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                            href={project.PAPER}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            publication <ArrowUpRight size={14} />
                        </a>
                    )}
                    {project.YOUTUBE && (
                        <a
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                            href={project.YOUTUBE}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            youtube <ArrowUpRight size={14} />
                        </a>
                    )}
                    {project.LIVE_PREVIEW && (
                        <a
                            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                            href={project.LIVE_PREVIEW}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            live preview <ArrowUpRight size={14} />
                        </a>
                    )}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    <Highlight text={project.SUMMARY} query={highlight} />
                </p>

                {matchedTags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {matchedTags.map((tag) => (
                            <span
                                key={tag}
                                className="border border-muted rounded-md px-1.5 py-0.5 text-xs text-muted-foreground"
                            >
                                <Highlight text={tag} query={highlight} />
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
