import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";

import About from "../pages/About";
import Contact from "../pages/Contact";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lattafa" element={<Lattafa />} />
            <Route path="/alharamain" element={<AlHaramain />} />
            <Route path="/armaf" element={<Armaf />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;