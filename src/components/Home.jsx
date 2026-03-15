import React from "react";

function Home() {

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">

      <div className="max-w-xl text-center md:text-left">

        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-600">Akash Chaursiya</span>
        </h1>

        <p className="mt-4 text-gray-200">
          Frontend Developer | React Developer | WordPress Developer
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

        
          <a
            href="https://drive.google.com/file/d/1ZZ1OO3RYK-Rv6LeVxRZlgHqsFNxY2NBj/view"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

          <button
            onClick={scrollToProjects}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            View Projects
          </button>

        </div>
      </div>

    
      <div className="hidden md:block">
        <img
          src="/assets/bg1.png"
          alt="developer"
          className="w-43 h-auto object-cover "
        />
      </div>

    </section>
  );
}

export default Home;