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
            Coded by Cabi
      </footer>
    </div>
  )
}
