import "@fontsource/league-mono";
import "@fontsource/montserrat/600.css";

export const About2 = () => {
  return (
    <section style={{ fontFamily: "Montserrat" }} class="text-black">
      <div class="max-w-screen mx-4 px-4 py-16 sm:px-6 lg:px-8">
        <div class="">
          <h2 class="text-4xl font-bold sm:text-4xl">
            Swags that actually matter.
          </h2>

          <p class="mt-4 sm:text-xl text-secondary">
            Mintable Blocks adds more value to swags through proof of ownership
            and tradablity.
          </p>
        </div>

        <ul class="mt-8 border-4 border-black border-opacity-25 divide-y-2 divide-black sm:grid sm:divide-y-0 sm:divide-x-2 sm:border-l-0 sm:border-r-0 divide-opacity-25 sm:grid-cols-3">
          <li class="p-8">
            <p class="text-3xl font-extrabold">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
            </p>
            <p class="mt-1 text-xl font-medium">Authentic</p>
          </li>

          <li class="p-8">
            <p class="text-3xl font-extrabold">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                ></path>
              </svg>
            </p>
            <p class="mt-1 text-xl font-medium">Digi Physical</p>
          </li>

          <li class="p-8">
            <p class="text-3xl font-extrabold">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </p>
            <p class="mt-1 text-xl font-medium">Tradable</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
