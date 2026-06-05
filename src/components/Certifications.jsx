import { certifications } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const Certifications = () => (
  <section id="certifications" className="py-12 sm:py-16 md:py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Certifications" number="02" />

      <div className="space-y-8 sm:space-y-12">
        {certifications.map((cert, index) => (
          <div
            key={cert.title}
            className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8"
          >
            <div className="lg:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
                {cert.period}
              </h3>
              <h4 className="text-lg sm:text-xl font-normal text-primary">
                {cert.title}
              </h4>
            </div>

            <div
              className={`lg:col-span-1 ${
                index < certifications.length - 1 ? "timeline-line" : ""
              } pl-7 relative`}
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3.5 h-3.5 border-primary bg-white rounded-full flex items-center justify-center border">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <div>
                <span className="text-xl block mb-1 text-primary">
                  {cert.issuer}
                </span>
                <p className="text-secondary text-base">Professional learning</p>
              </div>
            </div>

            <div className="lg:col-span-1 lg:pl-8">
              <p className="text-secondary text-base leading-relaxed">
                {cert.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
