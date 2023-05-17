import { dataMenu } from "data/dataMenu";
import NotFound from "pages/NotFound";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import style from "./dish.module.scss";
import classNames from "classnames";
import DefaultPage from "components/DefaultPage";

const Dish = () => {
  const params = useParams();
  const navigate = useNavigate();

  const dishs = dataMenu.find((dish) => {
    return dish.id === Number(params.id);
  });

  if (!dishs) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <>
              <button className={style.voltar} onClick={() => navigate(-1)}>
                {"< Voltar"}
              </button>
              <section className={style.container}>
                <h1 className={style.titulo}>{dishs.title}</h1>
                <div className={style.imagem}>
                  <img src={dishs.photo} alt={dishs.title} />
                </div>
                <div className={style.conteudo}>
                  <p className={style.conteudo__descricao}>
                    {dishs.description}
                  </p>
                  <div className={style.tags}>
                    <div
                      className={classNames({
                        [style.tags__tipo]: true,
                        [style[
                          `tags__tipo__${dishs.category.label.toLocaleLowerCase()}`
                        ]]: true,
                      })}
                    >
                      {dishs.category.label}
                    </div>
                    <div className={style.tags__porcao}>{dishs.size}g</div>
                    <div className={style.tags__qtdpessoas}>
                      Serve {dishs.serving} pessoa{" "}
                      {dishs.serving == 1 ? "" : "s"}
                    </div>
                    <div className={style.tags__valor}>
                      R$ {dishs.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              </section>
            </>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default Dish;
