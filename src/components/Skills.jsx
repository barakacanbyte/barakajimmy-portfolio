import { skillCategories } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const vectorImg = `${import.meta.env.BASE_URL}images/home/education-skill/edu-skill-vector.svg`;

const SkillPill = ({ name, icon }) => (
  <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 border border-muted rounded-full bg-white hover:border-primary transition-colors duration-300">
    {icon && (
      <i className={`${icon} text-base sm:text-lg text-primary`} aria-hidden />
    )}
    <span className="text-sm sm:text-base text-secondary font-medium">{name}</span>
  </div>
);

const Skills = () => (
  <section id="skills" className="border-t border-muted overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative">
      <img
        src={vectorImg}
        alt=""
        className="absolute top-0 left-0 -translate-y-1/2 w-48 sm:w-60 h-auto hidden sm:block pointer-events-none"
      />
      <SectionHeader title="Skills" number="03" />

      <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 sm:mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {category.items.map((skill) => (
                <SkillPill
                  key={skill.name}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
