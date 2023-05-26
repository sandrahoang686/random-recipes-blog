import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Card from '../components/cards'

import { getSortedPostsData } from '../lib/posts';

// Note: Built in nextJs fn that will pre-render this page at build time
// using props returned
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Recipes({ allPostsData }) {
  return (
    <Layout recipes>
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction to be replaced here]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section> */}
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