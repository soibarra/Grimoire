import { useRef, useState } from 'react';

import HTMLFlipBook from 'react-pageflip';

import bookPages from './bookPages';

import './App.css';

import flipSoundFile from './assets/sounds/page-flip.mp3';

function App() {

  const flipSoundRef = useRef(null);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = bookPages.length + 4;

  const isOpen = currentPage > 0;

  const showLeftStack = currentPage > 1;

  const showRightStack = currentPage < totalPages - 3;

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

        <div

          className={[

            'book-stage',

            isOpen ? 'book-open' : '',

            showLeftStack ? 'show-left-stack' : '',

            showRightStack ? 'show-right-stack' : '',

          ].join(' ')}

        >

          <div className="side-pages left-side-pages"></div>

          <div className="side-pages right-side-pages"></div>

          <HTMLFlipBook

            width={450}

            height={560}

            size="fixed"

            showCover={true}

            usePortrait={false}

            drawShadow={true}

            flippingTime={900}

            maxShadowOpacity={0.45}

            className="book"

            onFlip={(event) => {

              setCurrentPage(event.data);

            }}

            onChangeState={(event) => {

              if (event.data === 'user_fold' || event.data === 'flipping') {

                playFlipSound();

              }

            }}

          >

            <div className="page cover-page front-cover" data-density="hard">

              <h2>Grimoire</h2>

              <p>A medieval spell book</p>

            </div>

            <div className="page inside-cover-page" data-density="hard"></div>

            {bookPages.map((page) => (

              <div className="page" key={page.title}>

                <h2>{page.title}</h2>

                <p>{page.body}</p>

                {page.image && (

                  <img className="page-image" src={page.image} alt="" />

                )}

              </div>

            ))}

            <div className="page inside-cover-page" data-density="hard"></div>

            <div className="page cover-page back-cover" data-density="hard">

              <h2>The End</h2>

            </div>

          </HTMLFlipBook>

        </div>

      </section>

    </main>

  );

}

export default App;