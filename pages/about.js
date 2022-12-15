import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/Header";
import { useEffect } from "react";
import gsap from "gsap";

function About() {
  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
    gsap
      .fromTo(
        ".text",
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      )
      .delay(0.5);
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
            <div className='flex flex-col justify-center align-center p-6 my-12 pt-12 gap-12'>
              <h1 className='heading text-8xl font-heading font-bold text-center text-main-dark dark:text-indigo-200'>
                About Me
              </h1>
              <div className='text flex flex-col gap-6'>
                <p className='text-justify dark:text-indigo-100 max-w-4xl m-auto'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  ac sodales mauris. Duis feugiat elit risus, in aliquet elit
                  pharetra et. Vivamus vel ornare orci, at dictum justo. Ut quam
                  ante, rhoncus eu orci at, sodales tincidunt erat. Morbi
                  venenatis purus in lacus elementum, sit amet ultricies urna
                  efficitur. Donec maximus ac velit in pulvinar. Quisque et
                  vehicula massa, ut iaculis ex.
                </p>
                <p className='text-justify dark:text-indigo-100 max-w-4xl m-auto'>
                  Nam tincidunt dolor in diam tristique pharetra quis accumsan
                  diam. Pellentesque ullamcorper porttitor iaculis. Fusce quam
                  neque, malesuada ut ultrices non, dignissim sed neque. Quisque
                  congue tortor quis risus molestie congue. Vivamus interdum
                  augue a nibh ultrices, a suscipit est aliquam. Nulla facilisi.
                  Ut non erat lobortis, tristique dui scelerisque, sodales elit.
                  Aenean in molestie justo. Nullam posuere eros sed massa
                  cursus, quis tempor purus lobortis.
                </p>
                <p className='text-justify dark:text-indigo-100 max-w-4xl m-auto'>
                  Nulla risus orci, fringilla non ipsum vitae, convallis
                  ultrices nibh. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Sed luctus mi sed
                  odio porttitor, eu convallis ligula aliquam. Nam eleifend
                  congue odio eu volutpat. Praesent dui erat, hendrerit id
                  tortor a, ornare elementum sem. Nulla sed quam tincidunt,
                  efficitur est sed, fringilla enim. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Etiam dictum, erat nec feugiat semper, purus elit lacinia
                  diam, vel tincidunt erat massa a ex. Vestibulum varius
                  elementum risus, in sollicitudin lectus fermentum ut.
                  Suspendisse non imperdiet dolor. Vivamus posuere iaculis
                  accumsan. Nunc et justo tortor.
                </p>
                <p className='text-justify dark:text-indigo-100 max-w-4xl m-auto'>
                  Suspendisse potenti. Duis mollis nunc dui, a ultricies urna
                  elementum quis. Class aptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Curabitur
                  at consectetur nulla. Nam placerat sapien tincidunt nunc
                  sodales, non lobortis ligula gravida. Mauris quis augue massa.
                  Nullam nec orci vitae arcu commodo hendrerit ullamcorper
                  sodales lectus. Donec tristique lacus sapien, ac pulvinar
                  massa vehicula in. Phasellus leo lacus, tempor eu nulla non,
                  malesuada dapibus neque. Pellentesque habitant morbi tristique
                  senectus et netus et malesuada fames ac turpis egestas.
                  Vivamus posuere elit a augue tristique posuere.
                </p>
                <p className='text-justify dark:text-indigo-100 max-w-4xl m-auto'>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Etiam posuere augue eget
                  mauris imperdiet pharetra. Etiam ultricies lacinia commodo.
                  Proin euismod rutrum libero, ac pretium arcu accumsan iaculis.
                  Etiam vestibulum massa eu efficitur suscipit. Phasellus lorem
                  mauris, gravida pretium mollis non, convallis vitae dui. Duis
                  hendrerit eleifend tincidunt. Vestibulum consequat consequat
                  cursus. Duis sapien elit, maximus in tortor quis, sodales
                  eleifend mauris. Cras eleifend lectus vitae ex hendrerit
                  porttitor. Nam euismod vulputate nisi in egestas. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default About;
