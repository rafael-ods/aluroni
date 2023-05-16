/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import style from './cards.module.scss';
import { dataCards } from './dataCards';
import Item from './Item';

interface CardsProps {
  search: string
  selectedFilter: number | null
  opitonList: string
}


const Cards = ({search, selectedFilter, opitonList} : CardsProps) => {
  const [list, setList] = useState(dataCards); // estou passanddo o objeto aqui de dataCards e chamando o primeiro state de list no MAP

  const testSearch = (title: string) => {
    const regex = new RegExp(search, 'i'); // estamos passando o filtro como a regex e o "i", esta passando e dizendo que se o usuario digitar em minusculo ira funcionar
    return regex.test(title); // estamos passando o atributo .test e passadno que vamos testar o titlo digitado
  };

  const testTag = (id: number) => {
    if(selectedFilter !== null) return selectedFilter === id;
    return true;
  }; 


  const filterOption = (newList: { title: string; description: string; photo: string; size: number; serving: number; price: number; id: number; category: { id: number; label: string } }[]) => {
    switch(opitonList) {
    case 'porcao':
      return newList.sort((a,b) => a.size > b.size ? 1 : -1);
    case 'qtd_pessoas':
      return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
    case 'preco':
      return newList.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return newList;
    }
  };
  
  useEffect(() => {
    const newList = dataCards.filter((item) => testSearch(item.title) && testTag(item.category.id));
    setList(filterOption(newList));
  },[search, selectedFilter, opitonList]); // as dependencias de atulização pro use effect rodar esta sendo o busca do input e o filtro selecionando da tag, ambos os estados que pegamos

  return (
    <section className={style.cards}>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <Item  {...item}/>
          </div>
        );
      })}
    </section>
  );
};

export default Cards;
