import "@fontsource/league-mono";
import "@fontsource/montserrat/600.css";

export const About2 = () => {
  return (
    <section style={{ fontFamily: "Montserrat" }} class="text-black">
      <div class="max-w-screen mx-4 px-4 py-16 sm:px-6 lg:px-8">
        <div class="">
          <h2 class="text-4xl font-bold sm:text-4xl">
            Web3 is not just for the web. It's for lifestyle, gifting and
            soverniers too.
          </h2>

          <p class="mt-4 sm:text-xl text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
            praesentium aut nam vel adipisci sunt provident quisquam temporibus
            doloribus maiores!
          </p>
        </div>

        <ul class="mt-8 border-4 border-black border-opacity-25 divide-y-2 divide-black sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3">
          <li class="p-8">
            <p class="text-3xl font-extrabold">100+</p>
            <p class="mt-1 text-xl font-medium">Something</p>
          </li>

          <li class="p-8">
            <p class="text-3xl font-extrabold">5000</p>
            <p class="mt-1 text-xl font-medium">Things</p>
          </li>

          <li class="p-8">
            <p class="text-3xl font-extrabold">50</p>
            <p class="mt-1 text-xl font-medium">Items</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
