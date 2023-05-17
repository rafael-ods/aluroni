import style from "./notFound.module.scss";
import styleContainer from "styles/container.module.scss";
import { ReactComponent as NotFoundImage } from "assets/image/not_found.svg";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className={classNames({
        [style.container]: true,
        [styleContainer.container]: true,
      })}
    >
      <div className={style.back}>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <NotFoundImage />
    </div>
  );
};

export default NotFound;
