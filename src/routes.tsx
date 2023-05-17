import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import MenuNav from "components/MenuNav";
import About from "pages/About";
import Dish from "pages/Dish";
import Home from "pages/Home";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <main>
      <BrowserRouter>
        <MenuNav />
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<About />} />
          </Route>
          <Route path="prato/:id/" element={<Dish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}

export default AppRouter;
