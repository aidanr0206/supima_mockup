import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-[#1F2128] snap-y snap-mandatory overflow-scroll">
      <Navbar></Navbar>

      <section id="home" className="snap-center">
        <Home></Home>
      </section>

      <section id="partners" className="snap-center">
        <Partners></Partners>
      </section>

      {/* <section id="about" className="snap-center">
        <About></About>
      </section> */}

      <section id="services" className="snap-center">
        <Services></Services>
      </section>

      <section id="testimonials" className="snap-center">
        <Testimonials></Testimonials>
      </section>

      {/* <section id="projects" className="snap-center">
        <Projects></Projects>
      </section> */}

      <section id="contacts" className="snap-center">
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
