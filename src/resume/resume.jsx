import React, { useState, useEffect } from "react";
import "./resume.css";
import Button from "../components/button/button.jsx";
import AboutSection from "../components/sections/aboutSection.jsx";
import SkillsSection from "../components/sections/skillsSections.jsx";
import ExperienceSection from "../components/sections/experienceSection.jsx";
import ContactSection from "../components/sections/contactSection.jsx";
import SectionWrapper from "../components/sectionWrapper/sectionWrapper.jsx";

const CyberpunkResume = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = {
    about: {
      title: "PERSONAL_DATA",
      content: <AboutSection />,
    },
    skills: {
      title: "TECH_STACK",
      content: <SkillsSection />,
    },
    experience: {
      title: "WORK_HISTORY",
      content: <ExperienceSection />,
    },
    contact: {
      title: "CONTACT_PROTOCOL",
      content: <ContactSection />,
    },
  };

  return (
    <div className="min-h-screen min-w-screen bg-terminal-bg text-white relative overflow-hidden">
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
          <h1
            className="text-3xl header-font text-cyber-accent mb-2 glitch"
            data-text="SYSTEM_RESUME"
          >
            SYSTEM_RESUME
          </h1>
          <p className="text-terminal-dim font-mono text-sm flex items-center">
            {">"} Initializing personal data interface...
            <span
              className="ml-1 inline-block w-2.5 h-4 bg-cyber-dark opacity-50"
              style={{
                animation: "terminal-blink 1s infinite",
                marginBottom: "2px",
              }}
            ></span>
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {Object.keys(sections).map((section) => (
              <Button
                label={sections[section].title}
                key={section}
                isActive={activeSection === section}
                onClick={() => setActiveSection(section)}
              ></Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-20 p-6">
        <div className="max-w-6xl mx-auto">
          <SectionWrapper title={sections[activeSection].title}>
            {sections[activeSection].content}
          </SectionWrapper>
        </div>
      </main>
    </div>
  );
};

export default CyberpunkResume;
