import { Galler } from "../components/Home/Gallery/Galler";
import { About } from "../components/Home/hero_caurosal/About/About";
import HeroCarousel from "../components/Home/hero_caurosal/hero_caurosal";

const Home = () => {
    return (
      <>
      <HeroCarousel/>
      <About/>
      <Galler/>
      </>
    );
  };
  
  export default Home;  // ✅ Ensure this line is present
  