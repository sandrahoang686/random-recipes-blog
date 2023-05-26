import { useRouter } from 'next/router';
import Link from 'next/link';
 
export default function StaticRecipePage() {
  const router = useRouter();
  return (
    <>
      <h2>
        <Link href="/">Back to recipes</Link>
        </h2>
      <p>Static Recipe: {router.query.recipe}</p>
    </>
  );
}