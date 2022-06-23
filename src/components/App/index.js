import { Header } from '../Header';
import { Catalog } from '../Catalog';

export const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <section className="hero">
        <div className="container">
          <h1 className="hero__heading">Portfolio</h1>
          <p>
            Agency provides a full service range including technical skills, design,business
            understanding.
          </p>
        </div>
      </section>
      <Catalog></Catalog>
    </div>
  );
};
