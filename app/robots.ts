import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}


