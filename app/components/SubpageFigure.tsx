"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SubpageFigureProps = {
  alt: string;
  caption: string;
  size?: "compact" | "standard" | "wide";
  src: string;
  tone: "ember" | "teal" | "ink";
};

export function SubpageFigure({ alt, caption, size = "standard", src, tone }: SubpageFigureProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <figure className="subpage-inline-media" data-size={size} data-tone={tone}>
        <button
          aria-label={`Expand image: ${alt}`}
          className="subpage-inline-media-button"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <Image alt={alt} className="subpage-inline-image" height={900} src={src} width={1600} />
        </button>
        <figcaption>
          <span>{caption}</span>
          {/*<span className="subpage-inline-hint">Click image to expand</span>*/}
        </figcaption>
      </figure>

      {isOpen ? (
        <div
          aria-label={alt}
          aria-modal="true"
          className="subpage-image-modal"
          onClick={() => setIsOpen(false)}
          role="dialog"
        >
          <div className="subpage-image-modal-shell" onClick={(event) => event.stopPropagation()}>
            <button
              aria-label="Close expanded image"
              className="subpage-image-modal-close"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Close
            </button>

            <div className="subpage-image-modal-frame" data-tone={tone}>
              <Image
                alt={alt}
                className="subpage-image-modal-image"
                height={900}
                src={src}
                width={1600}
              />
            </div>

            <p className="subpage-image-modal-caption">{caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
