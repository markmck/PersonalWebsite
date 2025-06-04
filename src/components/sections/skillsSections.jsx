import React from "react";

const SkillsSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
      {
        category: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "HTML/CSS",
          "Sass/SCSS",
          "Tailwind CSS",
          "Jest",
          "Webpack",
          "Vite",
          "Storybook",
        ],
      },
      {
        category: "Backend",
        skills: [
          ".Net",
          "REST",
          "GraphQL",
          "MSSQL",
          "PostgreSQL",
          "ORMs",
          "Node.js",
          "Authentication",
          "Authorization",
          "API Design",
          "Microservices",
          "Unit Testing",
          "Caching",
          "Message Queues",
        ],
      },
      {
        category: "Cloud",
        skills: [
          "AWS",
          "AZURE",
          "Docker",
          "Serverless",
          "Cloud Functions",
          "Load Balancing",
          "Monitoring",
        ],
      },
      {
        category: "Tools & Concepts",
        skills: [
          "Git",
          "VS Code",
          "Agile",
          "Scrum",
          "Service Oriented Architecture",
          "Figma",
          "JIRA",
          "ADO",
          "Design Systems",
          "WSL",
          "Linux",
          "Bash",
          "DevOps",
          "CI/CD",
          "GitHub Actions",
        ],
      },
    ].map((skillGroup, index) => (
      <div
        key={index}
        className="p-4 border border-cyber-primary/30 bg-terminal-bg/100"
      >
        <h3 className="text-cyber-primary text-lg mb-2">
          {skillGroup.category}
        </h3>
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
