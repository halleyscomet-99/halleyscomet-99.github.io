import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://halleyscomet-99.github.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoute: MetadataRoute.Sitemap = [
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
            priority: 1.0,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
    ];

    return [...staticRoute];
}