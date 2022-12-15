/* eslint-disable @next/next/no-img-element */
function Footer() {
  return (
    <>
      <footer class='p-4 bg-white/30 md:p-8 lg:p-10 dark:bg-slate-800/30'>
        <div class='mx-auto max-w-screen-xl text-center'>
          <a
            href='#'
            class='font-heading flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white'
          >
            <img
              src='https://github.com/webtrope.png'
              alt='webtrope logo'
              className='h-10 w-10 rounded-full mr-4'
            />
            WebTrope
          </a>
          <p class='my-6 text-gray-500 dark:text-gray-400'>
            Creating pieces that are both thought-provoking and visually
            striking.
          </p>

          <span class='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2022{" "}
            <a href='#' class='hover:underline'>
              WebTrope
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
