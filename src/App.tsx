// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
// import FloatingActions from "./components/common/FloatingActions";
// import ScrollToTop from "./components/ScrollToTop";
// import NoPageFound from "./pages/NoPageFound";

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="min-h-screen bg-white">
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/products/:productId" element={<ProductDetail />} />
//             <Route path="/careers" element={<Careers />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="*" element={<NoPageFound />} />
//           </Routes>
//         </main>
//         <Footer />
//         <FloatingActions />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/common/Header";
// import Footer from "./components/common/Footer";
// import FloatingActions from "./components/common/FloatingActions";
// import ScrollToTop from "./components/ScrollToTop";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import ProductDetail from "./pages/ProductDetail";
// import Careers from "./pages/Careers";
// import Contact from "./pages/Contact";
// import NoPageFound from "./pages/NoPageFound";
// import { ReactNode } from "react";
// import MarketsShowcase from "./components/home/MarketsShowcase";
// import InsourcePlatform from "./pages/InsourcePlatform";

// type MainLayoutProps = {
//   children: ReactNode;
// };
// // Layout wrapper for valid routes only
// const MainLayout = ({ children }: MainLayoutProps) => (
//   <>
//     <ScrollToTop />
//     <Header />
//     <main>{children}</main>
//     <Footer />
//     <FloatingActions />
//   </>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* ✅ All valid routes wrapped with MainLayout */}
//         <Route
//           path="/"
//           element={
//             <MainLayout>
//               <Home />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <MainLayout>
//               <About />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/products"
//           element={
//             <MainLayout>
//               <Products />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/products/:productId"
//           element={
//             <MainLayout>
//               <ProductDetail />
//             </MainLayout>
//           }
//         />
//          <Route
//           path="/marketsShowcase"
//           element={
//             <MainLayout>
//               {/* <IndustriesServed /> */}
//                <div className="App">
//       <MarketsShowcase
//         autoPlay={true} 
//         interval={4000} 
//       />
//        </div>
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/careers"
//           element={
//             <MainLayout>
//               <Careers />
//             </MainLayout>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <MainLayout>
//               <Contact />
//             </MainLayout>
//           }
//         />
      
//           <Route
//           path="/products/insourceplatform"
//           element={
//             <MainLayout>
//               <InsourcePlatform />
//             </MainLayout>
//           }
//           />       
//           <Route path="*" element={<NoPageFound />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


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
import GlobalJourney from "./components/common/GlobalJourney"; // ✅ Updated import

type MainLayoutProps = {
  children: ReactNode;
};

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
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
        <Route path="/products/:productId" element={<MainLayout><ProductDetail /></MainLayout>} />
        <Route path="/marketsShowcase" element={<MainLayout><MarketsShowcase autoPlay={true} interval={4000} /></MainLayout>} />
        <Route path="/careers" element={<MainLayout><Careers /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/products/insourceplatform" element={<MainLayout><InsourcePlatform /></MainLayout>} />
        
        {/* ✅ Updated GlobalJourney route */}
        <Route path="/global-journey" element={<MainLayout><GlobalJourney isOpen={true} onClose={() => {}} /></MainLayout>} />
        
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </Router>
  );
}

export default App;