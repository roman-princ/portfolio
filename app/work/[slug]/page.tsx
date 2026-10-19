import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WORK } from "@/app/constants";
import ProjectPage from "./ProjectPage";

const SITE = "https://portfolio.princdev.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return WORK.map((p) => ({ slug: p.slug }));
}

// a description fit for a search result: the project's own, cut at a word near 160 characters
const short = (text: string) => (text.length <= 160 ? text : `${text.slice(0, 157).replace(/[\s,.;:—-]+\S*$/, "")}…`);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = WORK.find((p) => p.slug === slug);
  if (!project) return {};
  const description = short(project.description);
  // its screenshot, or (with no screen of its own) the site's own preview
  const image = (project.mac?.kind === "image" ? project.mac.src : project.phones?.[0]?.src) ?? "/opengraph-image";
  const url = `${SITE}/work/${project.slug}`;
  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Roman Princ",
      title: `${project.title} — Roman Princ`,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Roman Princ`,
      description,
      images: [image],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = WORK.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  return <ProjectPage project={WORK[i]} index={i} next={WORK[(i + 1) % WORK.length]} />;
}
