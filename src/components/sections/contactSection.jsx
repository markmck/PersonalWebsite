import React from "react";
import LinkedinSquareIcon from "../../assets/linkedin-square-icon.svg"; // Update the import path as needed

const ContactSection = () => (
    <div className="grid-pattern max-w-md">
        <div className="space-y-4">
            {[
                {
                    label: "EMAIL",
                    value: "mmckinney0711@gmail.com",
                    icon: "📧",
                    href: "mailto:mmckinney0711@gmail.com",
                },
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
                    href: "https://www.linkedin.com/in/mark-mckinney-33a374b2/",
                },
                {
                    label: "GITHUB",
                    value: "https://github.com/markmck",
                    icon: "⚡",
                    href: "https://github.com/markmck",
                },
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
                            {contact.href ? (
                                <a
                                    href={contact.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {contact.value}
                                </a>
                            ) : (
                                contact.value
                            )}
                        </p>
                    </div>
                    <span className="text-xl">{contact.icon}</span>
                </div>
            ))}
        </div>
    </div>
);

export default ContactSection;
