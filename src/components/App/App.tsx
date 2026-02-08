// import Footer from "../Footer/Footer";
import Header from "../../components/Header/Header.tsx";
import About from "../../sections/About/About.tsx";
import ArticlePage from "../../sections/Articles/ArticlePage.tsx";
import Feedbacks from "../../sections/Feedbacks/Feedbacks.tsx";
import Gallery from "../../sections/Gallery/Gallery.tsx";
import GetInTouch from "../../sections/GetInTouch/GetInTouch.tsx";
import Hero from '../../sections/Hero/Hero.tsx'
import Skills from "../../sections/Skills/Skills.tsx";
import WatchInterview from "../../sections/WatchInterview/WatchInterview.tsx";
import Footer from "../Footer/Footer.tsx";


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Skills />
        <Feedbacks />
        <WatchInterview />
        <ArticlePage />
        <GetInTouch/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
