import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);

  // Note: There is room to be explicit here but choosing this way for simplicity sake currently
  const handleMenuLinkClick = () => setOpen(!isOpen);

  const aboutMenu = (
    <ul className={styles.subMenu}>
      <li className={styles.subMenuLink}>
        <Link href={'/about/chef'} className={styles.menuLink}>
          chef
        </Link>
      </li>
      <li className={styles.subMenuLink}>
        <Link href={'/about/project'} className={styles.menuLink}>
          project
        </Link>
      </li>
    </ul>
  );

  return (
    <header className={styles.header}>
      <h1>Random Recipes Blog</h1>
      <div className={styles.menuLinksContainer}>
        <Link href={'/recipes'} className={styles.menuLink}>
          recipes
        </Link>
        <div className={styles.menuLinkWithOptionsContainer}>
          <span className={styles.menuLinkWithOptions} onClick={handleMenuLinkClick}>
            about
            <div className={isOpen ? styles.menuArrowWrapperOpen : styles.menuArrowWrapper}>
              <Image src="/images/menu-down-arrow.svg" width={13} height={13} alt="menu arrow"/>
            </div>
          </span>
          {isOpen && aboutMenu}
        </div>
      </div>
    </header>
  );
};