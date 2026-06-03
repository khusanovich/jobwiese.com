import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProcessFlow from '@/components/ProcessFlow';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProcessFlow />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
