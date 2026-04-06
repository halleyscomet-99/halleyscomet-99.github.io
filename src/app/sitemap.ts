import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://halleyscomet-99.github.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/logs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];

    const projectSlugs = [
        "bugcatcher",
        "vocal2piano",
        "medical-swab-robot",
        "nuturtle",
        "quadruped",
        "robotheater",
        "sofibuddy",
    ];

    const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes];
}