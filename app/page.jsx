import DemoDialog from "@/components/DemoDialog";
import DemoNotice from "@/components/DemoNotice";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MotionObserver from "@/components/MotionObserver";
import About from "@/components/sections/About";
import Club from "@/components/sections/Club";
import Contact from "@/components/sections/Contact";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Page() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Products />
        <Club />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <p className="portfolio-badge" role="note">
        Projeto conceito <span aria-hidden="true">·</span> não é o site oficial
      </p>
      <DemoDialog>
        <DemoNotice
          back={
            <form method="dialog">
              <button className="button button--line" type="submit">Voltar ao site</button>
            </form>
          }
        />
      </DemoDialog>
      <MotionObserver />
    </>
  );
}
