export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${portfolio.name} — Software Engineer`,
    short_name: portfolio.name,
    description: portfolio.tagline,
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#FAFAF8",
    theme_color: "#1A1A18",
    categories: ["portfolio", "technology"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
