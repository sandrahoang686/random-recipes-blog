import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import utilStyles from '../../../styles/utils.module.css';
import { getPostsData} from '../../../lib/posts';

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { recipe: 'fish-katsu' } },
      { params: { recipe: 'chicken-katsu' } },
    ],
    fallback: true, // false or "blocking"
  };
};

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
 
export default function StaticRecipePage({ allPostsData }) {
  const router = useRouter();
  const post = allPostsData.find(post => post.id === router.query.recipe)

  return (
    <Layout>
      <h2 className={utilStyles.headingLg}>{post.title}</h2>
      <h4 className={utilStyles.headingSm}>Static Recipe</h4>
      <h3 className={utilStyles.headingMd}>About this recipe</h3>
      <p>Cooking Time: {post.cooking_time}</p>
      <p>Ingredients: {post.ingredients}</p>
      <p>Serving Size: {post.serving_size}</p>
      <h3 className={utilStyles.headingMd}>Instructions</h3>
      {
        Object.entries(post.steps).map((value, index) => 
          {
            return (
              <p>
                {`step ${index+1}: ${value[1]}`}
              </p>
            )

          }
        )
      }
    </Layout>
  );
}