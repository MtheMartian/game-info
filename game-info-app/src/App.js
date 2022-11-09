import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <input type="text" placeholder="Search"></input>
      </header>
      <section id="games-section">
        <div>
          <h2>Year - </h2>
          <span>Current</span>
        </div>
        <div id="games-cards"></div>
      </section>
    </div>
  );
}

export default App;
