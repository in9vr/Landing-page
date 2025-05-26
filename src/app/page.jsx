'use client';

import About from './components/sections/About';
import Catalogue from './components/sections/Catalogue';
import Gallery from './components/sections/Gallery';
import Hero from './components/sections/Hero';
import Map from './components/sections/Map';
import WhyUs from './components/sections/WhyUs';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <WhyUs />
      <Catalogue />
      <Map />
    </main>
  );
}
