import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experienceData from "../../assets/data/experience.json";

const Experience = () => {
  return (
    <div id="experience"  className="bg-deep-blue text-white py-12 px-5 md:px-40">
      <div className="flex flex-col w-full justify-center items-center mb-20 text-center">
        <p className="text-blue-300 md:text-lg mb-1 md:mb-3">
          What I have done so far
        </p>
        <p className="text-white text-5xl md:text-6xl font-bold">
          Work Experience.
        </p>
      </div>
      <VerticalTimeline>
        {experienceData.map((experience, index) => (
          <VerticalTimelineElement
            key={experience.id}
            className={`vertical-timeline-element--${experience.type}`}
            contentStyle={{
              background: "#1A1A2E", // A slightly lighter shade than `deep-blue`
              color: "#EAEAEA", // Light text for better readability
              boxShadow: "0 0 15px rgba(94, 59, 238, 0.5)", // Primary color glow
              border: "2px solid rgba(94, 59, 238, 0.5)", // Primary color border
              borderRadius: "10px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #5E3BEE" }} // Primary color arrow
            date={experience.period}
            dateClassName="text-blue-300"
            iconStyle={{
              background: index % 2 === 0 ? "#5E3BEE" : "#38b2ac", // Alternate colors
              color: "#fff",
            }}
            icon={
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
                style={{ borderRadius: "50%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title text-xl md:text-2xl font-bold text-white">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle md:text-lg text-blue-300">
              {experience.company}
            </h4>
            <ul className="mt-3 list-disc list-inside">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="text-gray-300 text-sm md:text-lg mb-3">
                  {desc}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
