import { ReactComponent as Logo } from "assets/image/logo.svg";
import { NavLink } from "react-router-dom";
import { dataNavBar } from "data/dataNavBar";
import style from "./menunav.module.scss";

const MenuNav = () => {
  return (
    <nav className={style.headerMenu}>
      <a href="/">
        <Logo />
      </a>
      <ul className={style.headerMenu__list}>
        {dataNavBar.map((item, index) => {
          return (
            <li key={index} className={style.headerMenu__item}>
              <NavLink
                className={({ isActive }) =>
                  `${style.headerMenu__link} ${
                    isActive ? style["headerMenu__link--Active"] : ""
                  }`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuNav;
