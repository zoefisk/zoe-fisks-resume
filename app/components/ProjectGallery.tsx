"use client";

import { CiCircleInfo } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { Project } from "@/app/resume-data";

type ProjectGalleryProps = {
  projects: Project[];
};

const DESKTOP_PROJECT_RAIL_BASE_HEIGHT = (212 * 3) + (14 * 2);
const PROJECT_LIST_META_ALLOWANCE = 40;

function getProjectPreviewTags(stack: string[]) {
  if (stack.length <= 2) {
    return {
      hiddenCount: 0,
      items: stack,
    };
  }

  const twoItemPreview = stack.slice(0, 2);
  const twoItemHiddenCount = stack.length - twoItemPreview.length;
  const moreLabelLength = `+${twoItemHiddenCount} more`.length;
  const totalPreviewLength =
    twoItemPreview.reduce((total, item) => total + item.length, 0) + moreLabelLength;
  const hasLongChip = twoItemPreview.some((item) => item.length > 14);

  if (totalPreviewLength > 30 || hasLongChip) {
    return {
      hiddenCount: stack.length - 1,
      items: stack.slice(0, 1),
    };
  }

  return {
    hiddenCount: twoItemHiddenCount,
    items: twoItemPreview,
  };
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeProjectId, setActiveProjectId] = useState("");
  const [scrollShellMaxHeight, setScrollShellMaxHeight] = useState<number | null>(
    DESKTOP_PROJECT_RAIL_BASE_HEIGHT,
  );
  const detailRef = useRef<HTMLElement | null>(null);

  const activeProject = projects.find((project) => project.id === activeProjectId);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 1080px)");

    const updateScrollShellHeight = () => {
      if (mediaQuery.matches) {
        setScrollShellMaxHeight(null);
        return;
      }

      const detailHeight = detailRef.current?.offsetHeight ?? 0;
      setScrollShellMaxHeight(
        Math.max(DESKTOP_PROJECT_RAIL_BASE_HEIGHT, detailHeight - PROJECT_LIST_META_ALLOWANCE),
      );
    };

    updateScrollShellHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateScrollShellHeight();
    });

    if (detailRef.current) {
      resizeObserver.observe(detailRef.current);
    }

    window.addEventListener("resize", updateScrollShellHeight);
    mediaQuery.addEventListener("change", updateScrollShellHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateScrollShellHeight);
      mediaQuery.removeEventListener("change", updateScrollShellHeight);
    };
  }, [activeProjectId]);

  if (!projects.length) {
    return null;
  }

  return (
    <div className="project-layout">
      <div className="project-list-shell">
        <div className="project-list-meta">
          <p className="project-list-status">{projects.length} projects</p>
          <p className="project-list-hint">Scroll to browse</p>
        </div>

        <div
          className="project-scroll-shell"
          style={scrollShellMaxHeight ? { maxHeight: `${scrollShellMaxHeight}px` } : undefined}
        >
          <div aria-label="Selected projects" className="project-grid" role="list">
            {projects.map((project) => {
              const isActive = project.id === activeProject?.id;
              const { items: previewStack, hiddenCount: hiddenStackCount } = getProjectPreviewTags(
                project.stack,
              );
              const previewSummary =
                project.summary.length > 94
                  ? `${project.summary.slice(0, 91).trimEnd()}...`
                  : project.summary;

              return (
                <button
                  aria-pressed={isActive}
                  className="project-card"
                  data-active={isActive}
                  data-tone={project.tone}
                  key={project.id}
                  onClick={() => setActiveProjectId(project.id)}
                  type="button"
                >
                  <div className="project-card-topline">
                    <span>{project.index}</span>
                    <span>{project.tag}</span>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-summary">{previewSummary}</p>
                  <div className="project-card-tags">
                    {previewStack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                    {hiddenStackCount > 0 ? <span>+{hiddenStackCount} more</span> : null}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {activeProject ? (
        <article
          className="project-detail"
          data-tone={activeProject.tone}
          key={activeProject.id}
          ref={detailRef}
        >
          <div className="project-detail-topline">
            <p className="eyebrow">Selected project</p>
            <p>{activeProject.tag}</p>
          </div>

          <h3>{activeProject.title}</h3>
          {activeProject.dateLabel ? (
            <div className="project-detail-meta">
              <span className="project-date-chip">{activeProject.dateLabel}</span>
            </div>
          ) : null}
          <p className="project-summary">{activeProject.summary}</p>

          <div className="project-detail-section">
            <p className="project-detail-label">What stood out</p>
            <ul>
              {activeProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <div className="project-detail-section">
            <p className="project-detail-label">Tools and modes</p>
            <div className="project-detail-tags">
              {activeProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="project-detail-footer">
            {activeProject.links?.length ? (
              <div className="project-detail-links-wrap">
                <div className="project-detail-section project-detail-section-links">
                  <p className="project-detail-label">External link</p>
                </div>
                <div className="project-detail-links">
                  {activeProject.links.map((link) => (
                    <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                      <span>{link.label}</span>
                      <span aria-hidden="true">{"->"}</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}

            {activeProject.subpage && activeProject.slug ? (
              <div className="project-detail-actions">
                <Link className="project-subpage-link" href={`/projects/${activeProject.slug}`}>
                  <span className="project-action-icon" aria-hidden="true">
                    <CiCircleInfo />
                  </span>
                  <span>Open full project walkthrough here</span>
                </Link>
              </div>
            ) : null}
          </div>
        </article>
      ) : (
        <article
          className="project-detail project-detail-empty"
          key="project-detail-empty"
          ref={detailRef}
        >
          <div className="project-detail-empty-copy">
            <p className="eyebrow">Selected project</p>
            <h3 className="project-detail-empty-message">
              Click a project to see its details expanded here!
            </h3>
            <p className="project-detail-empty-subtitle">
              Choose any card from the left to load the full story, tools, links, and optional
              subpage.
            </p>
          </div>
        </article>
      )}
    </div>
  );
}
