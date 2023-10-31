import About from "./About/About";
import Banner from "./Banner/Banner";
import PProducts from "./PProducts/PProducts";
import Services from "./Services/Services";
import Stat from "./Stat/Stat";
import Team from "./Team/Team";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Services />
      <Stat />
      <PProducts />
      <Team/>
    </>
  );
};

export default Home;
