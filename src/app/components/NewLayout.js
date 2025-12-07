import Header from './Header';
import Hero from './Hero';
import WhyDigiWave from './WhyDigiWave';
import ThreeTierModel from './ThreeTierModel';
import TechAdvantage from './TechAdvantage';
import WhatWeBuild from './WhatWeBuild';
import CTASection from './CTASection';
import Footer from './Footer';

export default function NewLayout() {
  return (
    <div id="home" className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <WhyDigiWave />
        <ThreeTierModel />
        <TechAdvantage />
        <WhatWeBuild />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
