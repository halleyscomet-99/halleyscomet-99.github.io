import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

export const metadata: Metadata = {
    title: "Chenwan Halley Zhong | Roboticist & Musician",
    description:
        "Software developer specializing in Next.js, TypeScript and Node.js.",
    twitter: {
        card: "summary_large_image",
        creator: "@halleyscomet_99",
    },
    authors: [
        { name: "Chenwan Halley Zhong", url: "https://halleyscomet-99.github.io/" },
    ],
    keywords: [
        "Chenwan Halley Zhong",
        "Software Developer",
        "Roboticist",
        "Musician",
        "Full-Stack Developer",
    ],
    creator: "Chenwan Halley Zhong",
    publisher: "Chenwan Halley Zhong",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${outfit.variable}`}
            suppressHydrationWarning
        >
            <body
                className={`${outfit.className} w-screen min-h-screen m-0 p-0 overflow-x-hidden dark:bg-[#0b0a09]`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <div className="bg-white dark:bg-black mx-auto pt-6 sm:pt-12 w-full md:w-3/4 lg:w-3/5 text-foreground">
                        {children}
                    </div>
                </ThemeProvider>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
