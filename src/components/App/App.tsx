// import Footer from "../Footer/Footer";
import Header from "../../components/Header/Header.tsx";
import About from "../../sections/About/About.tsx";
import Feedbacks from "../../sections/Feedbacks/Feedbacks.tsx";
import Gallery from "../../sections/Gallery/Gallery.tsx";
import Hero from '../../sections/Hero/Hero.tsx'
import Skills from "../../sections/Skills/Skills.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Skills />
        <Feedbacks/>
      </main>
    </>
  );
}

export default App;
