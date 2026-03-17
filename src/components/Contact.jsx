import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_97esvmc",
        "template_j9m9fv2",
        formData,
        "CPITvH5AdfwKYg6C9"
      )
      .then(() => {
        alert(`Thank you for reaching out, ${formData.name}!`);
        setFormData({
          name: "",
          email: "",
          message: ""
        });
        setLoading(false);
      })
      .catch((error) => {
        alert("Error sending message.");
        console.error(error);
        setLoading(false);
      });
  };


  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-12">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

     
        <div className="space-y-6 text-center md:text-left">

          <p className="text-gray-400">
            If you have any project or job opportunity, feel free to contact me.
          </p>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-orange-600 text-xl" />
            <span>akashchaursiya381@gmail.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-xl" />
            <a
              href="https://github.com/Akashchaursiya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              github.com/Akashchaursiya
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="text-blue-600 text-xl" />
            <a
              href="https://www.linkedin.com/in/akashchaursiya-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              LinkedIn Profile
            </a>
          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 text-black border rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3  text-black border rounded-md"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3  text-black border rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;