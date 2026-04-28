import './App.css';

function App() {

  return (

    <main className="app">

      <section className="book-wrapper">

        <h1>Grimoire</h1>

        <div className="book">

          <div className="page left-page">

            <h2>Chapter I</h2>

            <p>

              This is where the left page content will go.

            </p>

          </div>

          <div className="page right-page">

            <h2>The First Spell</h2>

            <p>

              This is where the right page content will go.

            </p>

          </div>

        </div>

      </section>

    </main>

  );

}

export default App;