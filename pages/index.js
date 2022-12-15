import Head from "next/head";
import { useEffect } from "react";
import Footer from "../components/footer";
import Gallery from "../components/gallery";
import Header from "../components/header";
import gsap from "gsap";

function App() {
  useEffect(() => {
    gsap
      .fromTo(
        ".heading",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.5);
    gsap
      .fromTo(
        ".text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.5);
    gsap
      .fromTo(
        ".gallery",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.7);
  }, []);

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
                <h1 className='heading text-8xl font-heading font-bold text-center text-main-dark dark:text-indigo-200'>
                  WebTrope
                </h1>
                <p className='text text-center dark:text-indigo-100 max-w-4xl m-auto'>
                  As an artist, I am always seeking to push the boundaries of
                  creativity and explore new mediums and techniques. My passion
                  for art began at a young age, and I have spent my life honing
                  my skills and developing my own unique style. I am constantly
                  seeking out new inspirations and sources of creativity, and I
                  strive to create pieces that are both thought-provoking and
                  visually striking.
                </p>
              </div>
              <Gallery className='gallery' />
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
