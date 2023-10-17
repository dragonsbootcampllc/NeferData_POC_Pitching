import React from "react";

function Feadback() {
  return (
    <div className={"mt-12 lg:mt-32 bg-blue-500 pt-12"}>
      <div className={"mb-12"}>
        <div className="lg:text-7xl px-4 text-5xl max-w-4xl text-center capitalize  z-10 flex justify-center m-auto relative  mb-3 text-gray-50  font-semibold	">
          Testimonials
        </div>
        <p
          style={{ fontFamily: "interV" }}
          className="text-lg flex pt-6 px-4 text-center relative z-10 text-gray-200 font-bold justify-center m-auto"
        >
          We're proud to have helped hundreds of companies cut costs and improve
          their email experience.
        </p>
      </div>

      <div className={"flex gap-4 flex justify-center "}>
        <div className="relative flex border-4 p-2 w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                  Keith Hadi
                </h5>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-100 antialiased">
                VP of Vehicle Engineering, May Mobility{" "}
              </p>
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-gray-200 text-base font-light leading-relaxed text-inherit antialiased">
              "Neferdata has completely transformed my email experience. It
              efficiently filters out unwanted emails, ensuring my inbox remains
              clutter-free. I no longer waste time sifting through irrelevant
              emails, and I can focus on what's truly important. One of my
              favorite features are the notifications that first allowed me to
              tune the whitelist, and now help me never miss out on interesting
              companies. I highly recommend Neferdata."
            </p>
          </div>
        </div>

        <link
          rel="stylesheet"
          href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />

        <div className="relative flex border-4 p-2 w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              alt="tania andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white  antialiased">
                  Mark Walz
                </h5>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-100 antialiased">
                Chief Technology Officer, SpotOn{" "}
              </p>
            </div>
          </div>
          <div className="mb-6 p-0">
            <p className="block font-sans text-white text-base font-light leading-relaxed text-inherit antialiased">
              "Neferdata has such a huge impact on my inbox. I don't have to
              filter through so much noise, and instead get personalized
              insights about potentially interesting companies. I wish I had
              access to the tool earlier."
            </p>
          </div>
        </div>

        <link
          rel="stylesheet"
          href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
        />
      </div>
    </div>
  );
}

export default Feadback;
