import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaWordpressSimple, FaPencilRuler } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";

const skills = [
    { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> },
    { name: 'WordPress', icon: <FaWordpressSimple className="text-blue-700" /> },
    { name: 'UI/UX Design', icon: <FaPencilRuler className="text-purple-500" /> }
    
];

function Skills() {
    return (
        <div className="max-w-7xl mx-auto p-8 my-8">
            <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
            <div className="grid grid-cols-2 text-black sm:grid-cols-4 gap-9">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-110 hover:rotate-2 hover:shadow-xl duration-300 ease-in-out"
                    >
                        <div className="text-6xl mb-2 transition-transform transform hover:rotate-6 duration-300 ease-in-out">
                            {skill.icon}
                        </div>
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
