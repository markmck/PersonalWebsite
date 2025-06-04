import React from "react";

const AboutSection = () => (
    <div>
        <h2
            className="text-2xl text-cyber-accent mb-4t font-bold"
            style={{ color: "var(--color-cyber-secondary)" }}
        >
            Mark McKinney
        </h2>
        <div className="text-terminal-text space-y-2 pt-4">
            <p className="text-sm">
                DESIGNATION: Senior Full Stack Developer
            </p>
            <p className="text-sm">LOCATION: Irving, Texas</p>
            <p className=" text-sm">
                STATUS: Available for new opportunities
            </p>
            <div className="mt-4 p-4 border border-cyber-primary/30 bg-terminal-bg/100">
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
