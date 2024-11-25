const Projects = () => (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          {
            name: "Reactify",
            description: "A full-stack transaction management app.",
            link: "https://github.com/Ashutosh-Shukla-036/Payment_Application",
            techStack: "React, Node.js, Express, MongoDB",
          },
          {
            name: "DSA in Python",
            description: "Comprehensive repository of algorithms.",
            link: "https://github.com/Ashutosh-Shukla-036/DSA-in-Python",
            techStack: "Python"
          },
          {
            name: "ChatApp",
            description: "A real-time chat application with WebSocket.",
            link: "https://github.com/Ashutosh-Shukla-036/ChatApp",
            techStack: "React, Node.js, Express, WebSocket",
          },
          {
            name: "Aprameya Productions",
            description: "Showcasing creativity in storytelling.",
            link: "https://github.com/Ashutosh-Shukla-036/Aprameya",
            techStack: "TypeScript, React, Node.js, MongoDB",
          },
        ].map((project) => (
          <div
            key={project.name}
            className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] rounded-3xl shadow-lg p-8 hover:scale-105 transition-all duration-500 ease-in-out transform"
          >
            <h3 className="text-3xl font-extrabold text-white">{project.name}</h3>
            <p className="text-gray-200 mt-3">{project.description}</p>
            <p className="text-gray-300 mt-3 italic">{project.techStack}</p>
            <a
              href={project.link}
              className="mt-5 text-white text-lg font-medium hover:text-[#ffdd57] hover:underline transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default Projects;
  