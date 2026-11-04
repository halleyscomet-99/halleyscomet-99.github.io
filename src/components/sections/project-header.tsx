"use client";

import { BookOpenText, ChevronLeft, Github, Globe, Youtube } from "lucide-react";
import { MovingElement } from "@/components/navbar";
import Link from "next/link";
import type { IProjectData } from "@/app/data";

interface ProjectHeaderProps {
    projectName: string;
    project: IProjectData;
}

export function ProjectHeader({ projectName, project }: ProjectHeaderProps) {
    const handleExternalLink = (url: string) => {
        window.open(url, "_blank");
    };

    const techString = project.TECH_STACK.join(" | ");

    return (
        <div className="w-full">
            <div className="space-y-2">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-base font-normal group"
                >
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Projects
                </Link>

                <div>
                    <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
                        {projectName}
                    </h1>
                    <div className="mt-2 font-normal text-primary/80 text-base">
                        <p>{techString}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                    {project.GITHUB && (
                        <MovingElement
                            className="inline-flex h-auto w-auto items-center justify-center bg-transparent p-0 text-muted-foreground shadow-none hover:bg-transparent hover:text-primary transition-colors"
                            change={() => handleExternalLink(project.GITHUB!)}
                            toChange={true}
                            ariaLabel="GitHub Repo"
                        >
                            <Github size={20} />
                        </MovingElement>
                    )}
                    {project.PAPER && (
                        <MovingElement
                            className="inline-flex h-auto w-auto items-center justify-center bg-transparent p-0 text-muted-foreground shadow-none hover:bg-transparent hover:text-primary transition-colors"
                            change={() => handleExternalLink(project.PAPER!)}
                            toChange={true}
                            ariaLabel="Publication"
                        >
                            <BookOpenText size={20} />
                        </MovingElement>
                    )}
                    {project.LIVE_PREVIEW && (
                        <MovingElement
                            className="inline-flex h-auto w-auto items-center justify-center bg-transparent p-0 text-muted-foreground shadow-none hover:bg-transparent hover:text-primary transition-colors"
                            change={() => handleExternalLink(project.LIVE_PREVIEW!)}
                            toChange={true}
                            ariaLabel="Website"
                        >
                            <Globe size={20} />
                        </MovingElement>
                    )}
                    <div className="flex gap-2">
                        {project.YOUTUBE && (
                            <MovingElement
                                className="inline-flex h-auto w-auto items-center justify-center bg-transparent p-0 text-muted-foreground shadow-none hover:bg-transparent hover:text-primary transition-colors"
                                change={() => handleExternalLink(project.YOUTUBE!)}
                                toChange={true}
                                ariaLabel="YouTube"
                            >
                                <Youtube size={20} />
                            </MovingElement>
                        )}
                    </div>
                </div>
            </div>

            <h2 className="mt-6 font-medium text-primary/90 text-base">
                overview.
            </h2>
        </div>
    );
}