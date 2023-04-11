export default function FeedLayout({ children, modal }) {
  console.log('FeedLayout');

  return (
    <div className='container'>
      <h1>Feed Layout</h1>

      {children}

      {modal && (
        <>
          <hr />
          <div className='container'>
            <h2>@modal</h2>
            {modal}
          </div>
        </>
      )}
    </div>
  );
}
