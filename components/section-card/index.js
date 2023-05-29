import styles from './section-card.module.css';
import utilStyles from '../../styles/utils.module.css';
import React from 'react'

export default function SectionCard({step, instructions, infoCard = undefined}) {
  // DOCUMENT: Can make more accessible by wrapping a button around instead
  return (
    <>
      {
        infoCard ?
          <section
            className={`${styles.container} ${utilStyles.borderCircle}`}
          >
            <div className={utilStyles.contentWrapper}>
              <h3 className={utilStyles.headingMd}>About this recipe</h3>
              <p>Cooking Time: {infoCard.cooking_time}</p>
              <p>Ingredients: {infoCard.ingredients}</p>
              <p>Serving Size: {infoCard.serving_size}</p>
            </div>
          </section>
        :
          <section
            className={`${styles.container} ${utilStyles.borderCircle}`}
          >
            <div className={utilStyles.contentWrapper}>
              <h3 className={utilStyles.headingMd}>Step {step}:</h3>
              <p>{instructions}</p>
            </div>
          </section>
      }
    </>
  )
}