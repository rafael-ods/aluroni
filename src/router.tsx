import Header from "components/Header";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route  path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
