/* eslint-disable @next/next/no-img-element */
function Gallery() {
  return (
    <>
      <div className='flex flex-row items-center justify-around p-10 bg-main-light dark:bg-transparent dark:bg-none flex-wrap gap-3'>
        <img
          src='https://source.unsplash.com/random/500x1000/?coffee'
          alt='example'
          className='cursor-pointer bg-slate-200 dark:bg-slate-900 scale-95 hover:scale-100 hover:drop-shadow-lg transform transition duration-500 ease-in-out'
          onClick={() => {
            window.location.href = "/gallery";
          }}
        />
        <img
          src='https://source.unsplash.com/random/500x1000/?glitch'
          alt='example'
          className='cursor-pointer bg-slate-200 dark:bg-slate-900 scale-95 hover:scale-100 hover:drop-shadow-lg transform transition duration-500 ease-in-out'
          onClick={() => {
            window.location.href = "/gallery";
          }}
        />
        <img
          src='https://source.unsplash.com/random/500x1000/?art'
          alt='example'
          className='cursor-pointer bg-slate-200 dark:bg-slate-900 scale-95 hover:scale-100 
          hover:drop-shadow-lg transform transition duration-500 ease-in-out'
          onClick={() => {
            window.location.href = "/gallery";
          }}
        />
      </div>
    </>
  );
}

export default Gallery;
