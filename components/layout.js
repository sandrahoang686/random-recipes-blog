import styles from './layout.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Header from './header'

export default function Layout({ children, recipes }) {
  return (
    <div className={styles.container}>
      <Header/>
      {!recipes && (
        <div className={styles.backToRecipes}>
          <Link href="/">← Back to recipes</Link>
        </div>
      )}
      <main>{children}</main>
    </div>
  );
}