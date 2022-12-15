/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { Alert, Button, Spinner } from "flowbite-react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".heading",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power2.out" }
    );
    gsap.fromTo(
      ".content",
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.1, ease: "power2.out" }
    );
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
          <Header />
          {isFailure && (
            <Alert
              color='failure'
              className='fixed bottom-5 right-5 z-50 alert'
              onDismiss={function onDismiss() {
                setIsFailure(false);
              }}
            >
              <span>
                <span
                  className='font-medium 
                
                '
                >
                  Couldn't send message!
                </span>{" "}
                Change a few things up and try submitting again.
              </span>
            </Alert>
          )}
          {isSuccess && (
            <Alert
              color='success'
              className='fixed bottom-5 right-5 z-50 alert'
              onDismiss={function onDismiss() {
                setIsSuccess(false);
              }}
            >
              <span>
                <span className='font-medium'>Successfully sent! </span>
              </span>
            </Alert>
          )}
          <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
            <a
              href='#'
              className='heading flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
            >
              <img
                className='w-8 h-8 mr-2
                  dark:filter dark:invert
                  rounded-full
                  '
                src='https://github.com/webtrope.png'
                alt='logo'
              />
              WebTrope
            </a>
            <div className='content w-full bg-white/50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur-sm'>
              <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
                <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                  Send Me A Message
                </h1>
                <form className='space-y-4 md:space-y-6' action='#'>
                  <div>
                    <label
                      for='email'
                      className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                    >
                      Your email
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='
                        username@server.com
                        '
                      required=''
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className='mt-6'>
                      <label
                        for='default-input'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your Name
                      </label>
                      <input
                        type='text'
                        id='default-input'
                        className='bg-gray-50/50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='What should I call you?'
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='mt-6'>
                      <label
                        for='large-input'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        onChange={(e) => setName(e.target.value)}
                      >
                        Your Message
                      </label>

                      <textarea
                        id='message'
                        rows='4'
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50/50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700/50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                        placeholder='Describe your project in detail and we will get back to you as soon as possible.'
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <Button
                    className='w-full'
                    onClick={() => {
                      setIsButtonLoading(true);
                      emailjs
                        .send(
                          "service_25h5r2l",
                          "template_c0fhgc3",
                          {
                            from_name: name,
                            to_name: "WebTrope",
                            message: message,
                            reply_to: email,
                          },
                          "z2j_7TMCJIXUMebKV"
                        )
                        .then((result) => {
                          console.log(result.text);
                          setIsButtonLoading(false);
                          setIsSuccess(true);
                          setEmail("");
                          setName("");
                          setMessage("");
                        })
                        .catch((error) => {
                          console.log(error.text);
                          setIsFailure(true);
                        });
                    }}
                  >
                    <Spinner
                      aria-label='Spinner button example'
                      className={
                        isButtonLoading ? "animate-spin mr-4" : "hidden"
                      }
                    />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Contact;
