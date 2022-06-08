import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RICSVIL</title>
        <meta name="description" content="Ricsvil landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <b>RICSVIL</b>
        </h1>

        <p className={styles.description}>
          Brand by{' '}<b>Stefan Crnobrnja</b>.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
            Coded by Cabi
        </a>
      </footer>
    </div>
  )
}
