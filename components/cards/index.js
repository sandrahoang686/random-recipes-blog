import styles from './cards.module.css';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';
import React from 'react'
import { useRouter } from 'next/router';

function OptionButtons ({id}) {
  const router = useRouter();

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.currentTarget.getAttribute("data-value") === 'interactive' ? 
      router.push(`/recipes/interactive/${id}`)
      :
      router.push(`/recipes/static/${id}`)
  }

  return (
    <div className={styles.optionsContainer}>
      <button className={styles.optionButtons} data-value="interactive" onClick={handleButtonClick}>interactive</button>
      <button className={styles.optionButtons} data-value="static" onClick={handleButtonClick}>static</button>
    </div>
  )
}

export default function Card({title, id, cookingTime, servingSize, content, imageFilename}) {
  const [displayOptions, setDisplayOptions] = React.useState(false);
  const [cardContainerClassName, setCardContainerClassName] = React.useState(styles.cardContainer);

  const handleCardClickEvent = () => {
    if(displayOptions) {
      setDisplayOptions(false)
      setCardContainerClassName(styles.cardContainer)
    } else {
      setDisplayOptions(true)
      setCardContainerClassName(styles.optionsContainer)
    }
  }

  // DOCUMENT: Can make more accessible by wrapping a button around instead
  return (
    <div
      className={`${cardContainerClassName} ${utilStyles.borderCircle}`}
      {...(!displayOptions ? {onClick: handleCardClickEvent} : {})} // div should only be clickable when the option buttons are not displayed
      style={{
        backgroundImage: `url(images/${imageFilename})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: 0.6,
        cursor: !displayOptions ? 'pointer' : 'auto',
      }}
    >
      {
        displayOptions ? 
          <>
            <OptionButtons id={id}/>
            <button className={styles.exitButton} onClick={handleCardClickEvent}>X</button>
          </>
          
          :
          <>
            <h3 className={utilStyles.headingMd}>{title}</h3>
            <span>{id}</span>
            <p className={utilStyles.textContentMd}>Cooking Time: {cookingTime}</p>
            <p className={utilStyles.textContentMd}>Serving Size: {servingSize}</p>
            <p className={utilStyles.textContentMd}>About: {content}</p>
          </>
      }
    </div>
  )
}