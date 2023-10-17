import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Brands from "~/components/Brands/Brands";
import Video from "~/components/Video/Video";
import Features from "~/components/Features/Features";

export default component$(() => {
  return (
    <div class={"overflow-x-hidden"}>
      <Hero />
      <Brands />
      <Video />
      <Features />
    </div>
  );
});

export const head: DocumentHead = {
  title: "neferdata",
  meta: [
    {
      name: "description",
      content:
        "Guiding businesses to the right SaaS decisions with data-based tools that cut through the noise for faster outcomes.Maximize focus and productivity with smart assistants that prioritize what matters. Stay on the cutting edge of your industry with tailored insights to propel your growth. Maintain full control of your privacy and security.",
    },
  ],
};
