import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Card from '../components/cards'

import { getPostsData } from '../lib/posts';

// Note: Built in nextJs fn that will pre-render this page at build time
// using props returned
export async function getStaticProps() {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Recipes({ allPostsData }) {
  return (
    <Layout recipes>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Recipes</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, cooking_time, content, title, serving_size, image_filename }) => (
            <li className={utilStyles.listItem} key={id}>
              <Card title={title} id={id} cookingTime={cooking_time} servingSize={serving_size} content={content} imageFilename={image_filename}/>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}