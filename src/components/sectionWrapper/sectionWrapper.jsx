const SectionWrapper = ({ title, children }) => (
  <div className="panel-border p-6 bg-terminal-bg/40">
    <h2 className="text-xl font-mono text-cyber-accent mb-6 flex items-center">
      <span className="mr-2">▶</span>
      {title}
    </h2>
    {children}
  </div>
);

export default SectionWrapper;