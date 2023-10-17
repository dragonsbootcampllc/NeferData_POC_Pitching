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
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Services",
      link: "/Services",
    },
    {
      id: 3,
      name: "Pricing",
      link: "/Pricing",
    },
    {
      id: 4,
      name: "Marketplace",
      link: "/Marketplace",
    },
  ];

  const Join: TJoin[] = [
    {
      id: 1,
      name: "Login",
      link: "/Login",
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
