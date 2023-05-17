import styleContainer from "styles/container.module.scss";
import style from "./about.module.scss";
import nossaCasa from "assets/image/Aboutimg/casa.png";
import { dataAboutImage } from "data/dataAboutImage";
const About = () => {
  return (
    <section>
      <h3 className={styleContainer.title}>Sobre</h3>
      <div className={style.about}>
        <img src={nossaCasa} alt="Casa do aluroni" />
        <div className={style.about__paragraph}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={style.images}>
        {dataAboutImage.map((imagem, index) => {
          return (
            <div key={index}>
              <img src={imagem.photo} alt="Imagem de massa de macarrão" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
