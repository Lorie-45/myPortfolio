
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (!section) return;

      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Skills data
  const skills = [
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'MongoDB', percentage: 75 },
    { name: 'Express', percentage: 80 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Git/GitHub', percentage: 85 },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">About Me</h2>
          <p className="text-portfolio-text mt-4 max-w-2xl mx-auto">
            Get to know more about me, my experience, and my skills as a full stack developer.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-dark">Who I Am</h3>
            <div className="space-y-4 text-portfolio-text">
              <p>
                Hello! I'm a passionate Full Stack Developer with expertise in building modern web applications 
                using the MERN stack (MongoDB, Express, React, Node.js) and other cutting-edge technologies.
              </p>
              <p>
                With over 5 years of experience in web development, I specialize in creating 
                responsive, user-friendly, and efficient web solutions that solve real-world problems.
              </p>
              <p>
                I'm enthusiastic about clean code, best practices, and continuous learning. 
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source, or enjoying outdoor activities.
              </p>
            </div>

            {/* Personal Info */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="flex items-center">
                  <span className="font-medium mr-2 text-portfolio-dark">Name:</span>
                  John Doe
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <span className="font-medium mr-2 text-portfolio-dark">Email:</span>
                  contact@johndoe.com
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <span className="font-medium mr-2 text-portfolio-dark">From:</span>
                  New York, USA
                </p>
              </div>
              <div>
                <p className="flex items-center">
                  <span className="font-medium mr-2 text-portfolio-dark">Availability:</span>
                  <span className="text-portfolio-accent">Available for hire</span>
                </p>
              </div>
            </div>
            {/* CTA Button */}
            <div className="mt-8">
              <a 
                href="#" 
                download="john-doe-resume.pdf" 
                className="btn-primary inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          
          {/* Right Column - Only Skills, work experience removed */}
          <div>
            {/* Skills */}
            <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-2xl font-semibold mb-6 text-portfolio-dark">My Skills</h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-portfolio-dark">{skill.name}</span>
                      <span className="text-sm text-portfolio-text">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-portfolio-primary h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.percentage}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Work Experience REMOVED */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

