import {
  Navbar,
  Hero,
  Billing,
  Business,
  Clients,
  CardDeal,
  Testimonials,
  CTA,
  Footer,
} from "./components";

export default function Home() {
  return (
    <main className="bg-primary w-full overflow-hidden font-poppins">
      <header className="paddingX flexCenter">
        <nav className="boxWidth">
          <Navbar />
        </nav>
      </header>

      <section className="bg-primary flexStart">
        <section className="boxWidth">
          <Hero />
        </section>
      </section>

      <section className="bg-primary paddingX flexStart">
        <section className="boxWidth">
          <Business />
          
          {/* ✅ Depoimentos aparecem logo após os benefícios */}
          <Testimonials />

          <Clients />
          <Billing />
          <CardDeal />
          <CTA />
          <Footer />
        </section>
      </section>
    </main>
  );
}
