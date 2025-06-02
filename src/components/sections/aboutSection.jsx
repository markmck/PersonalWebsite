import React from "react";

const AboutSection = () => (
  <div className="grid-pattern">
    <h2 className="text-2xl font-mono text-cyber-accent mb-4t">
      Mark McKinney
    </h2>
    <div className="text-terminal-text space-y-2">
      <p className="font-mono text-sm">
        DESIGNATION: Senior Full Stack Developer
      </p>
      <p className="font-mono text-sm">LOCATION: Irving, Texas</p>
      <p className="font-mono text-sm">
        STATUS: Available for new opportunities
      </p>
      <div className="mt-4 p-4 border border-cyber-primary/30 bg-terminal-bg/50">
        <p className="text-sm">
          Experienced software engineer specializing in modern web technologies.
          Passionate about creating efficient, scalable solutions and staying
          current with emerging technologies in the software development
          landscape.
        </p>
      </div>
    </div>
  </div>
);

export default AboutSection;
