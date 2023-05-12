import { IButtonFilter } from "shared/interface/IButtonFilter";
import style from "./buttonfilter.module.scss";
import classNames from "classnames";
interface ButtonFilterProps {
  buttonFilters: IButtonFilter[];
  selectedFilter: number | null;
  setSelectedFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

const ButtonFilter = ({
  buttonFilters,
  selectedFilter,
  setSelectedFilter,
}: ButtonFilterProps) => {
  const selectedButton = (button: IButtonFilter) => {
    console.log(button.id)
    if (selectedFilter === button.id) return setSelectedFilter(null);
    return setSelectedFilter(button.id);
  };

  return (
    <div className={style.filterGroup}>
      {buttonFilters.map((button) => {
        return (
          <button
            className={classNames({
              [style.filterGroup__filter]: true,
              [style["filterGroup__filter--active"]]:
                selectedFilter === button.id,
            })}
            key={button.id}
            onClick={() => selectedButton(button)}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonFilter;
