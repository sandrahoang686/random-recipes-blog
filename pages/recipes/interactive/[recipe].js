import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import { getPostsData} from '../../../lib/posts';
import utilStyles from '../../../styles/utils.module.css';
import SectionCard from '../../../components/section-card';
import React from 'react';

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

const isBrowser = () => typeof window !== 'undefined';

const scrollToBottom = () =>{ 
  if (!isBrowser()) return;
  window.scrollTo({ 
    top: document.documentElement.scrollHeight, 
    behavior: 'smooth'
  }); 
}; 


export default function InteractiveRecipePage({ allPostsData }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = React.useState(0);

  const post = allPostsData.find(post => post.id === router.query.recipe)

  const handleNextClick = () => {
    setCurrentStep(currentStep+1);
  }

  React.useEffect(() => {
    // Watch for state change in currentStep and then scroll to bottom of page
    if(currentStep) {
      scrollToBottom()
    }
  }, [currentStep])


  return (
    <Layout>
      <h2 className={utilStyles.headingLg}>{post.title}</h2>
      <h4 className={utilStyles.headingSm}>Interactive Recipe</h4>
      <div
        className='section-card'
      >
        <SectionCard infoCard={
            {
              cooking_time: post.cooking_time,
              ingredients: post.ingredients,
              serving_size: post.serving_size
            }
          }
        />
        {
          currentStep === 0 && <button className={utilStyles.utilButton} onClick={handleNextClick}>Let's Start</button>
        }
      </div>
      {
        Object.entries(post.steps).map((value, index) => 
          {
            return (
              <div
                className='section-card'
                style={{
                  display: index+1 <= currentStep ? 'block' : 'none',
                }}
              >
                <SectionCard step={index+1} instructions={value[1]}/>
                {
                  // Display button when we are on the current step and the currentStep is not the last
                  index+1 === currentStep && currentStep < Object.keys(post.steps).length && <button className={utilStyles.utilButton} onClick={handleNextClick}>next</button>
                }
              </div>
            )

          }
        )
      }
      <div id="bottom" style={{ float:"left", clear: "both" }}></div>
    </Layout>
  );
}