import React from 'react'
import { HelloWorld } from '../components/HelloWorld'
import icons from '../assets/icons.svg'

export const Home = () => {
  return (
    <div>
      <div>
        <svg className="hero-logo" viewBox="0 0 900 300">
          <use xlinkHref={`${icons}#electron`} />
        </svg>
        <h1 className='text-center font-bold text-3xl'>electron+react+typescript+tremor</h1>
        <div className="flex mt-5 justify-center items-center gap-10">
          <a
            href="https://electron-react-boilerplate.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span role="img" aria-label="books">
                📚
              </span>
              Read our docs
            </button>
          </a>
          <a
            href="https://github.com/sponsors/electron-react-boilerplate"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              <span role="img" aria-label="folded hands">
                🙏
              </span>
              Donate
            </button>
          </a>
          <a
            target="_blank"
            href="https://github.com/alex8088/electron-vite"
            rel="noopener noreferrer"
          >
            Getting Help
          </a>
        </div>
        <div className='flex flex-col gap-5 items-center text-center mt-5'>
          <article>
            <h2 className="title">Configuring</h2>
            <p className="detail">
              Config with <span>electron.vite.config.ts</span> and refer to the{' '}
              <a target="_blank" href="https://electron-vite.org/config" rel="noopener noreferrer">
                config guide
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="title">HMR</h2>
            <p className="detail">
              Edit <span>src/renderer</span> files to test HMR. See{' '}
              <a
                target="_blank"
                href="https://electron-vite.org/guide/hmr.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="title">Debugging</h2>
            <p className="detail">
              Check out <span>.vscode/launch.json</span>. See{' '}
              <a
                target="_blank"
                href="https://electron-vite.org/guide/debugging.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="title">Source Code Protection</h2>
            <p className="detail">
              Supported via built-in plugin <span>bytecodePlugin</span>. See{' '}
              <a
                target="_blank"
                href="https://electron-vite.org/guide/source-code-protection.html"
                rel="noopener noreferrer"
              >
                docs
              </a>
              .
            </p>
          </article>
          <article>
            <h2 className="title">Packaging</h2>
            <p className="detail">
              Use{' '}
              <a target="_blank" href="https://www.electron.build" rel="noopener noreferrer">
                electron-builder
              </a>{' '}
              and pre-configured to pack your app.
            </p>
          </article>
        </div>
      </div>
      <HelloWorld />

    </div>
  )
}
