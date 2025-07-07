'use client';

import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy imports (melhor para performance)
const Business = dynamic(() => import('./components/Business'));
const Testimonials = dynamic(() => import('./components/Testimonials'));
const Clients = dynamic(() => import('./components/Clients'));
const Billing = dynamic(() => import('./components/Billing'));
const PricingPlans = dynamic(() => import('./components/PricingPlans'));
const CardDeal = dynamic(() => import('./components/CardDeal'));
const PrintGallery = dynamic(() => import('./components/PrintGallery'));
// --- NOVO COMPONENTE IMPORTADO ---
const Duvidas = dynamic(() => import('./components/Duvidas')); 
const CTA = dynamic(() => import('./components/CTA'));
const Footer = dynamic(() => import('./components/Footer'));


export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden font-poppins">
      <header className="paddingX flexCenter">
        <nav className="boxWidth">
          <Navbar />
        </nav>
      </header>

      <section className="bg-primary flexStart">
        <div className="boxWidth">
          <Hero />
        </div>
      </section>

      <section className="bg-primary paddingX flexStart">
        <div className="boxWidth">
          <Business />
          <Testimonials />
          <PrintGallery />
          <Clients />
          <Billing />
          <PricingPlans />
          <CardDeal />
          {/* --- NOVA SEÇÃO ADICIONADA AQUI --- */}
          <Duvidas /> 
          <CTA />
          <Footer />
        </div>
      </section>
    </main>
  );
}