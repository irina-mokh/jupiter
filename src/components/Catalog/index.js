import { useEffect, useState } from 'react';
import { Category } from '../Category';
import { Card } from '../Card';
import { CategoriesList } from '../CategoriesList';
import { cards, categories } from '../data';
const ITEMS_PER_CHUNK = 9;

export const Catalog = () => {
  const [category, setCategory] = useState('Show all');
  const [chunks, setChunks] = useState(1);
  const [data, setData] = useState(cards);

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (category !== 'Show all') {
      setData(cards.filter((item) => item.category === category));
    } else {
      setData(cards);
    }
  }, [category]);

  const items = data
    .slice(0, chunks * ITEMS_PER_CHUNK)
    .map((item) => (
      <Card
        key={item.id}
        {...item}
        changeCategory={() => setCategory(item.category)}
        handleDelete={() => deleteItem(item.id)}
      ></Card>
    ));

  const labels = categories.map((item) => (
    <Category
      key={item}
      title={item}
      checked={item === category}
      changeCategory={() => setCategory(item)}
    ></Category>
  ));

  return (
    <main className="catalog">
      <div className="container">
        <fieldset className="catalog__fieldset">
          <CategoriesList
            handleSelect={(e) => {
              setCategory(e.target.value);
            }}
          >
            {labels}
          </CategoriesList>
        </fieldset>
        <ul className="catalog__list">{items}</ul>
        {items.length < data.length && (
          <button className="catalog__more" onClick={() => setChunks(chunks + 1)}>
            Load more
          </button>
        )}
      </div>
    </main>
  );
};
