import style from "./header.module.scss";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerBanner}>
        <h1 className={style.headerBanner__title}>A casa do código da massa</h1>
      </div>
    </header>
  );
};

export default Header;
