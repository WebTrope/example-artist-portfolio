import { Button } from "flowbite-react";
import gsap from "gsap";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
function FullGallery() {
  return (
    <>
      <div className='flex flex-row items-center justify-around p-10 bg-main-light dark:bg-transparent dark:bg-none flex-wrap gap-3'>
        <ImageContainer
          src='https://source.unsplash.com/random/500x1000/?coffee'
          alt='example'
          title='Coffee'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sodales mauris. Duis feugiat elit risus, in aliquet elit pharetra et. Vivamus vel ornare orci, at dictum justo. Ut quam ante, rhoncus eu orci at, sodales tincidunt erat. Morbi venenatis purus in lacus elementum, sit amet ultricies urna efficitur. Donec maximus ac velit in pulvinar. Quisque et vehicula massa, ut iaculis ex.

Nam tincidunt dolor in diam tristique pharetra quis accumsan diam. Pellentesque ullamcorper porttitor iaculis. Fusce quam neque, malesuada ut ultrices non, dignissim sed neque. Quisque congue tortor quis risus molestie congue. Vivamus interdum augue a nibh ultrices, a suscipit est aliquam. Nulla facilisi. Ut non erat lobortis, tristique dui scelerisque, sodales elit. Aenean in molestie justo. Nullam posuere eros sed massa cursus, quis tempor purus lobortis.

Nulla risus orci, fringilla non ipsum vitae, convallis ultrices nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus mi sed odio porttitor, eu convallis ligula aliquam. Nam eleifend congue odio eu volutpat. Praesent dui erat, hendrerit id tortor a, ornare elementum sem. Nulla sed quam tincidunt, efficitur est sed, fringilla enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam dictum, erat nec feugiat semper, purus elit lacinia diam, vel tincidunt erat massa a ex. Vestibulum varius elementum risus, in sollicitudin lectus fermentum ut. Suspendisse non imperdiet dolor. Vivamus posuere iaculis accumsan. Nunc et justo tortor.'
        />
        <ImageContainer
          src='https://source.unsplash.com/random/500x1000/?glitch'
          alt='example'
          title='Glitch'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sodales mauris. Duis feugiat elit risus, in aliquet elit pharetra et. Vivamus vel ornare orci, at dictum justo. Ut quam ante, rhoncus eu orci at, sodales tincidunt erat. Morbi venenatis purus in lacus elementum, sit amet ultricies urna efficitur. Donec maximus ac velit in pulvinar. Quisque et vehicula massa, ut iaculis ex.

Nam tincidunt dolor in diam tristique pharetra quis accumsan diam. Pellentesque ullamcorper porttitor iaculis. Fusce quam neque, malesuada ut ultrices non, dignissim sed neque. Quisque congue tortor quis risus molestie congue. Vivamus interdum augue a nibh ultrices, a suscipit est aliquam. Nulla facilisi. Ut non erat lobortis, tristique dui scelerisque, sodales elit. Aenean in molestie justo. Nullam posuere eros sed massa cursus, quis tempor purus lobortis.

Nulla risus orci, fringilla non ipsum vitae, convallis ultrices nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus mi sed odio porttitor, eu convallis ligula aliquam. Nam eleifend congue odio eu volutpat. Praesent dui erat, hendrerit id tortor a, ornare elementum sem. Nulla sed quam tincidunt, efficitur est sed, fringilla enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam dictum, erat nec feugiat semper, purus elit lacinia diam, vel tincidunt erat massa a ex. Vestibulum varius elementum risus, in sollicitudin lectus fermentum ut. Suspendisse non imperdiet dolor. Vivamus posuere iaculis accumsan. Nunc et justo tortor.'
        />
        <ImageContainer
          src='https://source.unsplash.com/random/500x1000/?art'
          alt='example'
          title='Art'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac sodales mauris. Duis feugiat elit risus, in aliquet elit pharetra et. Vivamus vel ornare orci, at dictum justo. Ut quam ante, rhoncus eu orci at, sodales tincidunt erat. Morbi venenatis purus in lacus elementum, sit amet ultricies urna efficitur. Donec maximus ac velit in pulvinar. Quisque et vehicula massa, ut iaculis ex.

Nam tincidunt dolor in diam tristique pharetra quis accumsan diam. Pellentesque ullamcorper porttitor iaculis. Fusce quam neque, malesuada ut ultrices non, dignissim sed neque. Quisque congue tortor quis risus molestie congue. Vivamus interdum augue a nibh ultrices, a suscipit est aliquam. Nulla facilisi. Ut non erat lobortis, tristique dui scelerisque, sodales elit. Aenean in molestie justo. Nullam posuere eros sed massa cursus, quis tempor purus lobortis.

Nulla risus orci, fringilla non ipsum vitae, convallis ultrices nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus mi sed odio porttitor, eu convallis ligula aliquam. Nam eleifend congue odio eu volutpat. Praesent dui erat, hendrerit id tortor a, ornare elementum sem. Nulla sed quam tincidunt, efficitur est sed, fringilla enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam dictum, erat nec feugiat semper, purus elit lacinia diam, vel tincidunt erat massa a ex. Vestibulum varius elementum risus, in sollicitudin lectus fermentum ut. Suspendisse non imperdiet dolor. Vivamus posuere iaculis accumsan. Nunc et justo tortor.'
        />
      </div>
    </>
  );
}

function ImageContainer(props) {
  const { src, alt, title, description } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // animate a moving entrance from the left of the image and text
    if (isOpen) {
      gsap.fromTo(
        ".image-container",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
      // animate the image after the container has entered
      gsap
        .fromTo(
          ".image",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        )
        .delay(0.5);
      // animate the heading and text after the image has entered
      gsap
        .fromTo(
          ".heading",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        )
        .delay(0.7);
      gsap
        .fromTo(
          ".desc",
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        )
        .delay(0.9);
    }
  }, [isOpen]);

  const close = () => {
    gsap.to(".image", {
      x: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });

    gsap
      .to(".desc", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .delay(0.3);
    gsap
      .to(".heading", {
        x: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .delay(0.5);
    gsap
      .to(".image-container", {
        y: 100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .delay(0.7);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      {isOpen && (
        <div
          className='image-container fixed top-0 overscroll-contain left-0 w-full h-full bg-slate-100/90 dark:bg-slate-900/90 z-50 flex items-center justify-center backdrop-filter backdrop-blur-sm
        '
        >
          <div className='relative flex gap-6 justify-around dark:bg-none dark:bg-transparent '>
            <div className='absolute top-6 right-6 m-4'>
              <button onClick={close}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6 text-red-800 dark:text-red-400 hover:text-red-600 dark:hover:text-red-500'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div
              className='grid'
              style={{
                gridTemplateColumns: "auto minmax(0, 1fr)",
              }}
            >
              <img
                src={src}
                alt={alt}
                className='image object-contain h-full object-contain'
              />
              <div className='p-20 flex flex-col gap-6'>
                <h1 className='heading font-heading text-6xl font-bold text-slate-900 dark:text-gray-100'>
                  {title}
                </h1>
                <p className='desc text-xl text-justify text-slate-900 dark:text-gray-100'>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className='scale-95 hover:scale-100 hover:drop-shadow-lg transform transition duration-500 ease-in-out'
        onClick={() => {
          setIsOpen(true);
        }}
      />
    </>
  );
}

export default FullGallery;
