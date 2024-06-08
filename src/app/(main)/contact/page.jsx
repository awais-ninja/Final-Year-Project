import Link from "next/link";
const page = () => {
  return (
    <section className="bg-gray-100 " id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-black ">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-teal-800 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-black">
              We take care about transportation for your business
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-black text-justify">
                We are experienced in handling the formalities and documentation
                required for your imports and exports. We work with all
                international station to guarantee that your load will safely
                reach without any delays
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-teal-800 text-black text-3xl">
                    <Link
                      href="https://www.instagram.com/"
                      className="text-white hover:text-gray-300"
                    >
                      <i className="bi bi-geo-alt-fill"></i>
                    </Link>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-teal-800 ">
                      Our Address
                    </h3>

                    <p className="mb-2 text-lg font-medium leading-6 text-black">
                      123 Street, Sahiwal
                    </p>
                    <p className="mb-2 text-lg font-medium leading-6 text-black">
                      Punjab, Pakistan
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-teal-800 text-black text-3xl">
                    <Link
                      href="https://www.instagram.com/"
                      className="text-white hover:text-gray-300"
                    >
                      <i className="bi bi-telephone-fill"></i>
                    </Link>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-teal-800">
                      Contact
                    </h3>
                    <p className="mb-2 text-lg font-medium leading-6 text-black">
                      Mobile: (+92) 304 9978 288
                    </p>
                    <p className="mb-2 text-lg font-medium leading-6 text-black">
                      Mail: info@swiftlink.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-teal-800 text-black text-3xl">
                    <Link
                      href="https://www.instagram.com/"
                      className="text-white hover:text-gray-300"
                    >
                      <i className="bi bi-clock-fill"></i>
                    </Link>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-teal-800">
                      Working Hours
                    </h3>
                    <p className="mb-2 text-lg font-medium leading-6 text-black">
                      Monday - Friday: 08:00 - 17:00
                    </p>
                    <p className="mb-2 text-lg font-medium leading-6 text-black">
                      Saturday & Sunday: 08:00 - 12:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold text-teal-800">
                Ready to Get Started?
              </h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="name"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="email"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label
                      htmlFor="textarea"
                      className="pb-1 text-xs uppercase tracking-wider"
                    ></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="#"></Link>
                  <button
                    type="submit"
                    className="w-full bg-teal-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
