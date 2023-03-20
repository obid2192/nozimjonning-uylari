import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Body } from "./components/Body";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function Root() {
  return (
    <div>
        <Routes>
          <Route element={<Navbar />}>          
            <Route path="/body" element={<Body />} />
            <Route path="/"element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="*" element={<p>Bunaqa manzil yo'q!</p>} />
          </Route>
        </Routes>
    </div>
  );
}

export default Root;
