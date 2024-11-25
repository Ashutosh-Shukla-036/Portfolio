import { Link } from "react-router-dom";

const Home = () => (
    <div className="container mx-auto px-6 py-16 text-center rounded-3xl shadow-lg bg-gradient-to-r">
      <h1 className="text-5xl font-extrabold text-white mb-6 animate__animated animate__fadeIn">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-200 mb-8 leading-7 animate__animated animate__fadeIn animate__delay-1s">
        Hi, I’m <strong>Ashutosh Shukla</strong>, a passionate developer with expertise in backend development, React.js, and MongoDB.
        Explore my projects and journey through this portfolio!
      </p>
      <Link
        to="/projects"
        className="inline-block bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 animate__animated animate__zoomIn"
      >
        View My Work
      </Link>
      
      <div className="mt-12">
        <p className="text-lg text-gray-200 leading-7 animate__animated animate__fadeIn animate__delay-2s">
          Let’s connect and build something great together!
        </p>
      </div>
  
      {/* Additional Section: Skills & Achievements */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-4 animate__animated animate__fadeIn animate__delay-3s">
          My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Skill List */}
          {[
            "React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Python", "Git", "HTML & CSS"
          ].map((skill) => (
            <div key={skill} className="bg-gray-400 text-center text-gray-800 rounded-lg shadow-md p-4 animate__animated animate__fadeIn animate__delay-4s">
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
  
      {/* Call to Action */}
      <div className="mt-16">
        <p className="text-lg text-gray-200 leading-7 animate__animated animate__fadeIn animate__delay-5s">
          Interested in collaborating? Let's build something amazing together. Feel free to reach out to me anytime!
        </p>
        <a
          href="mailto:ashutosh@example.com"
          className="inline-block mt-4 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 animate__animated animate__zoomIn"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
  
  export default Home;
  