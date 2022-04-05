import React from "react";
import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUP/SignUp";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home></Home>} />
        <Route path="/services" exact element={<Services></Services>} />
        <Route path="/products" exact element={<Products></Products>} />
        <Route path="/sign-up" exact element={<SignUp></SignUp>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
