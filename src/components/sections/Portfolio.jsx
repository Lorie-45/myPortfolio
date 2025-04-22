
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
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.'
    },
    {
      id: 2,
      title: 'Weather App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
      tags: ['React Native', 'API Integration'],
      demoLink: '#',
      codeLink: '#',
      description: 'A mobile app that provides real-time weather information based on location.'
    },
    {
      id: 3,
      title: 'Task Management Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b',
      tags: ['React', 'Redux', 'Express'],
      demoLink: '#',
      codeLink: '#',
      description: 'A responsive dashboard for managing tasks, projects, and team collaboration.'
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd',
      tags: ['React Native', 'Firebase'],
      demoLink: '#',
      codeLink: '#',
      description: 'A mobile application for ordering food from local restaurants with real-time tracking.'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
      tags: ['MERN Stack', 'Socket.io'],
      demoLink: '#',
      codeLink: '#',
      description: 'A social networking platform with real-time messaging and content sharing.'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'app',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
      tags: ['React', 'D3.js', 'Node.js'],
      demoLink: '#',
      codeLink: '#',
      description: 'An app for tracking workouts and visualizing fitness progress with interactive charts.'
    },
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
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
          {['all', 'web', 'mobile', 'app'].map((category) => (
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
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
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
                        <span key={i} className="text-xs bg-portfolio-primary/80 text-white px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <a 
                        href={project.demoLink} 
                        className="text-white bg-portfolio-primary hover:bg-portfolio-primary/90 px-3 py-1 rounded text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.codeLink} 
                        className="text-white bg-portfolio-dark/80 hover:bg-portfolio-dark px-3 py-1 rounded text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
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
                    <span key={i} className="text-xs bg-gray-100 text-portfolio-text px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
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
