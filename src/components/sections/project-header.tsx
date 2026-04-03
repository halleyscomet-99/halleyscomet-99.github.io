"use client";

import { Youtube, ChevronLeft } from "lucide-react";
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

                {/* no pt-4 — space-y-2 handles the gap, matching main Header */}
                <div className="flex items-center gap-2 text-sm">
                    {project.GITHUB && (
                        <MovingElement
                            className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow-sm px-4 py-2 rounded-md h-9 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors"
                            change={() => handleExternalLink(project.GITHUB!)}
                            toChange={false}
                            ariaLabel="Github"
                        >
                            GitHub Repo
                        </MovingElement>
                    )}
                    {project.PAPER && (
                        <MovingElement
                            className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 disabled:opacity-50 shadow-sm px-4 py-2 rounded-md h-9 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors"
                            change={() => handleExternalLink(project.PAPER!)}
                            toChange={false}
                            ariaLabel="Publication"
                        >
                            Publication
                        </MovingElement>
                    )}
                    {project.YOUTUBE && (
                        <MovingElement
                            change={() => handleExternalLink(project.YOUTUBE!)}
                            ariaLabel="Youtube"
                        >
                            <Youtube size={20} />
                        </MovingElement>
                    )}
                </div>
            </div>

            {/* mirrors "about me." in Header — mt-6 outside space-y-2 */}
            <h2 className="mt-6 font-medium text-primary/90 text-base">
                overview.
            </h2>
        </div>
    );
}