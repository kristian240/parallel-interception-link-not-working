import Link from 'next/link';

export default function PhotoPage() {
  console.log('Random PhotoPage intercepted');

  return (
    <div>
      <Link href='/feed'>Back</Link>

      <br />

      <img src='https://picsum.photos/640/360' />
    </div>
  );
}
