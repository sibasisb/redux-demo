import './App.css';
import Counter from './components/counter';

function App() {
  return (
    <div className="bodyWrap">
      <header className="navbar">

      </header>
      <section>
        <h1 id="heading">Testing Project</h1>
        <article>
          <Counter/>
        </article>
      </section>
      <footer>
        <span>&copy; Goods</span>
      </footer>
    </div>
  );
}

export default App;
