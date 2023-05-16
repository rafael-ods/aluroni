import style from './header.module.scss';
import { ReactComponent as Logo } from 'assets/image/logo.svg';
const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.headerMenu}>
        <a href="/">
          <Logo/>
        </a>
      </nav>
      <div className={style.headerBanner}>
        <h1 className={style.headerBanner__title}>A casa do código da massa</h1>
      </div>
    </header>
  );
};

export default Header;
