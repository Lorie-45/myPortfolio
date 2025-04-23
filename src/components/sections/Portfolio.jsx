import { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('portfolio');
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

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'Kambere Website',
      category: 'web',
      image: 'https://media.istockphoto.com/id/1353379254/photo/little-black-girl-playing-with-parents-at-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=6q42yyze4fRPZ_IWaL6ftzxJybcQFXTgFuuy42WrXAs=',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: 'https://github.com/Lorie-45/Kambere_Web_FE',
      description: 'A full-stack family cohesion platform with user authentication, family management, and chatbot integration.',
    },
    {
      id: 2,
      title: 'Patient Referral Backend ',
      category: 'web',
      image: 'https://thumbs.dreamstime.com/b/smiling-happy-patients-their-doctor-personalized-medicine-healthcare-vector-concept-smiling-happy-patients-102376168.jpg',
      tags: ['FastAPI', 'Django'],
      demoLink: '#',
      codeLink: 'https://github.com/Lorie-45/fastApi_patient_referral_system',
      description: 'A web app that provides ability to create patients and assing hospitals to them',
    },
    {
      id: 3,
      title: 'Mental Health Website',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      tags: ['Figma', 'Photoshop'],
      demoLink: '#',
      figmaLink: 'https://www.figma.com/design/OtiU0tN161I7quAizgbrdu/Mentee?node-id=0-1&t=23fApQyLo7BWoUuj-1',
      description: 'A mental health website for accessing therapists and peers.',
    },
    {
      id: 4,
      title: 'Mern Project',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd',
      tags: ['Reactjs', 'Nodejs', 'MongoDB'],
      demoLink: '#',
      codeLink: 'https://github.com/Lorie-45/mern-project',
      description: 'A simple online store with product management and user authentication ',
    },
    {
      id: 5,
      title: 'Sarura App Design',
      category: 'design',
      image: 'https://media.istockphoto.com/id/1132884861/photo/farmer-checking-touchpad-in-nappa-cabbage-fram-in-summer.webp?a=1&b=1&s=612x612&w=0&k=20&c=G0-YEbCR6-QIyGR69bhfHcPIHZnPEUBtzjxFnUyCWJU=',
      tags: ['React Native', 'Java', 'Figma'],
      demoLink: '#',
      figmaLink: 'https://www.figma.com/proto/0XLDoX42tCEFzVWguoXaGu/sarura?node-id=221-966&t=TusPK1k7avit5jeA-1',
      description: 'An app for farmers to indentify and online markerting',
    },
    {
      id: 6,
      title: 'Kura Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      tags: ['Figma', 'Branding'],
      demoLink: '#',
      // Use a sample Figma link for demonstration
      figmaLink: 'https://www.figma.com/proto/KtLjb6L3X8fCRFQy1KZXzT/Kura?node-id=0-1&t=b6mNkMNZ592NGkKT-1', 
      description: 'Mobile app for nutrition tracking and meal preparation for infants',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Portfolio</h2>
          <p className="text-portfolio-text mt-4 max-w-2xl mx-auto">
            Check out some of my latest projects that showcase my skills and expertise.
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'web', 'app', 'design'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                filter === category
                  ? 'bg-portfolio-primary text-white'
                  : 'bg-gray-100 text-portfolio-text hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group overflow-hidden rounded-lg shadow-md transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs bg-portfolio-primary/80 text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      {/* For design category, show View Design (Figma), else View Code (GitHub) */}
                      {project.category === "design" && project.figmaLink ? (
                        <a
                          href={project.figmaLink}
                          className="text-white bg-portfolio-dark/80 hover:bg-portfolio-dark px-3 py-1 rounded text-sm flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* Figma Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#fff"/><rect x="7" y="2" width="10" height="6" rx="3" fill="#1abcfe"/><rect x="7" y="8" width="10" height="6" rx="3" fill="#0acf83"/><rect x="7" y="14" width="4" height="6" rx="2" fill="#ff7262"/><rect x="11" y="14" width="6" height="6" rx="3" fill="#f24e1e"/></svg>
                          View Design
                        </a>
                      ) : (
                        <a
                          href={project.codeLink}
                          className="text-white bg-portfolio-dark/80 hover:bg-portfolio-dark px-3 py-1 rounded text-sm flex items-center gap-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {/* External Link Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none"><path d="M14 3H21V10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3H10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Info (visible by default) */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-portfolio-dark mb-2">{project.title}</h3>
                <p className="text-portfolio-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-100 text-portfolio-text px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
