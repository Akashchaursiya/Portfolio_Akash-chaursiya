import React from 'react';

const projects = [
    {
        title: 'E-commerce Product Page',
        description: 'A dynamic e-commerce product page built with React and Tailwind CSS.',
        link: 'https://github.com/Akashchaursiya/E-commerce-Product-page.git',
        github: 'https://github.com/Akashchaursiya/Ecommerce-productpage',
        linkedin: 'https://www.linkedin.com/posts/akashchaursiya_reactjs-webdevelopment-tailwindcss-activity-7243666395534692353-BF0o?utm_source=share&utm_medium=member_android'
    },
    {
        title: 'Weather Dashboard',
        description: 'A simple weather dashboard that fetches data from a weather API.',
        link: '#',
        github: 'https://github.com/Akashchaursiya/Weather-Dashboard.git',
        linkedin: 'https://www.linkedin.com/posts/akashchaursiya_reactjs-webdevelopment-tailwindcss-activity-7239763713828794368-o4IL?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'E-commerce Landing Page',
        description: 'A dynamic e-commerce landing page built with React and Tailwind CSS.',
        link: 'https://github.com/Akashchaursiya/E-commerce-Product-page.git',
        github: 'https://github.com/Akashchaursiya/E-commerce-Landing-page',
        linkedin: 'https://www.linkedin.com/posts/akashchaursiya_e-commerce-landing-page-website-in-react-activity-7236747574865539073-rpEu?utm_source=share&utm_medium=member_desktop'
    },
    {
        title: 'Package JSON Reader',
        description: 'An online tool for reading and managing package JSON details.',
        link: 'https://packagejson.net/',
        github: 'https://github.com/Akashchaursiya/package-json-reader',
    },
];

function Projects() {
    return (
        <div className="max-w-screen-xl mx-auto p-5">
            <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
            <div className="grid grid-cols-1 p-4 sm:grid-cols-2 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="border p-3 rounded-md shadow-md">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="mt-1 text-sm">{project.description}</p>
                        {project.title === 'Package JSON Reader' ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-3 px-3 py-1 bg-orange-700 text-white text-sm rounded-md hover:bg-orange-600"
                            >
                                View Project
                            </a>
                        ) : (
                            <>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-3 px-3 py-1 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-500"
                                >
                                    View Code
                                </a>
                                {project.linkedin && (
                                    <a
                                        href={project.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-3 ml-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-500"
                                    >
                                        Watch Demo Video
                                    </a>
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
