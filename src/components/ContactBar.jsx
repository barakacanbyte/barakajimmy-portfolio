import { profile } from "../data/portfolioData";

const icon = (name) => `${import.meta.env.BASE_URL}images/icon/${name}`;

const ContactBar = () => (
  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pt-6 text-sm sm:text-base text-secondary">
    <a
      href={`mailto:${profile.email}`}
      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
    >
      <img src={icon("mail-icon.svg")} alt="" className="w-4 h-4 opacity-70" />
      {profile.email}
    </a>
    <span className="text-muted hidden sm:inline" aria-hidden>
      ·
    </span>
    <a
      href={profile.phoneHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 hover:text-primary transition-colors"
    >
      <i className="fa-brands fa-whatsapp text-base" aria-hidden />
      {profile.phone}
    </a>
    <span className="text-muted hidden sm:inline" aria-hidden>
      ·
    </span>
    <div className="flex items-center gap-3">
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <i className="fa-brands fa-github text-lg" />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <i className="fa-brands fa-linkedin text-lg" />
      </a>
      <a
        href={profile.medium}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
        aria-label="Medium"
      >
        <i className="fa-brands fa-medium text-lg" />
      </a>
    </div>
  </div>
);

export default ContactBar;
