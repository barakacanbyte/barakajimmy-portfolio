const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center w-full">
            <div className="flex-grow h-px bg-black" />
            <div className="mx-4">
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary flex items-center justify-center text-2xl sm:text-3xl font-bold text-primary">
                BM
              </span>
            </div>
            <div className="flex-grow h-px bg-black" />
          </div>
          <p className="text-secondary mt-4 text-center">© {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
