import React, { useState, Suspense, use } from "react";
import "./App.css";
import Banner from "./components/main/banner/Banner";
import StepSection from "./components/main/stepsection/StepSection";
import Navbar from "./components/navbar/Navbar";
import WorkFlowSection from "./components/main/workflowsection/WorkFlowSection.jsx";
import Footer from "./components/main/footer/Footer.jsx";
import StatsSection from "./components/main/statusSection/StatsSection.jsx";
import ToggleButtons from "./components/main/tooglebuttons/ToggleButtons.jsx";
import ProductCard from "./components/productcard/ProductCard.jsx";
import {
  ProductProvider,
  useProductContext,
} from "./context/ProductContext.jsx";
import SelectedCart from "./components/selectedcard/SelectedCart.jsx";
import PricingSection from "./components/main/pricingsection/PricingSection.jsx";
import { ToastContainer} from "react-toastify";


const ProductList = () => {
  const { productPromise } = useProductContext();
  const products = use(productPromise);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <ProductProvider>
      <Navbar setActiveTab={setActiveTab} />
      <Banner />
      <StatsSection />

      <ToggleButtons activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="min-h-100">
        {activeTab === "products" ? (
          <Suspense
            fallback={
              <div className="text-center py-20 font-bold">
                Loading Tools...
              </div>
            }
          >
            <ProductList />
          </Suspense>
        ) : (
          <SelectedCart />
        )}
      </main>

      <StepSection />
      <PricingSection />
      <WorkFlowSection />
      <Footer />
      <ToastContainer position="top-center" />
    </ProductProvider>
  );
};

export default App;
