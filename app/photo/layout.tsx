export default function PhotoLayout({ children }) {
  console.log('PhotoLayout');

  return (
    <div className='container'>
      <h1>Photo Layout</h1>

      {children}
    </div>
  );
}
