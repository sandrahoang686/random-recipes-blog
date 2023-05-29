import Link from 'next/link';
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css';

export default function ProfilePage() {
    return (
      <Layout>
        <h2 className={utilStyles.headinglg}>About the Chef</h2>
        <p className={utilStyles.textContentMd}>I'm a homemade chef honing in on my craft sharing my random recipes that I myself enjoy!</p>
        <p className={utilStyles.textContentMd}>
          Find my LinkedIn Profile <Link href="https://www.linkedin.com/in/sandra-hoang-drexel2017/" rel="noopener noreferrer" target="_blank">here</Link>!
        </p>
      </Layout>
    );
  }