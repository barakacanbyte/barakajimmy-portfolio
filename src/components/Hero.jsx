import { profile } from "../data/portfolioData";
import ContactBar from "./ContactBar";

const Highlight = ({ children }) => (
  <span className="text-primary font-bold">{children}</span>
);

const Hero = () => (
  <section className="pt-32 sm:pt-40 lg:pt-52 pb-12 lg:pb-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-7 max-w-3xl mx-auto text-center items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-primary underline">{profile.name}</span>
          </h1>
          <h1 className="text-4xl mt-4 sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            A <i>{profile.heroRole}</i>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-secondary mt-4">
            Practising and sharpening my skills on{" "}
            <Highlight>DevOps</Highlight> and{" "}
            <Highlight>Cyber Security</Highlight>
          </p>
        </div>
        <p className="text-secondary text-base sm:text-lg">
          <span className="typing-dots">i build and explore on </span>
          <Highlight>Blockchain/Web3</Highlight>
          <span className="blink-cursor">|</span>
        </p>
        <ContactBar />
      </div>
    </div>
  </section>
);

export default Hero;
