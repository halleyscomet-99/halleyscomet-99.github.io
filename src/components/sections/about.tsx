"use client";

import {  Github, Linkedin, Youtube, Mail, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { extractDomain } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DATA } from "@/app/data";
import { MovingElement } from "@/components/navbar";

interface IAboutData {
    WEBSITE: string;
    POSITION: string;
    LOCATION: string;
    DURATION: string;
    DESCRIPTION: string[];
    TECH_STACK: string[];
}

export function About({
    data,
}: {
    data: Record<string, IAboutData>;
}) {
    const handleChange = (url: string) => {
        window.open(url, "_blank");
    };
    return (
        <div id="about" className="flex flex-col gap-12 w-full">
            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">about me.</h2>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-6 font-normal text-muted-foreground text-base text-justify leading-relaxed">
                    <span>
                        As a robotics student at Northwestern University, I build robots designed to survive the transition from the lab to the real world.{" "}
                        <span className="hidden sm:inline">{DATA.HEADER.EXPERTISE}</span>
                    </span>
                        <div className="flex items-center gap-2 text-sm mt-auto pt-8">
                            <MovingElement
                                className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 shadow-sm px-4 py-2 rounded-md h-9 font-medium text-primary-foreground text-sm transition-colors"
                                change={() => handleChange(DATA.HEADER.RESUME)}
                                toChange={false}
                                ariaLabel="Resume"
                            >
                                Resume
                            </MovingElement>
                            
                            <div className="flex gap-2">
                                <MovingElement change={() => handleChange(DATA.HEADER.EMAIL)} ariaLabel="Email">
                                    <Mail size={20} />
                                </MovingElement>
                                <MovingElement change={() => handleChange(DATA.HEADER.GITHUB)} ariaLabel="Github">
                                    <Github size={20} />
                                </MovingElement>
                                <MovingElement change={() => handleChange(DATA.HEADER.LINKEDIN)} ariaLabel="Linkedin">
                                    <Linkedin size={20} />
                                </MovingElement>
                                <MovingElement change={() => handleChange(DATA.HEADER.YOUTUBE)} ariaLabel="Youtube">
                                    <Youtube size={20} />
                                </MovingElement>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-6 w-full relative min-h-[300px]"> 
                        {DATA.ABOUT_IMAGES && DATA.ABOUT_IMAGES.length > 0 ? (
                            <PhotoSlider images={DATA.ABOUT_IMAGES} />
                        ) : (
                            <div className="bg-muted animate-pulse w-full h-full rounded-xl" />
                        )}
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">
                    education.
                </h2>
                <div className="flex justify-between items-start group">
                    <div>
                        <p className="text-primary/90 text-lg">
                            {DATA.EDUCATION.MSR.DEGREE}
                        </p>
                        <p className="text-muted-foreground text-sm">
                            {DATA.EDUCATION.MSR.SCHOOL} | {DATA.EDUCATION.MSR.LOCATION}
                        </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        {DATA.EDUCATION.MSR.DURATION}
                    </p>
                </div>
                <div className="flex justify-between items-start group">
                    <div>
                        <p className="text-primary/90 text-lg">
                            {DATA.EDUCATION.BSE.DEGREE}
                        </p>
                        <p className="text-muted-foreground text-sm">
                            {DATA.EDUCATION.BSE.SCHOOL} | {DATA.EDUCATION.BSE.LOCATION}
                        </p>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        {DATA.EDUCATION.BSE.DURATION}
                    </p>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">
                    experience.
                </h2>

                <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
                    {Object.entries(data).map(([key, value]) => (
                        <li key={key} className="cursor-target">
                            <div className="pl-0 size-full transition-all duration-300">
                                <div className="flex sm:flex-row flex-col justify-between items-start">
                                    <div>
                                        <p className="text-primary/90 text-lg">
                                            {value.POSITION}{" "}
                                            <span className="inline-block bg-secondary max-sm:mb-2 ml-2 px-2 py-1 rounded text-xs">
                                                {value.LOCATION}
                                            </span>
                                        </p>
                                        <p className="flex items-center text-sm">
                                            at,{" "}
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 ml-1"
                                                href={value.WEBSITE}
                                            >
                                                {extractDomain(value.WEBSITE)}{" "}
                                                <ArrowUpRight size={18} />
                                            </a>
                                        </p>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        {value.DURATION}
                                    </p>
                                </div>

                                <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
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
                        </li>
                    ))}
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">
                    publications.
                </h2>

                <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
                    {Object.entries(DATA.PUBLICATIONS).map(([key, pub]) => {
                        const myName = DATA.HEADER.NAME;
                        return (
                        <li key={key} className="cursor-target">
                            <div className="pl-0 size-full transition-all duration-300">
                                <div className="flex sm:flex-row flex-col justify-between items-start">
                                    <div>
                                        <p className="text-primary/90 text-lg">
                                            {pub.TITLE}{" "}
                                            <span className="inline-block bg-secondary max-sm:mb-2 ml-2 px-2 py-1 rounded text-xs">
                                                {pub.CONFERENCE}
                                            </span>
                                        </p>
                                        <div className="flex items-center">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href={pub.LINK}
                                                    className="text-sm flex items-center flex-wrap group"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {pub.AUTHORS.map((author, index) => {
                                                            const isMe = author === myName || author === "Chenwan Halley Zhong";
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <span 
                                                                        className={isMe 
                                                                            ? "text-primary"
                                                                            : "transition-colors group-hover:text-muted-foreground"
                                                                        }
                                                                    >
                                                                        {author}
                                                                    </span>
                                                                    {index < pub.AUTHORS.length - 1 ? ", " : ""}
                                                                </React.Fragment>
                                                            );
                                                        })}
                                                    </span>

                                                    {pub.LINK && (
                                                        <ArrowUpRight 
                                                            size={16} 
                                                            className="inline-block ml-1 flex-shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                                                        />
                                                    )}
                                                </a>
                                            </div>

                                    </div>
                                    
                                </div>

                                <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                                    {/* {value.DESCRIPTION.map((desc, index) => (
                                        <li key={index}>
                                            <span>{desc}</span>
                                        </li>
                                    ))} */}

                                </ul>

                                {/* <ul className="flex flex-wrap items-center gap-2 mt-2 pl-3">
                                    {value.TECH_STACK.map((tech, index) => (
                                        <li
                                            key={index}
                                            className="bg-muted px-2 py-1 rounded text-xs"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul> */}
                            </div>
                        </li>
                        )
                    })}              
                </ul>
            </section>
        </div>
    );
}

function PhotoSlider({ images }: { images: any[] }) {
    console.log("Images array:", images);
    if (!images || images.length === 0) return <div>No Images Loaded</div>;

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [images.length]);

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="group relative w-full h-80 rounded-xl overflow-hidden border border-muted shadow-sm bg-muted">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image
                        src={img}
                        alt={`About photo ${index}`}
                        fill
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                    />
                </div>
            ))}

            <button
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            >
                <ChevronLeft size={18} />
            </button>
            <button
                onClick={(e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
            >
                <ChevronRight size={18} />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                            i === currentIndex ? "bg-white w-4" : "bg-white/40 w-1"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}