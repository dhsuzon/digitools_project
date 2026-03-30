import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Banner from "./components/main/banner/Banner";
import StepSection from "./components/main/stepsection/StepSection";


const App=()=>{
  return (
    <>
      <Navbar />
      <Banner/>
      <StepSection/>
      
    </>
  );
}

export default App;
