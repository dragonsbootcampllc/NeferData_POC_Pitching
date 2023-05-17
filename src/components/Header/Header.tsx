import { component$ } from '@builder.io/qwik';
import "../../global.css";
// Create a new component by exporting a function.

export default component$(() => {
  return (
    <div class={`${"text-amber-50 h-[88px] grid-cols-3 place-items-center grid bg-purple-900/5 backdrop-blur-2xl"}`}>
      <div class={`${"flex relative"}`}>
        <div class={`${"grid place-items-center"}`}>  <img src="../../../public/test.svg" alt="logo" class={`${"w-[35px] h-[35px] "}`}/></div>
          <span class={`${" pt-[6px] text-xl text-gray-200"}${"select-none"}`}>
              <span class={`${"text-amber-50 uppercase "}`}>
                  <image src="../../../public/logotext.png" alt="logo" class={`${" h-[20px] "}`}/>
              </span>
          </span>
      </div>
      <div class={`${"w-[400px] grid  h-[44px] rounded-full bg-purple-900/5"}`}>
<ul class={`${"grid grid-cols-5 place-items-center"}${" font-light text-gray-200 hover:text-white"}${"select-none cursor-pointer"}`}>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>
</ul>
      </div>
      <div>
        <button class={`${"w-[100px] grid place-items-center  h-[44px] "}${"shadow-inner shadow-3xl shadow-purple-700 hover:shadow-purple-400 duration-500 rounded-full bg-purple-900/5"}${"select-none"}`}>
<span class={`${"select-none"}`}>join us</span>
        </button>
      </div>


    </div>
  );
}
);