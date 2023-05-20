import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import Header from "../components/Header/Header";
import { TJoin, Tnav_links } from "~/Types/Hero";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  const nav_links: Tnav_links[] = [
    {
      id: 1,
      name: "Tracks",
      link: "/tracks",
    },
    {
      id: 2,
      name: "Talents",
      link: "/talents",
    },
    {
      id: 3,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 4,
      name: "Board",
      link: "/board",
    },
    {
      id: 5,
      name: "Contact",
      link: "/contact",
    },
  ];

  const Join: TJoin[] = [
    {
      id: 1,
      name: "Join Us",
      link: "/join",
    },
  ];
  return (
    <>
      <Header nav_links={nav_links} Join={Join} />
      <main>
        <Slot />
      </main>
    </>
  );
});
