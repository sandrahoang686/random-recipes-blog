import { useRouter } from 'next/router';
import Link from 'next/link';
 
export default function InteractiveRecipePage() {
  const router = useRouter();
  return (
    <>
      <h2>
        <Link href="/">Back to recipes</Link>
        </h2>
      <p>Interactive Recipe: {router.query.recipe}</p>
    </>
  );
}