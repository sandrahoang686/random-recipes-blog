import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout'

export default function ProfilePage() {
    return (
      <Layout>
        <Head>
          <title>About the Chef</title>
        </Head>
        <h1>I'm a homemade chef honing in on my craft sharing my random recipes that I myself enjoy</h1>
        <h2>
          <Link href="/">Back to recipes</Link>
        </h2>
      </Layout>
    );
  }