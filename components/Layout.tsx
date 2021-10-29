import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Layout.module.css'

type LayoutProps = {
  title?: string
  children: ReactNode
}

function Layout({ title = 'Jesper Johansson', children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Jesper Johansson's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <span>Start</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="https://linkedin.com/in/jesper-johansson-a7689214a">
                <a target="_blank">LinkedIn</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="https://github.com/jesperjohansson">
                <a target="_blank">GitHub</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <span>🍺 Created in October 2021</span>
      </footer>
    </div>
  )
}

export default Layout
