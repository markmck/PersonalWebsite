import React from "react";

const SkillsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        category: "Frontend",
        skills: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
        level: 85,
      },
      {
        category: "Backend",
        skills: ["Node.js", ".Net", "APIs", "Databases"],
        level: 80,
      },
      {
        category: "Cloud",
        skills: ["AWS", "AZURE", "Docker", "CI/CD"],
        level: 75,
      },
      {
        category: "Tools",
        skills: ["Git", "VS Code", "Agile", "WSL"],
        level: 90,
      },
    ].map((skillGroup, index) => (
      <div key={index} className="panel-border p-4 bg-terminal-bg/30">
        <h3 className="text-cyber-accent text-lg mb-2">
          {skillGroup.category}
        </h3>
        <div className="mb-3">
          <div className="w-full bg-terminal-surface h-2 mb-2">
            <div
              className="bg-gradient-to-r from-cyber-secondary to-cyber-accent h-2 glow-red"
              style={{ width: `${skillGroup.level}%` }}
            ></div>
          </div>
          <span className="text-terminal-muted text-xs">
            {skillGroup.level}% PROFICIENCY
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {skillGroup.skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="text-xs bg-cyber-dark/30 text-cyber-light px-2 py-1 border border-cyber-primary/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default SkillsSection;
