/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Distribution from "./pages/Distribution";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Promotions from "./pages/Promotions";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/catalogo/:slug" element={<ProductDetail />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/distribucion" element={<Distribution />} />
          <Route path="/clientes" element={<Clients />} />
          <Route path="/promociones" element={<Promotions />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
