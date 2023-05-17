import { IInputSelect } from "shared/interface/IInputSelect";
import style from "./selectInput.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

interface InputSelectProps {
  listOptions: IInputSelect[];
  optionList: string;
  setOpitionList: React.Dispatch<React.SetStateAction<string>>;
}

const InputSelect = ({
  listOptions,
  optionList,
  setOpitionList,
}: InputSelectProps) => {
  const [showButton, setShowButton] = useState(false);

  const NameOpition =
    optionList &&
    listOptions.find((option) => option.value === optionList)?.label;

  const toogleButton = () => {
    setShowButton((old) => !old);
  };

  return (
    <button
      className={classNames({
        [style.button]: true,
        [style["button--active"]]: optionList !== "",
      })}
      onClick={() => toogleButton()}
      onBlur={() => setShowButton(false)}
    >
      <span>{NameOpition || "Ordenar por:"}</span>
      {showButton ? (
        <MdOutlineArrowDropUp size={24} />
      ) : (
        <MdOutlineArrowDropDown size={24} />
      )}
      <div
        className={`${style.button__options} ${
          showButton ? style["button__options--active"] : ""
        }`}
      >
        {listOptions.map((option) => {
          return (
            <div
              onClick={() => setOpitionList(option.value)}
              key={option.value}
              className={style.button__option}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </button>
  );
};

export default InputSelect;
