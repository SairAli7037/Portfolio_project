import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Portfolio() {
  const { currentSection } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header currentSection={currentSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}