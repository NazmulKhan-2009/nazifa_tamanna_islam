import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nazifa Tamanna Islam</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>WelCome, The site is under Construction</h3>
        <img src="https://thumbs.dreamstime.com/b/under-construction-heart-heart-as-under-construction-sign-113817361.jpg" alt="" width="50%"/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <span className={styles.logo}>
            <p></p>
          </span>
        </a>
      </footer>
    </div>
  )
}
