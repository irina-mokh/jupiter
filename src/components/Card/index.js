import { useState } from 'react';

export const Card = (props) => {
  const { title, img, category } = props;
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={active ? 'card card_active' : 'card'} onClick={toggleActive}>
      <img className="card__img" src={require(`../../assets/images/Bitmap-${img}`)}></img>
      <h3 className="card__title">{title}</h3>
      <button className="card__category" onClick={props.changeCategory}>
        {category}
      </button>
      {active && (
        <button className="card__delete" onClick={props.handleDelete}>
          X
        </button>
      )}
    </div>
  );
};
