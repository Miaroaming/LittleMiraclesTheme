import { Routes, Route } from "react-router-dom";

// pages
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Support from "../pages/Support";
import FindSupport from "../pages/FindSupport";
import Cart from "../pages/Cart";

// components
import Story from "./Story";
import Donate from "./Donate";
import ProductList from "./ProductList";


const Links = () => {
    return (
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/story/:id" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/findsupport" element={<FindSupport />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/shop" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
    )
  }

export default Links