import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { IProjectData } from "@/app/data";

export function Projects({ data }: { data: Record<string, IProjectData> }) {
    return (
        <div id="projects" className="w-full">
            <h2 className="font-medium text-primary/90 text-base">projects.</h2>

            <ul className="flex flex-col gap-16 mt-6 font-normal text-primary/90 text-base">
                {Object.entries(data)
                    .slice(0, 3)
                    .map(([key, value]) => (
                        <li key={key} className="cursor-target group">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pl-0 transition-all duration-300">
                                
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-primary/90 text-xl font-medium">
                                            {key}
                                        </p>

                                        <p className="flex items-center gap-3 mt-1 text-sm">
                                            {value.LIVE_PREVIEW && (
                                                <a
                                                    className="flex items-center gap-1 hover:text-primary transition-colors"
                                                    href={value.LIVE_PREVIEW}
                                                    target="_blank"
                                                >
                                                    live preview{" "}
                                                    <ArrowUpRight size={16} />
                                                </a>
                                            )}
                                            {value.GITHUB && (
                                                <a
                                                    className="flex items-center gap-1 hover:text-primary transition-colors"
                                                    href={value.GITHUB}
                                                    target="_blank"
                                                >
                                                    github{" "}
                                                    <ArrowUpRight size={16} />
                                                </a>
                                            )}
                                        </p>
                                    </div>

                                    <ul className="space-y-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                                        {value.DESCRIPTION.map((desc, index) => (
                                            <li key={index}>
                                                <span>{desc}</span>
                                            </li>
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

                                <div className="relative rounded-lg overflow-hidden border border-muted bg-muted/20 w-full aspect-video">
                                    {value.IMAGE ? (
                                        <Image
                                            src={value.IMAGE}
                                            alt={key}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full text-muted-foreground text-xs text-center p-4">
                                            [Project Preview]
                                        </div>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
            </ul>

            <div className="flex justify-center mt-12">
                <Link
                    href={"/projects"}
                    className="inline-flex justify-center items-center bg-background hover:bg-accent px-6 py-2 border border-input rounded-md h-10 font-medium text-muted-foreground text-sm transition-all hover:text-accent-foreground cursor-target"
                >
                    View all projects
                </Link>
            </div>
        </div>
    );
}