import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { Element } from "react-scroll";

export default function Education() {
  return (
    <Element name="education">
      <div className="py-10 text-white">
        <h2 className="text-3xl text-center font-bold text-accent">
          Education & Courses
        </h2>
        <p className="text-center text-[#E5E7EB] mt-2 mb-8">
          This is all about my education.
        </p>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1f2937", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
            date="2020 - 2022"
            iconStyle={{ background: "#34D399", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-xl font-semibold">Higher School Certificate</h3>
            <h4 className="text-lg">Setabgonj Kamil Madrasah</h4>
            <p>GPA-5.00</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1f2937", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
            date="2023 - Going on"
            iconStyle={{ background: "#34D399", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-xl font-semibold">
              Diploma In Computer Science
            </h3>
            <h4 className="text-lg">Dinajpur Polytechnic Institute</h4>
            <p>2023 - Present in 3rd year</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#1f2937", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #1f2937" }}
            date="2024 - 2025"
            iconStyle={{ background: "#34D399", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="text-xl font-semibold">
              Complete Web Developement Course
            </h3>
            <h4 className="text-lg">Programming Hero Community</h4>
            <p>July 2024 - January 2025</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </Element>
  );
}
