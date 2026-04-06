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
    metadataBase: new URL("https://halleyscomet-99.github.io"),
    title: "Chenwan Halley Zhong | Roboticist & Musician",
    description:
        "MS Robotics student at Northwestern University building autonomous systems with ROS 2, MoveIt 2, and computer vision. Also a musician and full-stack developer.",
    authors: [
        { name: "Chenwan Halley Zhong", url: "https://halleyscomet-99.github.io/" },
    ],
    keywords: [
        "Chenwan Halley Zhong",
        "Robotics",
        "ROS 2",
        "MoveIt",
        "Northwestern University",
        "Computer Vision",
        "Autonomous Systems",
        "Roboticist",
        "Musician",
        "Software Developer",
    ],
    creator: "Chenwan Halley Zhong",
    publisher: "Chenwan Halley Zhong",
    openGraph: {
        title: "Chenwan Halley Zhong | Roboticist & Musician",
        description:
            "MS Robotics student at Northwestern University building autonomous systems with ROS 2, MoveIt 2, and computer vision.",
        url: "https://halleyscomet-99.github.io",
        siteName: "Chenwan Halley Zhong",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        creator: "@halleyscomet_99",
        title: "Chenwan Halley Zhong | Roboticist & Musician",
        description:
            "MS Robotics student at Northwestern University building autonomous systems with ROS 2, MoveIt 2, and computer vision.",
    },
    verification: {
        google: "4MPdA_EdqmjO-vffhf_zhqhP-DUYEDrDff7j57H4mF4",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
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
            suppressHydrationWarning={true}
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
                    <div className="bg-white dark:bg-black mx-auto pt-6 sm:pt-12 w-full md:w-3/4 lg:w-2/3 text-foreground">
                        {children}
                    </div>
                </ThemeProvider>

                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}