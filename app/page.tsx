import Image from "next/image";
import { ContactSection } from "@/app/components/ContactSection";
import { PageSidebar } from "@/app/components/PageSidebar";
import { ProjectGallery } from "@/app/components/ProjectGallery";
import { StackBrowser } from "@/app/components/StackBrowser";
import {
  contactLinks,
  educationHistory,
  featuredStack,
  profile,
  projects,
  skills,
  workHistory,
} from "@/app/resume-data";

export default function Home() {
  const timelineFloor = 2015;
  const timelineCeiling = 2026;
  const sections = [
    { id: "start", label: "Start" },
    { id: "background", label: "Background" },
    { id: "tech-stack", label: "Tech stack" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <main className="resume-page">
      <PageSidebar sections={sections} />
      <div className="resume-shell">
        <section className="hero-panel" id="start">
          <div className="hero-copy">
            <p className="eyebrow">Currently seeking new opportunities</p>
            <h1 className="hero-name">{profile.name}</h1>
            <p className="hero-title">{profile.title}</p>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <a className="primary-link" href="#contact">
                Contact me
              </a>
              {/*<a className="secondary-link" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/zoe-fisk-resume.pdf`} download>*/}
              {/*  Download resume*/}
              {/*</a>*/}
              <a
                className="secondary-link"
                href={contactLinks[1].href}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="secondary-link"
                href={contactLinks[2].href}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <Image
              alt="Zoë Fisk"
              className="hero-photo"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/headshot.jpg`}
              width={320}
              height={320}
            />
          </div>
        </section>

        <section className="section-panel section-panel-wide" id="background">
          <div className="background-stage">
            <div className="section-heading section-heading-wide section-heading-copy">
              <p className="eyebrow">Background</p>
              <h2>My background</h2>
            </div>

            <div className="background-grid">
              {educationHistory.map((entry) => (
                <article className="background-education-card" key={entry.institution}>
                  <p className="background-kicker">Education spotlight</p>
                  <h3>{entry.institution}</h3>
                  <p className="background-degree">{entry.degree}</p>
                  <p className="background-timeframe">{entry.timeframe}</p>
                  <p className="background-copy">{entry.note}</p>

                  <div className="background-coursework-block">
                    <p className="background-subtitle">Relevant coursework</p>
                    <div className="background-coursework-list">
                      {entry.coursework.map((course) => (
                        <span className="background-course-chip" key={course}>
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}

              <div className="background-work-rail">
                <p className="background-kicker">Work history</p>
                <div className="background-work-list">
                  {workHistory.map((entry) => (
                    <article className="background-work-card" key={`${entry.employer}-${entry.role}`}>
                      <div className="background-work-topline">
                        <h3>
                          {entry.employer}
                          {entry.location ? <span> ({entry.location})</span> : null}
                        </h3>
                        <p className="background-timeframe">{entry.timeframe}</p>
                      </div>

                      <p className="background-work-role">{entry.role}</p>

                      <ul className="background-work-highlights">
                        {entry.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-panel section-panel-wide" id="tech-stack">
          <div className="stack-stage">
            <div className="section-heading section-heading-wide section-heading-copy">
              <p className="eyebrow">Tech stack</p>
              <h2>My technical skills</h2>
              <p className="section-heading-body">
                These are the skills and tools I&#39;ve picked up along the way, both in coursework and projects.
              </p>
            </div>

            <StackBrowser
              items={featuredStack}
              timelineCeiling={timelineCeiling}
              timelineFloor={timelineFloor}
            />
          </div>
        </section>

        <section className="section-panel section-panel-projects section-panel-wide" id="projects">
          <div className="section-heading section-heading-wide section-heading-copy">
            <p className="eyebrow">Projects I&#39;ve worked on</p>
            <h2>Projects</h2>
            <p className="section-heading-body">
              Select any project to see more details about it.
            </p>
          </div>

          <ProjectGallery projects={projects} />
        </section>

        <ContactSection contactLinks={contactLinks} skills={skills} />
      </div>
    </main>
  );
}
