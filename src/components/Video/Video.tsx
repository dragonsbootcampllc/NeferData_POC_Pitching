// @ts-ignore
import React from "react";

function Video() {
  return (
    <div class={"w-full relative pt-36  bg-blue-600 overflow-x-hidden pb-12"}>
      <div class="">
        <div
          style={{ fontFamily: "interV" }}
          class=" px-4 text-5xl max-w-4xl text-center capitalize   flex justify-center m-auto relative   text-gray-50  font-semibold	"
        >
          Maximize focus & productivity with smart assistants
        </div>
        <p
          style={{ fontFamily: "interV" }}
          class="text-lg max-w-5xl  flex pt-6 px-12 text-center relative z-10 text-gray-300 font-medium justify-center m-auto"
        >
          that prioritize what matters. Stay on the cutting edge of your
          industry with tailored insights to propel your growth. Maintain full
          control of your privacy and security.
        </p>
      </div>
      <div class={"max-w-6xl relative flex justify-center m-auto  "}>
        <div
          class={"w-full p-2 aspect-video place-items-center overflow-hidden "}
        >
          <div style="padding:75% 0 0 0;position:relative;" class={""}>
            <iframe
              src="https://player.vimeo.com/video/875364471?badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style="position:absolute;top:0;left:0;width:100%;height:100%;"
              title="polished-walkthrough"
              class={"w-full h-full  "}
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </div>
    </div>
  );
}

export default Video;
