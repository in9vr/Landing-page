import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Hero from './components/sections/Hero';
import WhyUs from './components/sections/WhyUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <WhyUs />
    </main>
  );
}
