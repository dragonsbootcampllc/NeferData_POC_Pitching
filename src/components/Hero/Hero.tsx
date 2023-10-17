import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import Styles from "./Hero.css";
import type { TNews } from "~/Types/News";

export default component$(() => {
  const News: TNews = {
    id: 1,
    date: "2020-01-01",
    content: "Our AI Email Assistant📧 ",
    link: "/blog/news",
  };

  useStyles$(Styles);

  return (
    <div style={{ fontFamily: "interV;" }} class="w-full mt-12">
      <div class="mt-28 mb-6 p-2 flex justify-center ">
        <div>
          <Link
            href={News.link}
            class="flex active:scale-95 duration-200  gap-1 text-md text-cyan-50 bg-blue-600 shadow-gray-200/20 shadow-inner px-2 rounded-full min-w-[30px]"
          >
            <div class="grid place-content-center ">
              <Image
                style={{ fontFamily: "interV" }}
                src="/SVG/stars.svg"
                alt="f"
                width={30}
                height={30}
              />
            </div>
            <span class="text-cyan-50 grid place-content-center font-bold">
              News:{" "}
            </span>
            <span class="text-cyan-50/70 hover:underline duration-300  grid place-content-center">
              {News.content}
            </span>
          </Link>
        </div>
      </div>

      <div class=" ">
        <div class="lg:text-7xl px-4 text-5xl max-w-4xl text-center capitalize  z-10 flex justify-center m-auto relative  mb-3 text-gray-900  font-semibold	">
          Guiding businesses to the right SaaS decisions
        </div>
        <p
          style={{ fontFamily: "interV" }}
          class="text-lg flex pt-6 px-4 text-center relative z-10 text-gray-800 font-bold justify-center m-auto"
        >
          with data-based tools that cut through the noise for faster outcomes
        </p>
        <div class={"flex gap-4 justify-center w-full p-12"}>
          <div
            class={
              "h-[50px] w-[200px] bg-blue-600 grid place-items-center rounded-md cursor-pointer select-none" +
              " hover:shadow-2xl hover:opacity-90 duration-300" +
              " active:scale-95 duration-200" +
              " text-white font-bold te"
            }
          >
            Discover Products
          </div>

          <div
            class={
              "h-[50px] w-[200px] border-4 border-black grid place-items-center rounded-md cursor-pointer select-none" +
              " hover:shadow-2xl  duration-300" +
              " active:scale-95 duration-200" +
              " text-black font-bold hover:text-white hover:bg-black"
            }
          >
            Free Email Assistant
          </div>
        </div>
      </div>
    </div>
  );
});
