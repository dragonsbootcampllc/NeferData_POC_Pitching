import { component$ } from "@builder.io/qwik";
import "../../global.css";
import { Link } from "@builder.io/qwik-city";
// Create a new component by exporting a function.
import type { TJoin, Tnav_links } from "~/Types/Hero";
export default component$((props: any) => {
  return (
    <div
      class={`${"fixed w-full top-0 text-amber-50 h-[88px] grid-cols-3 place-items-center grid bg-purple-900/5 backdrop-blur-2xl"}`}
    >
      <div class={`${"flex relative"}`}>
        <div class={`${"grid place-items-center"}`}>
          {" "}
          <img
            src="/Identity/test.svg"
            alt="logo"
            class={`${"w-[35px] h-[35px] "}`}
            height={35}
            width={35}
          />
        </div>
        <span class={`${" pt-[6px] text-xl text-gray-200"}${"select-none"}`}>
          <span class={`${"text-amber-50 uppercase "}`}>
            <image
              src="/Identity/logotext.png"
              alt="logo"
              class={`${" h-[20px] "}`}
            />
          </span>
        </span>
      </div>
      <div class={`${"w-[400px] grid  h-[44px] rounded-full bg-purple-900/5"}`}>
        <ul
          class={`${"grid grid-cols-5 place-items-center"}${" font-light text-gray-200 hover:text-white"}${"select-none cursor-pointer"}`}
        >
          {" "}
          {props.nav_links?.map((nav_link: Tnav_links) => (
            <li key={nav_link.id}>
              <Link href={nav_link.link}>
                <span
                  style={{ fontFamily: "interV" }}
                  class={`${"text-amber-50 capitalize "}`}
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
          class={`${"w-[100px] grid place-items-center  h-[44px] "}${"shadow-inner shadow-3xl shadow-purple-700 hover:shadow-purple-400 duration-500 rounded-full bg-purple-900/5"}${"select-none"}`}
        >
          {props.Join?.map((Join: TJoin) => (
            <Link key={Join.id} href={Join.link}>
              <span
                style={{ fontFamily: "interV" }}
                class={`${"text-amber-50 capitalize "}`}
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
