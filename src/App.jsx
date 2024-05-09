import Cta from "./components/cta/Cta";
import FlowerSection from "./components/flowerSection/flowerSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import OpenSection from "./components/openSection/openSection";
import Pastries from "./components/pastries/Pastries";
import Reservation from "./components/reservation/Reservation";
import Stats from "./components/stats/Stats";
import Wrapper from "./components/wrapper/Wrapper";


function App() {
  return (
    <div>
      <Wrapper />
      <Navbar/>
      <Hero/>
      <Stats  maxRange={0}/>
      <OpenSection/>
      <FlowerSection/>
      <Cta/>
      <Pastries/>
      <Reservation/>
      <Footer/>
    </div>
  );
}

export default App;
