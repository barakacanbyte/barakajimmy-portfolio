const SectionHeader = ({ title, number }) => (
  <div className="flex items-center justify-between gap-4 border-b border-black pb-7 mb-10">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
      {title}
    </h2>
    <p className="text-xl text-primary">( {number} )</p>
  </div>
);

export default SectionHeader;
