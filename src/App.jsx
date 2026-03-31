import "./App.css";
import Banner from "./components/main/banner/Banner";
import StepSection from "./components/main/stepsection/StepSection";
import Navbar from "./components/navbar/Navbar";
import PricingSection from "./components/main/pricingsection/PricingSection";
import WorkFlowSection  from "./components/main/workflowsection/WorkFlowSection.jsx";
import Footer from "./components/main/footer/Footer.jsx";
import StatsSection from "./components/main/statusSection/StatsSection.jsx";
import ToggleButtons from "./components/main/tooglebuttons/ToggleButtons.jsx"


const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      < StatsSection/>
      <ToggleButtons/>
      <StepSection />
      <PricingSection/>
      <WorkFlowSection/>
      <Footer/>
    </>
  );
};

export default App;
