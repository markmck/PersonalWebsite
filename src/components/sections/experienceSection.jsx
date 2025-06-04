import React from "react";

const ExperienceSection = () => (
  <div className="space-y-4">
    {[
      {
        company: "Slalom Consulting",
        role: "Senior Software Engineer",
        period: "2021 - Present",
        achievements: [
          "Developed full-stack applications hosted in Azure using React, and .NET",
          "Collaborated with clients to revise requirements and ensure project alignment with business goals.",
          "Developed and implemented microservices in C# to enhance system modularity and improve scalability.",
          "Implemented CI/CD pipelines",
        ],
      },
      {
        company: "Allied Electronics and Automation",
        role: "Full Stack Developer",
        period: "2017 - 2021",
        achievements: [
          "Worked on enterprise level .Net-based ecommerce applications, emphasizeing performance and user experiences.",
          "Led creation of Vue.JS based CRM web application, centralizing lead generation for sales staff.",
          "Implemented DevOps principles and added CI/CD pipelines to increase deployment speed, decreasing the time to deploy.",
        ],
      },
      {
        company: "Fashion Glass and Mirror",
        role: "Software Engineer",
        period: "2016-2017",
        achievements: [
          "Implemented Inventory Management system to track and audit products and supplies, allowing for 100% accurate inventory audits and reducing time performing audits. Using Xamarin Forms, C# and SQL.",
          "Gathered business requirements, designing software architecture, implementing solutions and testing.",
        ],
      },
      {
        company: "Alliant Systems",
        role: "Full-Stack Developer",
        period: "2012 - 2016",
        achievements: [
          "Key contributor in the development and maintenance of VB.Net-based ERP monolithic application with over 2 millions lines of code and 200 custom implementations.",
          "Principal developer in Java-based Android App development and maintenance with over 2000 daily users.",
          "Contributor to the design, development, and maintenance of multiple SQL and SQLLite databases.",
        ],
      },
    ].map((job, index) => (
      <div key={index} className="panel-border p-4 bg-terminal-bg/20">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-cyber-accent text-lg">{job.company}</h3>
          <span className="text-terminal-muted text-sm">
            {job.period}
          </span>
        </div>
        <h4 className="text-terminal-text mb-3">{job.role}</h4>
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
);

export default ExperienceSection;
