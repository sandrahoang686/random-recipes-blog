import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/layout'

export default function ProfilePage() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>Profile Page</h1>
        <h2>
          <Link href="/">Back to recipes</Link>
        </h2>
      </Layout>
    );
  }