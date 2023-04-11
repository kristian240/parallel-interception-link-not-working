import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='container'>
      <Link href='/feed'>Go to feed</Link>
    </div>
  );
}
