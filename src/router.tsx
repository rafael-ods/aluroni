import Header from 'components/Header';
import Menu from 'pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path="/" element={<Menu/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
