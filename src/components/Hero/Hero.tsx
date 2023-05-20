import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Styles from "./Hero.css";
import type { TNews } from "~/Types/News";

export default component$(() => {
  const News: TNews = {
    id: 1,
    date: "2020-01-01",
    content: "Our AI integration just landed💯",
    link: "/blog/news",
  };

  useStyles$(Styles);

  return (
    <div style={{ fontFamily: "interV;" }} class="w-full mt-12">
      <div class="mt-28 mb-6 p-2 flex justify-center ">
        <div>
          <Link
            href={News.link}
            class="flex active:scale-95 duration-200  gap-1 text-md bg-purple-400/10 shadow-gray-200/20 shadow-inner px-2 rounded-full min-w-[30px]"
          >
            <div class="grid place-content-center ">
              <Image
                style={{ fontFamily: "interV" }}
                src="../../../../public/SVG/stars.svg"
                alt="f"
                width={30}
                height={30}
              />
            </div>
            <span class="text-purple-300 grid place-content-center font-bold">
              News:{" "}
            </span>
            <span class="text-purple-400/70 hover:underline duration-300  grid place-content-center">
              {News.content}
            </span>
          </Link>
        </div>
      </div>

      <div class=" ">
        <div
          style={{ fontFamily: "interV" }}
          class="text-7xl max-w-4xl text-center   z-10 flex justify-center m-auto relative  mb-3 text-gray-200  font-semibold	"
        >
          Boost Your Experiences in only 6 Months
        </div>
        <p
          style={{ fontFamily: "interV" }}
          class="text-lg flex pt-6 relative z-10 text-purple-300/50 justify-center m-auto"
        >
          Never miss a note, idea or connection.
        </p>
      </div>

      <div class="max-w-[1400px] sm:mt-10  md:mt-3 lg:-mt-20  relative  m-auto flex justify-center">
        <Image
          style={{ fontFamily: "interV" }}
          class={`${"absolute z-50 top-12 filter "} ${"drag_3d_boubce"}`}
          src={"/Identity/Images/drag_3d_color.png"}
          alt="Header Image"
          width={1500}
          height={1500}
        />
        <video autoPlay loop muted src="/Hero/q-c3d7becf.webm" />
      </div>
    </div>
  );
});
