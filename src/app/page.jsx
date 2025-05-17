import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Hero from './components/sections/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
    </main>
  );
}
