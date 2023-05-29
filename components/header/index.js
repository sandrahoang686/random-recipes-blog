import Image from 'next/image';
import styles from './header.module.css';
import Link from 'next/link';
import React from 'react';

const headerName = 'Sandra'

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);

  // Note: There is a room to be explicit here but choosing this way for simplicity sake currently
  const handleMenuLinkClick = () => setOpen(!isOpen)

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
  )

  console.log(`isOpen_statue: `, isOpen)
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
            <Image src="/images/menu-down-arrow.svg" width={15} height={15} alt="menu arrow"/>
          </span>
          {isOpen && aboutMenu}
        </div>
      </div>
    </header>
  //   <header className={styles.header}>
  //   {home ? (
  //     <>
  //       <Image
  //         priority
  //         src="/images/my_profile.jpg"
  //         className={utilStyles.borderCircle}
  //         height={144}
  //         width={144}
  //         alt=""
  //       />
  //       <h1 className={utilStyles.heading2Xl}>{headerName}</h1>
  //     </>
  //   ) : (
  //     <>
  //       <Link href="/">
  //         <Image
  //           priority
  //           src="/images/profile.jpg"
  //           className={utilStyles.borderCircle}
  //           height={108}
  //           width={108}
  //           alt=""
  //         />
  //       </Link>
  //       <h2 className={utilStyles.headingLg}>
  //         <Link href="/" className={utilStyles.colorInherit}>
  //           {headerName}
  //         </Link>
  //       </h2>
  //     </>
  //   )}
  // </header>
  )
}