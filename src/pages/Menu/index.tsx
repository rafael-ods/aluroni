import { useState } from "react";
import Input from "components/Input";
import style from "./style..module.scss";
import { dataButton } from "components/ButtonFilters/dataButton";
import ButtonFilters from "components/ButtonFilters";
import InputSelect from "components/InputSelect";
import { dataInput } from "components/InputSelect/dataInput";
import Cards from "components/Cards";
import styleContainer from "styles/container.module.scss";
const Menu = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [opitonList, setOpitionList] = useState("");
  return (
    <section>
      <h3 className={styleContainer.title}>Cardápio</h3>
      <Input
        type="text"
        required
        value={search}
        placeholder="Digite aqui sua busca"
        setValue={(value) => setSearch(value)}
      />
      <div className={style.menu__filters}>
        <ButtonFilters
          buttonFilters={dataButton}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <InputSelect
          listOptions={dataInput}
          optionList={opitonList}
          setOpitionList={setOpitionList}
        />
      </div>
      <Cards
        search={search}
        selectedFilter={selectedFilter}
        opitonList={opitonList}
      />
    </section>
  );
};

export default Menu;
