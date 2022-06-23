import logo from '../../assets/images/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="/">
          <img className="logo__img" src={logo} alt="logo"></img>
          <p className="logo__text">Agency</p>
        </a>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="/services" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a href="/pricing" className="nav__link">
                Pricing
              </a>
            </li>
            <li className="nav__item">
              <a href="/blog" className="nav__link">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <button className="header__btn">contact</button>
      </div>
    </header>
  );
};
