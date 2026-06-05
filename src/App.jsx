import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="font-bricolage bg-white text-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
