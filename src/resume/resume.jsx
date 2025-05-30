import React, { useState, useEffect } from "react";
import "./resume.css";

const CyberpunkResume = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [scanLinePosition, setScanLinePosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLinePosition((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const sections = {
    about: {
      title: "PERSONAL_DATA.exe",
      content: (
        <div className="grid-pattern">
          <h2 className="text-2xl font-mono text-cyber-accent mb-4 glitch-text">
            Mark Thompson
          </h2>
          <div className="text-terminal-text space-y-2">
            <p className="font-mono text-sm">
              DESIGNATION: Full Stack Developer
            </p>
            <p className="font-mono text-sm">LOCATION: Irving, Texas</p>
            <p className="font-mono text-sm">
              CLEARANCE: Available for Remote Work
            </p>
            <div className="mt-4 p-4 border border-cyber-primary/30 bg-terminal-bg/50">
              <p className="text-sm">
                Experienced developer specializing in modern web technologies.
                Passionate about creating efficient, scalable solutions and
                staying current with emerging technologies in the software
                development landscape.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    skills: {
      title: "TECH_STACK.dll",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              category: "Frontend",
              skills: ["React", "TypeScript", "JavaScript", "HTML/CSS"],
              level: 85,
            },
            {
              category: "Backend",
              skills: ["Node.js", "Python", "APIs", "Databases"],
              level: 80,
            },
            {
              category: "Cloud",
              skills: ["AWS", "S3", "Docker", "CI/CD"],
              level: 75,
            },
            {
              category: "Tools",
              skills: ["Git", "VS Code", "Linux", "Agile"],
              level: 90,
            },
          ].map((skillGroup, index) => (
            <div key={index} className="panel-border p-4 bg-terminal-bg/30">
              <h3 className="text-cyber-accent font-mono text-lg mb-2">
                {skillGroup.category}
              </h3>
              <div className="mb-3">
                <div className="w-full bg-terminal-surface h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-cyber-secondary to-cyber-accent h-2 glow-red"
                    style={{ width: `${skillGroup.level}%` }}
                  ></div>
                </div>
                <span className="text-terminal-muted text-xs font-mono">
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
      ),
    },
    experience: {
      title: "WORK_HISTORY.log",
      content: (
        <div className="space-y-4">
          {[
            {
              company: "TechCorp Solutions",
              role: "Senior Developer",
              period: "2022 - Present",
              achievements: [
                "Led team of 5 developers",
                "Reduced load times by 40%",
                "Implemented CI/CD pipeline",
              ],
            },
            {
              company: "Digital Innovations Inc",
              role: "Full Stack Developer",
              period: "2020 - 2022",
              achievements: [
                "Built responsive web applications",
                "Integrated third-party APIs",
                "Mentored junior developers",
              ],
            },
            {
              company: "StartupXYZ",
              role: "Frontend Developer",
              period: "2018 - 2020",
              achievements: [
                "Developed React components",
                "Optimized for mobile",
                "Collaborated with design team",
              ],
            },
          ].map((job, index) => (
            <div key={index} className="panel-border p-4 bg-terminal-bg/20">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-cyber-accent font-mono text-lg">
                  {job.company}
                </h3>
                <span className="text-terminal-muted text-sm font-mono">
                  {job.period}
                </span>
              </div>
              <h4 className="text-terminal-text font-mono mb-3">{job.role}</h4>
              <ul className="space-y-1">
                {job.achievements.map((achievement, achIndex) => (
                  <li
                    key={achIndex}
                    className="text-terminal-muted text-sm flex items-center"
                  >
                    <span className="text-cyber-primary mr-2">▶</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    contact: {
      title: "CONTACT_PROTOCOL.ini",
      content: (
        <div className="grid-pattern max-w-md">
          <div className="space-y-4">
            {[
              { label: "EMAIL", value: "mark@example.com", icon: "📧" },
              { label: "LINKEDIN", value: "/in/markthompson", icon: "🔗" },
              { label: "GITHUB", value: "/markthompson-dev", icon: "⚡" },
              { label: "PORTFOLIO", value: "markthompson.dev", icon: "🌐" },
            ].map((contact, index) => (
              <div
                key={index}
                className="panel-border p-3 bg-terminal-bg/30 flex items-center justify-between"
              >
                <div>
                  <span className="text-cyber-accent font-mono text-sm">
                    {contact.label}
                  </span>
                  <p className="text-terminal-text font-mono text-sm">
                    {contact.value}
                  </p>
                </div>
                <span className="text-xl">{contact.icon}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(239,68,68,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(239,68,68,0.1) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Header */}
      <header className="relative z-20 p-6 border-b border-terminal-border">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-mono text-cyber-accent mb-2 glitch-text">
            SYSTEM_RESUME_v2.1.0
          </h1>
          <p className="text-terminal-muted font-mono text-sm">
            {">"} Initializing personal data interface...
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 font-mono text-sm border transition-all duration-300 ${
                  activeSection === section
                    ? "bg-cyber-secondary/20 border-cyber-primary text-cyber-accent glow-red"
                    : "border-terminal-border text-terminal-muted hover:border-cyber-primary/60 hover:text-cyber-light"
                }`}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="panel-border p-6 bg-terminal-bg/40">
            <h2 className="text-xl font-mono text-cyber-accent mb-6 flex items-center">
              <span className="mr-2">▶</span>
              {sections[activeSection].title}
            </h2>
            {sections[activeSection].content}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CyberpunkResume;
