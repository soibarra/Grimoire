import { useRef } from 'react';

import HTMLFlipBook from 'react-pageflip';

import bookPages from './bookPages';

import './App.css';

import flipSoundFile from './assets/sounds/page-flip.mp3';

function App() {

  const flipSoundRef = useRef(null);

  const playFlipSound = () => {

    if (!flipSoundRef.current) return;

    flipSoundRef.current.currentTime = 0;

    flipSoundRef.current.volume = 0.45;

    flipSoundRef.current.play();

  };

  return (

    <main className="app">

      <audio ref={flipSoundRef} src={flipSoundFile} preload="auto" />

      <section className="book-wrapper">

        <h1>Grimoire</h1>

        <HTMLFlipBook

          width={450}

          height={560}

          size="fixed"

          showCover={true}

          className="book"

          onChangeState={(event) => {

            if (event.data === 'user_fold' || event.data === 'flipping') {

              playFlipSound();

            }

          }}

        >

          <div className="page cover-page">

            <h2>Grimoire</h2>

            <p>A medieval spell book</p>

          </div>

          {bookPages.map((page) => (

            <div className="page" key={page.title}>

              <h2>{page.title}</h2>

              <p>{page.body}</p>

              {page.image && (

                <img className="page-image" src={page.image} alt="" />

              )}

            </div>

          ))}

          <div className="page cover-page back-cover">

            <h2>The End</h2>

          </div>

        </HTMLFlipBook>

      </section>

    </main>

  );

}

export default App;