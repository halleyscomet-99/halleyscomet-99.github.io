"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { AnimatedText, MovingElement, ThemeToggle } from "@/components/navbar";

export function Navbar() {
    const router = useRouter();

    return (
        <header className="flex justify-between items-end mb-4 px-6">
            <MovingElement
                change={() => router.push("/")}
                ariaLabel="Navigate to home"
            >
                <Link href={"/"} className="font-bold text-xl tracking-tighter">
                halleyscomet99.
                </Link>
            </MovingElement>

            <nav className="flex items-center gap-2">
                <ul className="flex items-center gap-2 sm:gap-0">
                    {["about", "projects", "blogs"].map((link, index) => (
                        <li key={index}>
                            <AnimatedText href={`/${link}`}>
                                {link.split("#")[1] || link}
                            </AnimatedText>
                        </li>
                    ))}
                </ul>

                <ThemeToggle />
            </nav>
        </header>
    );
}
