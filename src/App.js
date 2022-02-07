import Header from "./components/Header";
import Roadmap from "./components/Roadmap";
import Canvas from "./components/Canvas";
import ProjectRoadmap from "./components/ProjectRoadmap";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Mint from "./components/Mint";
import Grid from "./components/Grid";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Traits from "./components/Traits";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Mint />
        <Gallery />
        <Traits />
        <Team />
        <Roadmap />
        <ProjectRoadmap />

        <FAQ />
        {/* <Grid /> */}
      </main>
      <Footer />
      {/* <Canvas></Canvas> */}
    </>
  );
};

export default App;
