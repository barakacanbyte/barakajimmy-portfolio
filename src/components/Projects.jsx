import { projects } from "../data/portfolioData";
import { usePagination } from "../hooks/usePagination";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const { page, totalPages, slice, go } = usePagination(
    projects,
    PROJECTS_PER_PAGE
  );

  return (
    <section id="projects" className="bg-muted py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Latest Projects" number="04" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
          {slice.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              type="button"
              disabled={page === 1}
              onClick={() => go(-1)}
              className="px-6 py-3 border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-medium">← Previous</span>
            </button>
            <span className="text-lg font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              type="button"
              disabled={page === totalPages}
              onClick={() => go(1)}
              className="px-6 py-3 border border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="font-medium">Next →</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
