import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaWordpressSimple,
  FaPencilRuler
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "WordPress", icon: <FaWordpressSimple className="text-blue-700" /> },
  { name: "UI/UX Design", icon: <FaPencilRuler className="text-purple-500" /> }
];

function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
          >

            <div className="text-5xl mb-3">
              {skill.icon}
            </div>

            <h3 className="text-md font-semibold text-gray-700">
              {skill.name}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;