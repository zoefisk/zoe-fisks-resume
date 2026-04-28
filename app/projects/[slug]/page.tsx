import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageSidebar } from "@/app/components/PageSidebar";
import { SubpageFigure } from "@/app/components/SubpageFigure";
import { getProjectBySlug, projects } from "@/app/resume-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects
    .filter((project) => project.slug && project.subpage)
    .map((project) => ({
      slug: project.slug as string,
    }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  if (!project.subpage) {
    return {
      title: `${project.title} | Zoë Fisk`,
      description: project.summary,
    };
  }

  return {
    title: `${project.title} | Zoë Fisk`,
    description: project.subpage.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const subpage = project.subpage;

  if (!subpage) {
    notFound();
  }

  const sidebarSections = [
    { id: "start", label: "Start" },
    ...subpage.sections.map((section, index) => ({
      id: `section-${index + 1}-${section.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`,
      label: section.title,
    })),
  ];

  return (
    <main className="resume-page">
      <PageSidebar sections={sidebarSections} />
      <div className="resume-shell">
        <section className="section-panel subpage-panel" id="start">
          <nav aria-label="Breadcrumb" className="breadcrumb-row">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#projects">Projects</Link>
            <span>/</span>
            <span aria-current="page">{project.title}</span>
          </nav>

          <div className="subpage-copy">
            <p className="eyebrow">
              {project.index} / {project.tag}
            </p>
            <h1 className="subpage-title">{project.title}</h1>
            <p className="subpage-intro">{subpage.intro}</p>
            <p className="subpage-summary">{subpage.summary}</p>

            <div className="project-detail-tags subpage-tag-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="subpage-sections">
          {subpage.sections.map((section, index) => (
            <article
              className="section-panel subpage-section"
              id={sidebarSections[index + 1]?.id}
              key={section.title}
            >
              <p className="project-detail-label">{section.title}</p>
              <div className="subpage-section-flow">
                {section.blocks.map((block, index) => (
                  <div
                    className="subpage-block"
                    data-has-image={Boolean(block.image)}
                    data-image-side={block.imageSide ?? "right"}
                    data-image-size={block.imageSize ?? "standard"}
                    key={`${section.title}-${index}`}
                  >
                    {block.image ? (
                      <SubpageFigure
                        alt={block.image.alt}
                        caption={block.image.caption}
                        size={block.imageSize}
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${block.image.src}`}
                        tone={project.tone}
                      />
                    ) : null}

                    <div className="subpage-section-text">
                      <div className="subpage-paragraphs">
                        {block.body.map((item, itemIndex) =>
                          typeof item === "string" ? (
                            <p key={`${section.title}-${index}-${itemIndex}`}>{item}</p>
                          ) : (
                            <ul
                              className="subpage-bullet-list"
                              key={`${section.title}-${index}-${itemIndex}`}
                            >
                              {item.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        {project.links?.length ? (
          <section className="section-panel subpage-links-panel">
            <p className="project-detail-label">Links</p>
            <div className="project-detail-links">
              {project.links.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
