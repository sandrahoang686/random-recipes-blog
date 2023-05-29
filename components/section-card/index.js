import styles from './section-card.module.css';
import utilStyles from '../../styles/utils.module.css';
import React from 'react'
import { useRouter } from 'next/router';

export default function SectionCard({step, instructions, infoCard = undefined}) {

  const handleCardClickEvent = () => {

  }

  // DOCUMENT: Can make more accessible by wrapping a button around instead
  return (
    <>
      {
        infoCard ?
          <div
            className={`${styles.container} ${utilStyles.borderCircle}`}
          >
            <h3 className={utilStyles.headingMd}>About this recipe</h3>
            <p>Cooking Time: {infoCard.cooking_time}</p>
            <p>Ingredients: {infoCard.ingredients}</p>
            <p>Serving Size: {infoCard.serving_size}</p>
          </div>
        :
          <div
            className={`${styles.container} ${utilStyles.borderCircle}`}
          >
            <h3 className={utilStyles.headingMd}>Step {step}:</h3>
            <p>{instructions}</p>
          </div>
      }
    </>
  )
}