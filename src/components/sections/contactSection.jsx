import React from "react";
import LinkedinSquareIcon from "../../assets/linkedin-square-icon.svg"; // Update the import path as needed

const ContactSection = () => (
  <div className="grid-pattern max-w-md">
    <div className="space-y-4">
      {[
        { label: "EMAIL", value: "mmckinney0711@gmail.com", icon: "📧" },
        {
          label: "LINKEDIN",
          value: "https://www.linkedin.com/in/mark-mckinney-33a374b2/",
          icon: (
            <img
              src={LinkedinSquareIcon}
              alt="LinkedIn"
              className="inline-block w-6 h-6 icon-cyber-primary"
            />
          ),
        },
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
);

export default ContactSection;
