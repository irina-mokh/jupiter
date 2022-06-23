import { useState } from 'react';

export const CategoriesList = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  function handleResize() {
    setWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);

  if (width > 1040) {
    return <ul className="catalog__categories-list">{props.children}</ul>;
  } else {
    return (
      <select className="catalog__categories-list" onChange={props.handleSelect}>
        {props.children}
      </select>
    );
  }
};
