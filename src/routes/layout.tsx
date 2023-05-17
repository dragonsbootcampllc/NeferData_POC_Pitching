import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import  Header from '../components/Header/Header';



export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {

  return (
    <>
<Header/>
      <main>
        <Slot />
      </main>

    </>
  );
});
