import { profile } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const bgImg = `${import.meta.env.BASE_URL}images/home/about-me/resume-bg-img.svg`;

const About = () => (
  <section
    id="about"
    className="bg-muted py-12 sm:py-16 md:py-20 relative overflow-hidden"
  >
    <div className="absolute top-0 w-full px-4 sm:px-9 pointer-events-none opacity-40">
      <img src={bgImg} alt="" className="w-full h-auto" />
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeader title="About Me" number="01" />

      <div className="max-w-3xl">
        <p className="text-secondary text-base sm:text-lg whitespace-pre-line">
          {profile.about}
        </p>
      </div>
    </div>
  </section>
);

export default About;
