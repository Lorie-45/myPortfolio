
import { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
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
  
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-portfolio-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Building responsive, user-friendly websites and web applications using modern technologies like React, Next.js, and Tailwind CSS.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-portfolio-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile applications with React Native that deliver native-like performance and experience.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-portfolio-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: 'Backend Development',
      description: 'Developing robust and secure backend systems with Node.js, Express, and MongoDB to power your applications.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-portfolio-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and experiences that are both aesthetically pleasing and functional.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-portfolio-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: 'API Development',
      description: 'Creating RESTful APIs or GraphQL endpoints that efficiently connect your frontend and backend systems.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-portfolio-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Performance Optimization',
      description: 'Improving your website or app performance through code optimization, caching strategies, and best practices.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">My Services</h2>
          <p className="text-portfolio-text mt-4 max-w-2xl mx-auto">
            I offer a wide range of services to help businesses and individuals establish their online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 duration-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${150 * index}ms` }}
            >
              <div className="mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-portfolio-dark">{service.title}</h3>
              <p className="text-portfolio-text">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold mb-4 text-portfolio-dark">Need a custom service?</h3>
          <p className="text-portfolio-text mb-6 max-w-2xl mx-auto">
            If you have a specific project in mind that doesn't fit into these categories,
            feel free to reach out. I'm always open to new challenges!
          </p>
          <a href="#contact" className="btn-primary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
