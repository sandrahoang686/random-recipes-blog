import Link from 'next/link';
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css';

export default function ProfilePage() {
    return (
      <Layout>
        <section>
          <h3 className={utilStyles.headingMd}>About this project:</h3>
          <p>This app was built as a small exploratory effort to learn and upskill on NextJs.
            This project plays around with dynamic routing, global vs in-scope styling and pre-rendering during build time.
            There was also a maintained focus to build this app modularly in a re-useable way and for ease of scalability,
            even though there is no plans to scale this app in the future... so for this specific case, some parts may be overkill!
          </p>
        </section>
        <section>
          <h3 className={utilStyles.headingMd}>Tech Stack:</h3>
          <ul>
            <li>NextJs</li>
            <li>React</li>
            <li>Docker</li>
          </ul>
        </section>
        <section>
          <h3 className={utilStyles.headingMd}>
            Code: <Link href="https://github.com/sandrahoang686/random-recipes-blog" rel="noopener noreferrer" target="_blank">Github Repository</Link>
          </h3>
        </section>
      </Layout>
    );
  }