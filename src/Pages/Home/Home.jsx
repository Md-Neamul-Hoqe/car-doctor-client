import About from "./About/About";
import Banner from "./Banner/Banner";
import PProducts from "./PProducts/PProducts";
import PhotoGallery from "./PhotoGallery/PhotoGallery";
import Services from "./Services/Services";
import Stat from "./Stat/Stat";
import Team from "./Team/Team";

const Home = () => {
  return (
    <>
      <Banner />
      <PhotoGallery />
      <About />
      <Services />
      <Stat />
      <PProducts />
      <Team />
    </>
  );
};

export default Home;
