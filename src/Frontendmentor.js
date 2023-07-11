import Header from "./components/Frontendmentor/Header/Header";
import Footer from "./components/Footer/Footer";
import BackToTop from "./components/BackToTop/BackToTop";
import Title from "./components/Title/Title";
import Projects from "./components/Frontendmentor/Projects/Projects";

export default function Frontendmentor() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <Header />
      <main className="flex justify-center mb-7 py-7">
        <div className="max-w-7xl page">
          <Title title={`Projects`} />
          <Projects />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
