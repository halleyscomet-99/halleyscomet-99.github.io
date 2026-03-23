import { DATA, IProjectData } from "@/app/data";
import { Navbar, Footer, Contact } from "@/components/sections";
import { ProjectHeader } from "@/components/sections/project-header";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
import { readFileSync, existsSync } from "fs";
import path from "path";
import React from "react";
import { CursorManager } from "@/components/ui/cursor-manager";

const sizeMap: Record<string, string> = {
    sm:   "max-w-sm",
    md:   "max-w-md",
    lg:   "max-w-2xl",
    full: "max-w-none",
};

const mdxComponents = {
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 {...props} className="text-2xl font-semibold mt-10 mb-5 text-primary/90 flex items-center gap-3" />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 {...props} className="text-lg font-medium mt-8 mb-3 text-primary/80" />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p {...props} className="text-muted-foreground leading-relaxed mb-4 text-base" />
    ),
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
        <ul {...props} className="space-y-2 mb-6 text-muted-foreground list-none pl-0" />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
        <li {...props} className="leading-relaxed before:content-['–'] before:mr-2 before:text-muted-foreground/50" />
    ),
    strong: (props: React.HTMLAttributes<HTMLElement>) => (
        <strong {...props} className="text-primary font-semibold" />
    ),
    video: (props: React.VideoHTMLAttributes<HTMLVideoElement>) => (
        <video
            autoPlay loop muted playsInline
            {...props}
            className={`w-full rounded-xl border border-muted my-6 shadow-lg ${props.className ?? ""}`}
        />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <span className="block my-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                {...props}
                alt={props.alt ?? ""}
                className={`w-full rounded-xl border border-muted shadow-lg ${props.className ?? ""}`}
            />
            {props.alt && (
                <span className="block mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                    {props.alt}
                </span>
            )}
        </span>
    ),
    hr: () => <hr className="border-muted my-12" />,
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
        <pre {...props} className="bg-[#1e1e1e] text-blue-300 p-6 rounded-2xl border border-white/10 my-8 font-mono text-sm overflow-x-auto shadow-xl" />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => (
        <code {...props} className="font-mono text-sm" />
    ),
    Grid: ({ children }: { children: React.ReactNode }) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">{children}</div>
    ),
    Note: ({ children }: { children: React.ReactNode }) => (
        <div className="my-6 p-5 bg-muted/10 border border-dashed border-muted-foreground/30 rounded-2xl text-muted-foreground text-sm leading-relaxed">
            {children}
        </div>
    ),
    /** Sized video — defaults to full width.
     *  <Video src="..." size="sm|md|lg|full" /> */
    Video: ({
        src,
        size = "full",
        caption,
    }: {
        src: string;
        size?: "sm" | "md" | "lg" | "full";
        caption?: string;
    }) => (
        <div className={`my-6 mx-auto ${sizeMap[size] ?? sizeMap.full}`}>
            <video
                src={src}
                autoPlay loop muted playsInline controls
                className="w-full aspect-video rounded-xl border border-muted shadow-lg"
            />
            {caption && (
                <p className="mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                    {caption}
                </p>
            )}
        </div>
    ),
    /** Single centered diagram.
     *  <Diagram src="..." caption="..." size="sm|md|lg|full" /> */
    Diagram: ({
        src,
        caption,
        size = "lg",
    }: {
        src: string;
        caption?: string;
        size?: "sm" | "md" | "lg" | "full";
    }) => (
        <div className={`my-8 mx-auto ${sizeMap[size] ?? sizeMap.lg}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={caption ?? ""} className="w-full rounded-xl border border-muted shadow-lg" />
            {caption && (
                <p className="mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                    {caption}
                </p>
            )}
        </div>
    ),
    /** Text on the left, diagram pinned to the right.
     *  On mobile the diagram drops below the text.
     *  diagramWidth controls the right column flex-basis (default "40%").
     *  flip={true} puts the diagram on the left instead.
     *
     *  <TextDiagram src="..." caption="..." diagramWidth="38%" flip={false}>
     *    Prose goes here as children...
     *  </TextDiagram> */
    TextDiagram: ({
        src,
        caption,
        diagramWidth = "40%",
        flip = false,
        children,
    }: {
        src: string;
        caption?: string;
        diagramWidth?: string;
        flip?: boolean;
        children: React.ReactNode;
    }) => {
        const textBasis = `${100 - parseInt(diagramWidth)}%`;
        const diagram = (
            <div style={{ flex: `1 1 ${diagramWidth}`, minWidth: 0 }} className="mt-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={caption ?? ""} className="w-full rounded-xl border border-muted shadow-lg" />
                {caption && (
                    <p className="mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                        {caption}
                    </p>
                )}
            </div>
        );
        const text = (
            <div style={{ flex: `1 1 ${textBasis}`, minWidth: 0 }}>
                {children}
            </div>
        );
        return (
            <div className="my-6 flex flex-col md:flex-row gap-8 items-start">
                {flip ? <>{diagram}{text}</> : <>{text}{diagram}</>}
            </div>
        );
    },
    /** Two diagrams side by side.
     *  <DiagramPair leftSrc="..." leftCaption="..." rightSrc="..." rightCaption="..." leftWeight="60%" /> */
    DiagramPair: ({
        leftSrc,
        leftCaption,
        rightSrc,
        rightCaption,
        leftWeight = "60%",
    }: {
        leftSrc: string;
        leftCaption?: string;
        rightSrc: string;
        rightCaption?: string;
        leftWeight?: string;
    }) => (
        <div className="my-8 flex flex-col md:flex-row gap-6 items-start">
            <div style={{ flex: `1 1 ${leftWeight}`, minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={leftSrc} alt={leftCaption ?? ""} className="w-full rounded-xl border border-muted shadow-lg" />
                {leftCaption && (
                    <p className="mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                        {leftCaption}
                    </p>
                )}
            </div>
            <div style={{ flex: `1 1 ${(100 - parseInt(leftWeight)).toString()}%`, minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={rightSrc} alt={rightCaption ?? ""} className="w-full rounded-xl border border-muted shadow-lg" />
                {rightCaption && (
                    <p className="mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                        {rightCaption}
                    </p>
                )}
            </div>
        </div>
    ),
    /** Two videos side by side with optional captions.
     *  <VideoPair leftSrc="..." leftCaption="..." rightSrc="..." rightCaption="..." /> */
    VideoPair: ({
        leftSrc,
        leftCaption,
        rightSrc,
        rightCaption,
    }: {
        leftSrc: string;
        leftCaption?: string;
        rightSrc: string;
        rightCaption?: string;
    }) => (
        <div className="my-6 flex flex-col md:flex-row gap-4 items-start">
            <div style={{ flex: "1 1 50%", minWidth: 0 }}>
                <video
                    src={leftSrc}
                    autoPlay loop muted playsInline controls
                    className="w-full aspect-video rounded-xl border border-muted shadow-lg"
                />
                {leftCaption && (
                    <p className="mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                        {leftCaption}
                    </p>
                )}
            </div>
            <div style={{ flex: "1 1 50%", minWidth: 0 }}>
                <video
                    src={rightSrc}
                    autoPlay loop muted playsInline controls
                    className="w-full aspect-video rounded-xl border border-muted shadow-lg"
                />
                {rightCaption && (
                    <p className="mt-2 text-center text-xs text-muted-foreground/60 tracking-wide">
                        {rightCaption}
                    </p>
                )}
            </div>
        </div>
    ),
};

export async function generateStaticParams() {
    return Object.values(DATA.PROJECTS)
        .filter((p: IProjectData) => p.SLUG)
        .map((project: IProjectData) => ({ slug: project.SLUG }));
}

export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const projectEntry = Object.entries(DATA.PROJECTS).find(
        ([_, value]) => (value as IProjectData).SLUG === slug
    );
    if (!projectEntry) notFound();

    const projectName = projectEntry[0];
    const project = projectEntry[1] as IProjectData;

    const mdxPath = path.join(process.cwd(), "src/content/projects", `${slug}.mdx`);
    const mdxSource = existsSync(mdxPath) ? readFileSync(mdxPath, "utf-8") : null;

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-col items-center gap-8 p-8 w-full">
                <main className="w-full max-w-6xl mx-auto">

                    <ProjectHeader projectName={projectName} project={project} />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-4 mb-16">
                        <div className="flex flex-col gap-4 font-normal text-muted-foreground text-base text-justify leading-relaxed">
                            {project.DESCRIPTION.map((desc, i) => (
                                <span key={i}>{desc}</span>
                            ))}
                        </div>

                        <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-muted bg-muted/20 shadow-xl h-fit self-start">
                            {typeof project.IMAGE === "string" &&
                            (project.IMAGE.endsWith(".mp4") || project.IMAGE.endsWith(".webm")) ? (
                                <video
                                    src={project.IMAGE}
                                    autoPlay loop muted playsInline
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={project.IMAGE as any}
                                    alt={projectName}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            )}
                        </div>
                    </div>

                    {mdxSource && (
                        <article className="border-t border-muted pt-4 max-w-none animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <MDXRemote source={mdxSource} components={mdxComponents as any} />
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