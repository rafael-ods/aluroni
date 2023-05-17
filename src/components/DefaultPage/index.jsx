import Header from "components/Header";
import { Outlet } from "react-router-dom";
import styleContainer from "styles/container.module.scss";
const DefaultPage = () => {
  return (
    <>
      <Header />
      <div className={styleContainer.container}>
        <Outlet />
      </div>
    </>
  );
};

export default DefaultPage;
