import style from "./footer.module.scss";
import { ReactComponent as Logo } from "assets/image/logo.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Logo />
    </footer>
  );
};

export default Footer;
