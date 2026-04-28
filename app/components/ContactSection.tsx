"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

import type { SkillCluster } from "@/app/resume-data";

type ContactItem = {
  href: string;
  label: string;
  note: string;
};

type ContactSectionProps = {
  contactLinks: ContactItem[];
  skills: SkillCluster[];
};

type ContactFieldProps = {
  children: ReactNode;
  label: string;
};

const subjectOptions = [
  "Full-time software role",
  "Internship opportunity",
  "Recruiter / hiring manager outreach",
  "Frontend or visualization role",
  "Other",
];

function ContactField({ children, label }: ContactFieldProps) {
  return (
    <label className="contact-field">
      <span>{label}</span>
      {children}
    </label>
  );
}

function ContactBadgeIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" fill="#0a66c2" r="16" />
        <path
          d="M10.2 13.3h3.1v9.8h-3.1zm1.6-4.8a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm3.5 4.8h3v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v5.4h-3.1v-4.8c0-1.1 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v4.9h-3.1z"
          fill="#fff"
        />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" fill="#24292f" r="16" />
        <path
          d="M16 8.1c-4.5 0-8.1 3.7-8.1 8.2 0 3.6 2.3 6.6 5.4 7.7.4.1.6-.2.6-.4v-1.5c-2.2.5-2.7-.9-2.7-.9-.4-.9-.9-1.2-.9-1.2-.7-.5 0-.5 0-.5.8 0 1.3.8 1.3.8.7 1.2 1.8.9 2.2.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.2 0 3.1-1.9 3.8-3.7 4 .3.2.5.7.5 1.4v2.1c0 .2.2.5.6.4a8.2 8.2 0 0 0 5.4-7.7c0-4.5-3.7-8.2-8.2-8.2Z"
          fill="#fff"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 32 32">
      <circle cx="16" cy="16" fill="#58a0dc" r="16" />
      <path
        d="M8.8 11.2h14.4a1.6 1.6 0 0 1 1.6 1.6v6.4a1.6 1.6 0 0 1-1.6 1.6H8.8a1.6 1.6 0 0 1-1.6-1.6v-6.4a1.6 1.6 0 0 1 1.6-1.6Z"
        stroke="#fff"
        strokeWidth="1.9"
      />
      <path
        d="m9.1 12.1 6.9 5.6 6.9-5.6"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.9"
      />
    </svg>
  );
}

export function ContactSection({ contactLinks, skills }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // track which fields are invalid
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // validation
    const newErrors = {
      name: name.trim() === "",
      email: email.trim() === "",
      subject: subject.trim() === "",
      message: message.trim() === "",
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.subject || newErrors.message) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      const rawResponse = await response.text();
      let result: { error?: string } | null = null;

      if (rawResponse) {
        try {
          result = JSON.parse(rawResponse) as { error?: string };
        } catch {
          result = null;
        }
      }

      if (!response.ok) {
        throw new Error(
          result?.error ||
            `Request failed with status ${response.status}. Check deployment logs, environment variables, and whether your host supports Next.js API routes.`,
        );
      }

      if (!result) {
        throw new Error(
          "The contact endpoint returned a non-JSON response. Check your deployment logs and API route configuration.",
        );
      }

      setStatus("success");

      // reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({ name: false, email: false, subject: false, message: false });
    } catch (error) {
      const message =
          error instanceof Error ? error.message : "Something went wrong.";

      console.error(message);
      setErrorMessage(message);
      setStatus("error");
    }
  }

  const serviceTags = [
    "Frontend",
      "Backend",
      "Fullstack",
    "Software internships",
    "New grad roles",
  ];

  return (
      <section className="section-panel section-panel-wide contact-panel" id="contact">
        <div className="section-heading section-heading-wide section-heading-copy">
          <p className="eyebrow">Contact me</p>
          <h2>Contact</h2>
          <p className="section-heading-body">
            If you&apos;re recruiting for an internship, full-time role, or any other opportunities, send a message and I&apos;ll get back to you as soon as I can!
          </p>
        </div>

        <div className="contact-layout">
          <form className="contact-form-shell" onSubmit={handleSubmit}>
            <ContactField label="Name">
              <input
                  className={errors.name ? "input-error" : ""}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  type="text"
                  value={name}
              />
            </ContactField>

            <ContactField label="Email">
              <input
                  className={errors.email ? "input-error" : ""}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  type="email"
                  value={email}
              />
            </ContactField>

            <ContactField label="Subject">
              <select
                  className={errors.subject ? "input-error" : ""}
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
              >
                <option disabled value="">
                  Choose a subject
                </option>
                {subjectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                ))}
              </select>
            </ContactField>

            <ContactField label="Message">
              <textarea
                  className={errors.message ? "input-error" : ""}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share the role, team, timeline, or anything else you'd want me to know."
                  rows={7}
                  value={message}
              />
            </ContactField>

            <div className="contact-actions">
              <button
                  className="contact-submit-link"
                  disabled={status === "sending"}
                  type="submit"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>

              <p
                  className="contact-helper-text"
                  style={{
                    color: status === "error" ? "#ff6b6b" : undefined,
                  }}
              >
                {status === "success" &&
                    "Message sent successfully. Thank you for reaching out."}

                {status === "error" &&
                    (errorMessage || "Something went wrong. Please try again.")}

                {status === "idle" &&
                    "This sends your message directly without opening an email app."}

                {status === "sending" && "Sending your message..."}
              </p>
            </div>
          </form>

          <aside className="contact-info-card">
            <h3>Contact information</h3>

            <div className="contact-info-list">
              {contactLinks.map((link) => (
                  <div className="contact-info-item" key={link.label}>
                    <div className="contact-info-badge" aria-hidden="true" data-label={link.label}>
                      <ContactBadgeIcon label={link.label} />
                    </div>
                    <div>
                      <p className="contact-info-label">{link.label}</p>
                      <a
                          className="contact-info-value"
                          href={link.href}
                          rel="noreferrer"
                          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      >
                        {link.note}
                      </a>
                    </div>
                  </div>
              ))}
            </div>

            <div className="contact-info-block">
              <p className="contact-info-title">Target roles</p>
              <div className="contact-service-list">
                {serviceTags.map((service) => (
                    <span className="contact-service-tag" key={service}>
                  {service}
                </span>
                ))}
              </div>
            </div>

            <div className="contact-info-block">
              <p className="contact-info-title">Strength areas</p>
              <div className="contact-service-list">
                {skills.slice(0, 4).map((cluster) => (
                    <span
                        className="contact-service-tag contact-service-tag-soft"
                        key={cluster.label}
                    >
                  {cluster.label}
                </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
  );
}
