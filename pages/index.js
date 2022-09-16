import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '../components/footer/footer'
import { Header } from '../components/header/header'

import styles from './index.module.css'
import sharedStyles from "../styles/styles.module.css"

export default function Home() {
  return (
    <div className={sharedStyles.container}>
      <Head>
        <title>Keyboards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={sharedStyles.main}>
        <section className={styles.landing}>
          <Image src="/images/sonnet.jpg" height={764} width={480} alt="sonnet keyboard" />
          <div className={styles.landingText}>
            <h2>The Sonnet</h2>
            <div></div>
            <h3>Versatility like no other</h3>
            <p>Defined by its stunning accent and graceful side profile, the Sonnet is Mode's Design most customizable keyboard, packaged in a 75% form-factor.</p>
            <Link href="/keyboards/1">Take a look</Link>
          </div>
        </section>
      </main>

      <Footer />


      <style jsx>{`
        /* .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        } */

        header {
          width: 100%;
          height: 60px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
