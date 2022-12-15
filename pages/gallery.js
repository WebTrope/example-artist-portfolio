import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import FullGallery from "../components/fullGallery";

function Gallery() {
  return (
    <>
      <Head>
        <title>WebTrope</title>
        <meta
          name='description'
          content='Have a mind-blowing attractive and personalised website built in a short time. For you.'
        />
        <meta
          name='keywords'
          content='webtrope, webtrope.com, webtrope.com.ng, Web development, Website design, Web design, Web development agency, Web design agency, Website development, Custom website development, Responsive web design, E-commerce website development, User experience (UX) design'
        />
        <link rel='icon' href='https://github.com/webtrope.png' />
      </Head>
      <main className='min-h-screen bg-main-dark font-serif'>
        <div className='min-h-screen bg-main-light dark:bg-transparent dark:bg-none'>
          <div className='min-h-screen'>
            <Header />
            <div className='my-6'>
              <div className='flex flex-col justify-center align-center p-6 pt-12 gap-6'>
                <FullGallery />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
export default Gallery;
