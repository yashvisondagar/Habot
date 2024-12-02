import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header/index.jsx";
import Hero from "./components/Hero/Hero";
import SubHero from "./components/SubHero";
import YoutubeSection from "./components/Youtube";
import Supplier from "./components/Supplier";
import WorkSection from "./components/WorkSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SubHero />
      <YoutubeSection />
      <Supplier />
      <WorkSection />
      <Footer />
    </div>
  );
}

export default App;
