import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Articles from '../components/articles';
import Contact from '../components/contact';
import Navigation from '../components/navigation';

export default async function Portfolio() {
  return (
    <div className="bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Articles/>
      <Contact />
    </div>
  );
}
