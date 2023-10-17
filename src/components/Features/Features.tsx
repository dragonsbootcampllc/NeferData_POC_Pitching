// @ts-ignore
import React from "react";
// @ts-ignore
import { Link } from "@builder.io/qwik-city";

function Features(props) {
  interface Track {
    id: number;
    isTechnical: boolean;
    title?: string;
    SVG?: string;
    content?: string;
    link?: string;
  }

  const Tracks: Track[] = [
    {
      id: 2,
      isTechnical: true,

      title: "Discover SaaS products\n",
      SVG: "",
      content:
        "Leverage the power of AI to learn about products & solutions that can power your business' growth, now and in the future.",

      link: "",
    },
    {
      id: 3,
      isTechnical: true,

      title: "Personalize to your needs\n",
      SVG: "",
      content:
        "Tailor recommendations to your unique context & amplify quality of insights with Free Account or by signing up for Email Assistant.",

      link: "",
    },
    {
      id: 4,
      isTechnical: true,

      title: "Make decisions with confidence\n",
      SVG: "",
      content:
        "Leverage expert knowledge tools to effortlessly evaluate viable options, assess decision criteria, and make data-driven decisions.",

      link: "",
    },
    {
      id: 5,
      isTechnical: true,
      title: "Maximize focus and productivity ",
      SVG: "",
      content:
        "with smart assistants that prioritize what matters. Stay on the cutting edge of your industry with tailored insights to propel your growth. Maintain full control of your privacy and security.",
    },
  ];

  return (
    <div class={"mt-12 lg:mt-32"}>
      <div class="lg:text-7xl px-4 text-5xl max-w-4xl text-center capitalize  z-10 flex justify-center m-auto relative  mb-3 text-gray-900  font-semibold	">
        Product Discovery
      </div>
      <p
        style={{ fontFamily: "interV" }}
        class="text-lg flex pt-6 px-4 text-center relative z-10 text-gray-800 font-bold justify-center m-auto"
      >
        Discover products that can power your business' growth, now and in the
        future.
      </p>
      <div class={"w-full flex justify-center overflow-x-hidden  m-auto pt-12"}>
        <div class=" justify-center pb-12   md:gap-12  grid sm:grid-cols-2 max-w-[1500px]  lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {Tracks?.sort(() => {
            return 0.5 - Math.random();
          }).map((track) => (
            <Link key={track.id} href={track.link}>
              <div class="min-h-[180px] select-none active:scale-95 cursor-pointer duration-300 hover:scale-105  max-w-[340px] bg-blue-600 backdrop-blur-md shadow-lg rounded-xl">
                <div class="gap-2 p-3 flex h-[70px]">
                  <div
                    class={`${"rounded-full   h-10 w-10"}${
                      track.isTechnical
                        ? " bg-purple-900/50"
                        : " bg-yellow-400/50"
                    }`}
                  >
                    <div class="m-2   justify-center ">
                      <svg
                        class="hover:scale-110 opacity-70 duration-500 hover:brightness-150 justify-center my-2 mx-auto"
                        width={24}
                        height={24}
                        viewBox="0 0 76 77"
                        fill={"white"}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M34.7241 6.63413C33.4652 6.74662 32.2275 6.93301 31.0152 7.18895C29.447 9.76685 28.0576 13.1434 26.9554 17.1249H34.7241V6.63413ZM23.2762 9.91936C19.7269 11.7226 16.5603 14.1764 13.9318 17.1249H20.9874C21.6359 14.5397 22.4028 12.1237 23.2762 9.91936ZM9.81984 22.9238C7.72525 26.7099 6.37529 30.9694 5.9689 35.5024H18.5737C18.7006 31.1135 19.1143 26.8808 19.7808 22.9238H9.81984ZM5.9689 41.3014C6.32916 45.3198 7.4309 49.1232 9.13556 52.5725H19.5713C19.0273 48.9957 18.6868 45.2105 18.5737 41.3014H5.9689ZM12.8275 58.3715C15.654 61.9053 19.2144 64.8209 23.2762 66.8844C22.2572 64.3124 21.383 61.4522 20.6728 58.3715H12.8275ZM31.0152 69.6148C32.2275 69.8708 33.4652 70.0572 34.7241 70.1697V58.3715H26.6094C27.7603 62.9237 29.2781 66.7593 31.0152 69.6148ZM40.4934 70.1627C41.7258 70.0496 42.9379 69.8656 44.1255 69.6148C45.8626 66.7593 47.3804 62.9237 48.5313 58.3715H40.4934V70.1627ZM51.8644 66.8844C55.9262 64.8209 59.4866 61.9053 62.3131 58.3715H54.4678C53.7577 61.4522 52.8835 64.3124 51.8644 66.8844ZM65.9701 52.643C67.6947 49.1751 68.809 45.3472 69.1717 41.3014H56.567C56.4539 45.2105 56.1134 48.9957 55.5693 52.5725H65.3349C65.5532 52.5725 65.7657 52.5969 65.9701 52.643ZM75.0703 38.4019C75.0703 17.5845 58.281 0.708599 37.5703 0.708599C16.8596 0.708599 0.0703125 17.5845 0.0703125 38.4019C0.0703125 59.2193 16.8596 76.0952 37.5703 76.0952C58.281 76.0952 75.0703 59.2193 75.0703 38.4019ZM69.1717 35.5024H56.567C56.44 31.1135 56.0264 26.8808 55.3598 22.9238H65.3208C67.4154 26.7099 68.7653 30.9694 69.1717 35.5024ZM61.2088 17.1249C58.5803 14.1764 55.4138 11.7226 51.8644 9.91939C52.7378 12.1237 53.5048 14.5398 54.1533 17.1249H61.2088ZM44.1255 7.18896C42.9379 6.93822 41.7258 6.75424 40.4934 6.6411V17.1249H48.1853C47.0831 13.1434 45.6937 9.76686 44.1255 7.18896ZM50.7953 41.3014C50.6731 45.2905 50.3015 49.076 49.7284 52.5725H40.4934V41.3014H50.7953ZM34.7241 41.3014V52.5725H25.4123C24.8392 49.076 24.4675 45.2905 24.3453 41.3014H34.7241ZM25.6384 22.9238C24.9368 26.7772 24.4829 31.0108 24.3453 35.5024H34.7241V22.9238H25.6384ZM40.4934 22.9238V35.5024H50.7953C50.6577 31.0108 50.2039 26.7772 49.5023 22.9238H40.4934Z"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="37.5703"
                            y1="0.708599"
                            x2="37.5703"
                            y2="76.0952"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset={1} stopColor="#EF4444" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>{" "}
                  </div>

                  <div
                    style={{ fontFamily: "Poppins-Bold", width: "400" }}
                    class="mt-1 text-xl text-white  font-extrabold "
                  >
                    {track.title}
                  </div>
                </div>
                <div class="px-3 pt-3 font-medium  text-gray-300">
                  {track.content.slice(0, 120)}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
