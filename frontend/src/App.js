import { Route, Routes } from "react-router-dom";

import AboutPage from "./landing_page/about/AboutPage";
import HomePage from "./landing_page/home/HomePage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";

import Footer from "./landing_page/Footer";
import Navbar from "./landing_page/Navbar";
import NotFound from "./landing_page/NotFound";

import Login from "./landing_page/signup/Login";
import Signup from "./landing_page/signup/Signup";


function App() {

return (
<>
<Navbar />

<Routes>

<Route path="/" element={<HomePage />} />


{/* authentication routes */}
<Route path="/signup" element={<Signup />} />

<Route path="/login" element={<Login />} />




<Route path="/about" element={<AboutPage />} />

<Route path="/products" element={<ProductPage />} />

<Route path="/pricing" element={<PricingPage />} />

<Route path="/support" element={<SupportPage />} />


<Route path="*" element={<NotFound />} />


</Routes>


<Footer />

</>
)

}

export default App;