import React from "react";
import {
  FaBook,
  FaGamepad,
  FaLeaf,
  FaMusic,
  FaPlane,
  FaRunning,
} from "react-icons/fa";
import { Element } from "react-scroll";

export default function AboutMe() {
  return (
    <Element name="aboutMe">
      <div className="text-white flex justify-center items-center">
        <div className="rounded-lg shadow-lg">
          <h2 className="text-3xl text-center font-bold text-accent mb-4">
            About Me
          </h2>
          <p className="text-[#E5E7EB] text-center mt-2 mb-8">
            Passionate web developer dedicated to creating modern, efficient,
            and user-friendly <br /> applications. Always eager to learn,
            innovate, and take on new challenges.
          </p>

          <p className="text-[#E5E7EB] mb-4">
            Hi, I'm a passionate web developer with a strong interest in
            building modern and efficient web applications. My programming
            journey started with simple HTML and CSS, and over time, I've
            developed skills in JavaScript, React, and Tailwind CSS. Currently,
            I'm exploring backend technologies like Node.js and MongoDB to
            become a full-stack developer.
          </p>

          <p className="text-[#E5E7EB] mb-4">
            I love solving problems and bringing creative ideas to life through
            code. My favorite projects involve designing interactive user
            experiences and optimizing performance. I always wanted to write
            clean, maintainable code that enhances user interaction and
            accessibility.
          </p>

          <p className="text-[#E5E7EB] mb-4">
            Outside of programming, I enjoy sports, especially cricket, which
            keeps me active. I also have a strong interest in gardening. When
            I'm not coding or playing sports, I love exploring new technologies
            and staying updated with the latest trends in web development.
          </p>

          <p className="text-[#E5E7EB] mb-4 flex items-center gap-2">
            <FaBook className="text-blue-400" />
            Here are some of my hobbies:
          </p>
          <ul className="list-disc list-inside text-[#E5E7EB] mb-4">
            <li className="flex items-center gap-2">
              <FaRunning className="text-yellow-400" /> Playing cricket
            </li>
            <li className="flex items-center gap-2">
              <FaLeaf className="text-green-400" /> Gardening
            </li>
            <li className="flex items-center gap-2">
              <FaBook className="text-blue-400" /> Reading tech blogs
            </li>
            <li className="flex items-center gap-2">
              <FaPlane className="text-red-400" /> Traveling
            </li>
            <li className="flex items-center gap-2">
              <FaMusic className="text-purple-400" /> Listening to music
            </li>
            <li className="flex items-center gap-2">
              <FaGamepad className="text-pink-400" /> Playing games
            </li>
          </ul>

          <p className="text-[#E5E7EB]">
            I believe that learning never stops, and I'm always open to new
            challenges and opportunities to grow as a developer. Let's connect
            and create something amazing together!
          </p>
        </div>
      </div>
    </Element>
  );
}
