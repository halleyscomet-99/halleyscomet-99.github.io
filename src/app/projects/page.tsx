"use client";

import { Github, Linkedin, Mail, Search, X, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

import type { IProjectData } from "@/app/data";
import { DATA } from "@/app/data";
import { MovingElement } from "@/components/navbar";
import { Contact, Footer, Navbar } from "@/components/sections";
import { ProjectCard } from "@/components/sections/project-card";
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
            const matchDescription = project.DESCRIPTION.some(d =>
                d.toLowerCase().includes(query)
            );
            const matchTech = project.TECH_STACK.some(t =>
                t.toLowerCase().includes(query)
            );
            return matchTitle || matchDescription || matchTech;
        });
    }, [searchQuery, projectsData]);

    const openLink = (url: string) => {
        window.open(url, "_blank");
    };

    const handleProjectClick = (value: IProjectData) => {
        if (value.SLUG) {
            router.push(`/projects/${value.SLUG}`);
        } else if (value.MORE_INFO) {
            window.open(value.MORE_INFO, "_blank");
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-12 px-5 py-8 sm:px-8 lg:px-16 w-full">

                {/* Search and Header Section */}
                <section className="w-full space-y-4 pb-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-2">
                            <p className="font-normal text-muted-foreground text-base">
                                hello world 👋, these are
                            </p>
                            <div>
                                <h1 className="font-bold text-primary/90 text-4xl tracking-tight">
                                    My Projects.
                                </h1>
                                <div className="mt-1 text-primary/90 text-sm font-normal">
                                    Robotics | Mechatronics | Music | Creative Technology
                                </div>
                            </div>
                            <div className="flex items-center gap-2 pt-2 text-sm">
                                <MovingElement
                                    className="inline-flex justify-center items-center bg-primary betterhover:hover:bg-primary/90 shadow-sm px-4 py-2 rounded-md h-9 font-medium text-primary-foreground text-sm transition-colors whitespace-nowrap"
                                    change={() => openLink(DATA.HEADER.RESUME)}
                                    toChange={false}
                                    ariaLabel="Resume"
                                >
                                    Resume
                                </MovingElement>
                                <MovingElement change={() => openLink(DATA.HEADER.EMAIL)} ariaLabel="Email">
                                    <Mail size={20} />
                                </MovingElement>
                                <MovingElement change={() => openLink(DATA.HEADER.GITHUB)} ariaLabel="Github">
                                    <Github size={20} />
                                </MovingElement>
                                <MovingElement change={() => openLink(DATA.HEADER.LINKEDIN)} ariaLabel="Linkedin">
                                    <Linkedin size={20} />
                                </MovingElement>
                                <MovingElement change={() => openLink(DATA.HEADER.YOUTUBE)} ariaLabel="Youtube">
                                    <Youtube size={20} />
                                </MovingElement>
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

                {/* Projects Grid Section */}
                <div className="w-full mb-12">
                    {filteredProjects.length > 0 ? (
                        <div className="gap-x-8 gap-y-12 grid grid-cols-[repeat(auto-fill,minmax(min(100%,max(300px,calc((100%_-_4rem)/3))),1fr))]">
                            {filteredProjects.map(([key, value]) => (
                                <ProjectCard
                                    key={key}
                                    title={key}
                                    project={value}
                                    onClick={() => handleProjectClick(value)}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="w-full py-20 text-center space-y-3">
                            <p className="text-muted-foreground text-lg">
                                No projects found matching &quot;{searchQuery}&quot;
                            </p>
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
