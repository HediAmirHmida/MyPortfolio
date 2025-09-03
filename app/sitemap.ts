import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = ["/", "/about", "/projects", "/contact"]; 
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}


