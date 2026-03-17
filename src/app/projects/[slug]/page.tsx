import { DATA, IProjectData } from "@/app/data";
import { Navbar, Footer, Contact } from "@/components/sections";
import { ProjectHeader } from "@/components/sections/project-header";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { CursorManager } from "@/components/ui/cursor-manager";

export async function generateStaticParams() {
    return Object.values(DATA.PROJECTS)
        .filter((p: IProjectData) => p.SLUG)
        .map((project: IProjectData) => ({
            slug: project.SLUG,
        }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const projectEntry = Object.entries(DATA.PROJECTS).find(
        ([_, value]) => (value as IProjectData).SLUG === slug
    );

    if (!projectEntry) notFound();

    const projectName = projectEntry[0];
    const project = projectEntry[1] as IProjectData;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <div className="flex flex-col items-center gap-12 p-8 w-full">
                <main className="w-full max-w-6xl mx-auto">
                    
                    {/* Header with integrated Back link and formatted tech tags */}
                    <ProjectHeader 
                        projectName={projectName} 
                        project={project} 
                    />

                    {/* Heading changed to "overview." */}
                    <h2 className="mt-10 font-medium text-primary/90 text-base">
                        overview.
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-4 mb-20">
                        <div className="flex flex-col gap-4 font-normal text-muted-foreground text-base text-justify leading-relaxed">
                            {project.DESCRIPTION.map((desc, i) => (
                                <span key={i}>{desc}</span>
                            ))}
                        </div>

                        <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-muted bg-muted/20 shadow-xl h-fit self-start">
                            {typeof project.IMAGE === "string" && (project.IMAGE.endsWith(".mp4") || project.IMAGE.endsWith(".webm")) ? (
                                <video src={project.IMAGE} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                            ) : (
                                <Image src={project.IMAGE as any} alt={projectName} fill className="object-cover" priority />
                            )}
                        </div>
                    </div>

                    {project.CONTENT && (
                        <article className="prose prose-neutral dark:prose-invert max-w-none 
                            prose-headings:text-primary/90 prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:font-bold
                            prose-p:text-muted-foreground/90 prose-p:leading-relaxed prose-p:text-lg
                            prose-img:rounded-xl prose-img:border prose-img:border-muted
                            prose-strong:text-primary border-t border-muted pt-16">
                            <div 
                                className="animate-in fade-in slide-in-from-bottom-4 duration-700"
                                dangerouslySetInnerHTML={{ __html: project.CONTENT }} 
                            />
                        </article>
                    )}
                </main>

                <Contact data={DATA.HEADER} />
                <Footer />
            </div>

            <CursorManager />
        </div>
    );
}