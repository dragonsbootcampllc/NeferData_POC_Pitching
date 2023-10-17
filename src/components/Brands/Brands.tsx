// @ts-ignore
import React from "react";

function Brands() {
  return (
    <section class="bg-blue-500/20 flex justify-center ">
      <div class="container flex py-6  justify-center items-center">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full px-4">
            <div class="flex flex-wrap items-center justify-center">
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg"
              />
              <SingleImage
                href="#"
                Alt="Brand Image"
                imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;

// @ts-ignore
const SingleImage = ({ href, imgSrc, Alt }) => {
  return (
    <>
      <a
        href={href}
        class="mx-4 flex w-[150px] items-center justify-center  2xl:w-[180px]"
      >
        <img src={imgSrc} alt={Alt} class="w-full h-10" />
      </a>
    </>
  );
};
