const Header = () => (
  <header className="absolute top-0 left-0 w-full z-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="py-7">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          <a href="#about" className="flex items-center gap-3 group">
            <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              BM
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-lg font-medium">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </a>
          </div>
          <a
            href="#contact"
            className="button-hover-effect px-6 py-4 sm:px-7 sm:py-5 border border-primary rounded-full bg-transparent text-lg sm:text-xl font-medium transition-all duration-300"
          >
            <span>Contact Me</span>
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
