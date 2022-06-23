export const Category = (props) =>
  window.innerWidth > 1040 ? (
    <li className="category">
      <input
        type="radio"
        name="category"
        value={props.title}
        id={props.title}
        checked={props.checked}
        onChange={props.changeCategory}
        className="category__radio visually-hidden"
      ></input>
      <label className="category__label" htmlFor={props.title}>
        {props.title}
      </label>
    </li>
  ) : (
    <option className="category__option" value={props.title} onClick={props.changeCategory}>
      {props.title}
    </option>
  );
