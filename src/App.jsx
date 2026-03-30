import "./App.css";
import Banner from "./components/main/banner/Banner";
import StepSection from "./components/main/stepsection/StepSection";
import Navbar from "./components/navbar/Navbar";
import PricingSection from "./components/main/pricingsection/PricingSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <StepSection />
      <PricingSection/>
    </>
  );
};

export default App;
