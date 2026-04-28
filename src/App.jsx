import HTMLFlipBook from 'react-pageflip';

import './App.css';

function App() {

  return (

    <main className="app">

      <section className="book-wrapper">

        <h1>Grimoire</h1>

        <HTMLFlipBook

          width={450}

          height={560}

          size="fixed"

          minWidth={315}

          maxWidth={900}

          minHeight={400}

          maxHeight={700}

          showCover={true}

          className="book"

        >

          <div className="page cover-page">

            <h2>Grimoire</h2>

            <p>A medieval spell book</p>

          </div>

          <div className="page">

            <h2>Chapter I</h2>

            <p>

              This is the first inside page of your grimoire.

            </p>

          </div>

          <div className="page">

            <h2>The First Spell</h2>

            <p>

              This is where your spell description, story, or artwork can go.

            </p>

          </div>

          <div className="page">

            <h2>Notes</h2>

            <p>

              Add more magical notes, sketches, ingredients, or lore here.

            </p>

          </div>

          <div className="page cover-page back-cover">

            <h2>The End</h2>

          </div>

        </HTMLFlipBook>

      </section>

    </main>

  );

}

export default App;