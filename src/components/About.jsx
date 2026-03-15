import React from "react";


function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">

    
        <div className="flex justify-center">
          <img
            src="/assets/projects/profile.png"
            alt="Akash Chaursiya"
            className="w-72 rounded-xl shadow-lg"
          />
        </div>

  
        <div className="text-gray-100 leading-relaxed">

          <p className="mb-4">
            Hi, I'm <strong>Akash Chaursiya</strong>, a passionate
            <strong className="text-blue-600"> Frontend Developer</strong> focused on building
            responsive and user-friendly web applications.
          </p>

          <p className="mb-4">
            I work with modern technologies like
            <strong> React, JavaScript, HTML, CSS</strong> and
            frameworks such as <strong>Tailwind CSS</strong> to create
            clean and interactive user interfaces.
          </p>

          <p className="mb-4">
            I enjoy transforming ideas and designs into real,
            functional websites while continuously improving my
            development skills.
          </p>

          <p>
            Currently, I’m looking for an opportunity as a
            <strong> Frontend Developer</strong> where I can contribute,
            learn from experienced developers, and grow in the tech
            industry.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;