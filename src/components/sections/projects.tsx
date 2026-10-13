"use client";

import { useState, useEffect } from "react";
import { LayoutGrid } from "lucide-react";
import Link from "next/link";
import type { IProjectData } from "@/app/data";
import { useRouter } from "next/navigation";
import { ProjectCard } from "@/components/sections/project-card";

export function Projects({ data }: { data: Record<string, IProjectData> }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = Object.entries(data);
    const router = useRouter();

    const projectGroups = [];
    for (let i = 0; i < projects.length; i += 6) {
        projectGroups.push(projects.slice(i, i + 6));
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
                            <div className="gap-x-8 gap-y-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                {group.map(([key, value]) => (
                                    <ProjectCard
                                        key={key}
                                        title={key}
                                        project={value}
                                        onClick={() => handleProjectClick(value)}
                                    />
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
