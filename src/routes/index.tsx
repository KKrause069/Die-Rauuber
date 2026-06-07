import { createFileRoute } from "@tanstack/react-router";
import Presentation from "@/components/Presentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Die Verwandlung — Franz Kafka · Buchpräsentation" },
      {
        name: "description",
        content:
          "Interaktive Buchpräsentation zu Franz Kafkas „Die Verwandlung“ mit Autor, Figuren, Handlung, Interpretation, Sprechertext und Auto-Vortrag.",
      },
      { property: "og:title", content: "Die Verwandlung — Buchpräsentation" },
      {
        property: "og:description",
        content:
          "Slides, Sprechertext und automatischer Vortrag für Kafkas „Die Verwandlung“.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Presentation,
});
