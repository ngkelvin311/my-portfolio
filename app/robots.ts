import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/work/reecetech",
          "/work/fitness-passport",
          "/work/dcm",
          "/login",
          "/api/",
        ],
      },
    ],
    sitemap: "https://kelvinux.com/sitemap.xml",
  };
}