"use client";

import Link from "next/link";
import { useState } from "react";

import type { Project } from "@/app/resume-data";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeProjectId, setActiveProjectId] = useState("");

  const activeProject = projects.find((project) => project.id === activeProjectId);

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

        <div className="project-scroll-shell">
          <div aria-label="Selected projects" className="project-grid" role="list">
            {projects.map((project) => {
              const isActive = project.id === activeProject?.id;
              const previewStack = project.stack.slice(0, 2);
              const hiddenStackCount = Math.max(0, project.stack.length - previewStack.length);
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
        <article className="project-detail" data-tone={activeProject.tone} key={activeProject.id}>
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
                    +
                  </span>
                  <span>See more in subpage</span>
                </Link>
              </div>
            ) : null}
          </div>
        </article>
      ) : (
        <article className="project-detail project-detail-empty" key="project-detail-empty">
          <div className="project-detail-topline">
            <p className="eyebrow">Selected project</p>
            <p>Choose from the list</p>
          </div>

          <h3>Select a project.</h3>
          <p className="project-summary">
            Pick a card from the left to load its story, stack, links, and any deeper detail page
            that comes with it.
          </p>

          <div className="project-detail-section">
            <p className="project-detail-label">What appears here</p>
            <ul>
              <li>Project summary and highlights</li>
              <li>Tools, modes, and external links</li>
              <li>Expanded details when a project subpage exists</li>
            </ul>
          </div>
        </article>
      )}
    </div>
  );
}
