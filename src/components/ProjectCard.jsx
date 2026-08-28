import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=870&q=80";

const Lightbox = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 sm:p-8"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close"
        className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none"
      >
        &times;
      </button>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous screenshot"
          className="absolute left-2 sm:left-6 text-white/80 hover:text-white text-4xl leading-none px-2"
        >
          &#8249;
        </button>
      )}

      <div
        className="max-w-full max-h-full overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt=""
          className="max-w-full sm:max-w-sm mx-auto block"
        />
      </div>

      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next screenshot"
          className="absolute right-2 sm:right-6 text-white/80 hover:text-white text-4xl leading-none px-2"
        >
          &#8250;
        </button>
      )}

      {images.length > 1 && (
        <div className="flex gap-2 mt-4">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>,
    document.body
  );
};

const ProjectCard = ({ project }) => {
  const images = project.images ?? (project.image ? [project.image] : []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const open = () => {
    if (project.url) window.open(project.url, "_blank", "noopener,noreferrer");
  };

  const showImage = (e, index) => {
    e.stopPropagation();
    setActiveIndex(index);
  };

  const openLightbox = (e) => {
    e.stopPropagation();
    setLightboxOpen(true);
  };

  const step = (delta) =>
    setActiveIndex((i) => (i + delta + images.length) % images.length);

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="flex flex-col gap-6 group cursor-pointer"
    >
      <div className="overflow-hidden rounded-lg relative w-full aspect-[4/3] bg-muted">
        <img
          src={images[activeIndex] ?? FALLBACK_IMAGE}
          alt={project.name}
          onClick={images.length ? openLightbox : undefined}
          className="w-full h-full object-contain block transition-transform duration-300 group-hover:scale-105 cursor-zoom-in"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show screenshot ${index + 1}`}
                onClick={(e) => showImage(e, index)}
                className={`w-2.5 h-2.5 rounded-full border border-white transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between">
          <h5 className="text-xl sm:text-2xl font-semibold group-hover:text-primary transition-colors">
            {project.name}
          </h5>
          <svg
            className="w-8 h-8 text-black group-hover:text-primary transition-colors flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
        <p className="text-secondary text-sm sm:text-base line-clamp-4">
          {project.description}
        </p>
        {project.role && (
          <div className="border-l-2 border-primary pl-3 py-0.5 mt-1">
            <p className="text-sm sm:text-base font-medium">{project.role}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary text-xs sm:text-sm text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-primary hover:underline mt-1 w-fit"
          >
            View source code
          </a>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </div>
  );
};

export default ProjectCard;
