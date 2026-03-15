import React from 'react';

const projects = [
  {
    title: "E-commerce Product Page",
    description: "Dynamic product page with cart and variants.",
    tech: "React • Tailwind",
    image: "/assets/projects/ecommerce.png",
    github: "https://github.com/Akashchaursiya/Ecommerce-productpage",
    demo: "https://example.com"
  },
  {
    title: "Weather Dashboard",
    description: "Weather app using API to fetch live data.",
    tech: "React • API • Tailwind",
    image: "/assets/projects/weather.png",
    github: "https://github.com/Akashchaursiya/Weather-Dashboard",
    demo: "#"
  },
  {
    title: "Healthcare Dashboard",
    description: "Admin dashboard UI for healthcare analytics.",
    tech: "React • Tailwind",
    image: "/assets/projects/dashboard.png",
    github: "https://github.com/Akashchaursiya/healthcare-dashboard",
    demo: "https://healthcare-dashboard-one-kappa.vercel.app/"
  }
];

function Projects() {
    return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-8">

      <h2 className="text-4xl font-bold text-center mb-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl text-gray-700 shadow-md overflow-hidden hover:shadow-xl transition"
          >

         
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 overflow-hidden rounded-t-xl object-cover"
            />

    
            <div className="p-5">

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {project.description}
              </p>

           
              <p className="text-blue-600 text-sm mt-2">
                {project.tech}
              </p>

              <div className="flex gap-3 mt-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm bg-gray-800 text-white rounded-lg hover:bg-gray-700"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
export default Projects;
