const SectionWrapper = ({ title, children }) => (
  <div className="panel-border panel-border-main p-6 bg-terminal-bg/40 border-l-4">
    <h2 className="text-xl text-cyber-accent mb-6 flex items-center">
      <span className="mr-2">▶</span>
      {title}
    </h2>
    {children}
  </div>
);

export default SectionWrapper;