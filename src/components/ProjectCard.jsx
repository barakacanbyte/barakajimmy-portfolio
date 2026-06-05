const ProjectCard = ({ project }) => {
  const open = () => {
    if (project.url) window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="flex flex-col gap-6 group cursor-pointer"
    >
      <div className="overflow-hidden rounded-lg relative w-full">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto block transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=870&q=80";
          }}
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    </div>
  );
};

export default ProjectCard;
