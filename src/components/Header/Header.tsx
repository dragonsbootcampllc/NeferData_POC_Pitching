import { component$ } from "@builder.io/qwik";
import "../../global.css";
import { Link } from "@builder.io/qwik-city";
// Create a new component by exporting a function.
import type { TJoin, Tnav_links } from "~/Types/Hero";
export default component$((props: any) => {
  return (
    <div
      class={`${"fixed w-full top-0 bg-blue-600/10  text-black h-[88px] grid-cols-3 place-items-center grid  backdrop-blur-2xl"}`}
    >
      <div class={`${"flex relative"}`}>
        <div class={`${" place-items-center   hidden lg:flex gap-2"}`}>
          {" "}
          <img
            src="/PNG/2767-removebg-preview%20(1).png"
            alt="logo"
            class={`${"w-[35px] h-[35px] "}`}
            height={30}
            width={30}
          />
          <span
            style={{ fontFamily: "interV" }}
            class={`${"text-2xl font-extrabold text-gray-200"}${"select-none"}`}
          >
            Neferdata
          </span>
        </div>
        <span
          class={`${" pt-[6px] text-xl text-gray-200"}${"select-none"}`}
        ></span>
      </div>
      <div class={`${"w-[350px] flex  h-[44px] rounded-full bg-blue-900/10 "}`}>
        <ul
          class={`${"grid grid-cols-4 place-items-center"}${" text-[15px] pr-4 hover:text-white"}${"select-none cursor-pointer"}`}
        >
          {" "}
          {props.nav_links?.map((nav_link: Tnav_links) => (
            <li key={nav_link.id}>
              <Link href={nav_link.link}>
                <span
                  style={{ fontFamily: "interV" }}
                  class={`${" capitalize  font-bold "}`}
                >
                  {nav_link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          class={`${"w-[100px]  place-items-center hidden lg:grid  h-[44px] "}${"shadow-inner shadow-3xl shadow-blue-700 hover:shadow-blue-400 duration-500 rounded-full bg-blue-900/5"}${"select-none"}`}
        >
          {props.Join?.map((Join: TJoin) => (
            <Link key={Join.id} href={Join.link}>
              <span
                style={{ fontFamily: "interV" }}
                class={`${" capitalize font-bold "}`}
              >
                {Join.name}
              </span>
            </Link>
          ))}
        </button>
      </div>
    </div>
  );
});
