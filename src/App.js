import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Specialties from "./components/Specialties/Specialties";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Header />
      <main className="mb-7">
        <div className="page">
          <Hero />
          <AboutMe />
          <Specialties />
          <Portfolio />
          <Contact />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
