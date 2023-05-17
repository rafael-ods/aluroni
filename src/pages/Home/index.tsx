import { dataMenu } from "data/dataMenu";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import styleContainer from "styles/container.module.scss";
import nossaCasa from "assets/image/nossacasa.png";
const Home = () => {
  let recommendedDishes = [...dataMenu]; // esta jogando tudo oq tem no objeto dentro da const "Pratos recomendados"
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 4); // aqui esta pegando a funcao sortido e fazendo um fatiamento dos 3 primeiros pratos
  return (
    <section>
      <h3 className={styleContainer.title}>Recomendações da Cozinha</h3>
      <div className={style.recommendeds}>
        {recommendedDishes.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/prato/${item.id}`}>
                <div className={style.recommended}>
                  <img
                    className={style.recommended__image}
                    src={item.photo}
                    alt={item.title}
                  />
                </div>
                <button className={style.recommended__button}>Ver mais</button>
              </Link>
            </div>
          );
        })}
      </div>
      <h3 className={styleContainer.title}> Nossa casa </h3>
      <div className={style.address}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={style.address__street}>
          Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
};

export default Home;
