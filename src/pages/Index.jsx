
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Stats from '../components/sections/Stats';
import Services from '../components/sections/Services';
import Portfolio from '../components/sections/Portfolio';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Contact />
    </Layout>
  );
};

export default Index;
