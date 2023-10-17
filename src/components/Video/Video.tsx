// @ts-ignore
import React from "react";

function Video() {
  return (
    <div class={"w-full relative bg-blue-600"}>
      <div
        class={
          "max-w-6xl rounded-3xl  overflow-hidden relative flex justify-center m-auto  "
        }
      >
        <div class={"w-full "}>
          <div style="padding:75% 0 0 0;position:relative;" class={""}>
            <iframe
              src="https://player.vimeo.com/video/875364471?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              title="polished-walkthrough"
              class={"w-full h-full "}
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
      <div class="-mt-24 ">
        <div class=" px-4 text-5xl max-w-4xl text-center capitalize  z-10 flex justify-center m-auto relative  mb-3 text-gray-50  font-semibold	">
          Maximize focus & productivity with smart assistants
        </div>
        <p
          style={{ fontFamily: "interV" }}
          class="text-lg flex pt-6 px-12 text-center relative z-10 text-gray-800 font-bold justify-center m-auto"
        >
          that prioritize what matters. Stay on the cutting edge of your
          industry with tailored insights to propel your growth. Maintain full
          control of your privacy and security.
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
}

export default Video;
