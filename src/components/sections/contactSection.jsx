import React from "react";
import LinkedinSquareIcon from "../../assets/linkedin-square-icon.svg"; 
import EnvelopeIcon from "../../assets/envelope-icon.svg"; 
import BranchingIcon from "../../assets/branching-icon.svg"; 

const ContactSection = () => (
    <div className="max-w-md">
        <div className="space-y-4">
            {[
                {
                    label: "EMAIL",
                    value: "mmckinney0711@gmail.com",
                    icon: (
                        <img
                            src={EnvelopeIcon}
                            alt="Email"
                            className="inline-block w-6 h-6"
                        />
                    ),                    href: "mailto:mmckinney0711@gmail.com",
                },
                {
                    label: "LINKEDIN",
                    value: "https://www.linkedin.com/in/mark-mckinney-33a374b2/",
                    icon: (
                        <img
                            src={LinkedinSquareIcon}
                            alt="LinkedIn"
                            className="inline-block w-6 h-6"
                        />
                    ),
                    href: "https://www.linkedin.com/in/mark-mckinney-33a374b2/",
                },
                {
                    label: "GITHUB",
                    value: "https://github.com/markmck",
                    icon: (
                        <img
                            src={BranchingIcon}
                            alt="Github"
                            className="inline-block w-6 h-6"
                        />
                    ),                    href: "https://github.com/markmck",
                },
            ].map((contact, index) => (
                <div
                    key={index}
                    className="p-3 border border-cyber-primary/30 bg-terminal-bg/100 flex items-center justify-between"
                >
                    <div>
                        <span className="text-cyber-primary text-sm">
                            {contact.label}
                        </span>
                        <p className="text-terminal-text text-sm">
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
