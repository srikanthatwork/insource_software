import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import FloatingActions from "./components/common/FloatingActions";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NoPageFound from "./pages/NoPageFound";
import { ReactNode } from "react";
import MarketsShowcase from "./components/home/MarketsShowcase";
import InsourcePlatform from "./pages/InsourcePlatform";

type MainLayoutProps = {
  children: ReactNode;
};

// Layout wrapper for valid routes only
const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <ScrollToTop />
    <Header />
    <main>{children}</main>
    <Footer />
    <FloatingActions />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ All valid routes wrapped with MainLayout */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/products"
          element={
            <MainLayout>
              <Products />
            </MainLayout>
          }
        />
        <Route
          path="/products/:productId"
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />
        <Route
          path="/marketsShowcase"
          element={
            <MainLayout>
              <div className="App">
                <MarketsShowcase
                  autoPlay={true} 
                  interval={4000} 
                />
              </div>
            </MainLayout>
          }
        />
        <Route
          path="/careers"
          element={
            <MainLayout>
              <Careers />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        
        <Route
          path="/products/insourceplatform"
          element={
            <MainLayout>
              <InsourcePlatform />
            </MainLayout>
          }
        />       
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Router>
  );
}

export default App;