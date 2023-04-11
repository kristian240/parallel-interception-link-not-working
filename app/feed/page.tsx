import Link from 'next/link';

export default function FeedPage() {
  console.log('FeedPage');

  return (
    <div className='container'>
      <h2>Feed Page</h2>

      <p>
        <Link href='/photo'>Random Photo</Link>
      </p>
    </div>
  );
}
