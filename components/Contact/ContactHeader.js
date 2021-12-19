import "@fontsource/montserrat/600.css";
import "@fontsource/press-start-2p";
import "@fontsource/gugi";
import "@fontsource/vt323";
import Head from "next/head";
import "@fontsource/dotgothic16";
import "@fontsource/poppins/700.css";

export const ContactHeader = () => {
  return (
    <div>
      <aside class="p-12 bg-gray-100 rounded-xl sm:p-16 lg:p-24">
        <div class="max-w mx-auto text-center">
          <p
            style={{ fontFamily: "Montserrat" }}
            class="mt-10 text-5xl text sm:text-8xl"
          >
            Contact us{" "}
          </p>

          <p
            style={{ fontFamily: "Montserrat" }}
            class="text-lg mt-8 font-medium text-gray-500"
          >
            Reach us out through email or simply schedule a 15 minute call.
          </p>
        </div>
        <a
          href=""
          class="mt-20 bg-white relative block p-8 border-t-4 border-black rounded-sm shadow-xl"
        >
          <h5 style={{ fontFamily: "Montserrat" }} class="text-4xl font-bold">
            Email
          </h5>
          <p
            style={{ fontFamily: "Montserrat" }}
            class="mt-4 sm:text-sm lg:text-xl font-medium text-gray-500"
          >
            contact@mintableblocks.com
          </p>
          <br class="lg:hidden sm:block" />
          <br class="lg:hidden sm:block" />
          <br class="lg:hidden sm:block" />

          <span class="absolute bottom-8 right-8">
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </span>
        </a>
        <a
          href=""
          class="mt-10 bg-white relative block p-8 border-t-4 border-black rounded-sm shadow-xl"
        >
          <h5 style={{ fontFamily: "Montserrat" }} class="text-4xl font-bold">
            Schedule a call
          </h5>
          <p
            style={{ fontFamily: "Montserrat" }}
            class="mt-4 sm:text-sm lg:text-xl font-medium text-gray-500"
          >
            Feel free to schedule calls if you have any queries regarding
            funding/ collaboration opportunities.
          </p>
          <br class="lg:hidden sm:block" />
          <br class="lg:hidden sm:block" />
          <br class="lg:hidden sm:block" />

          <span class="absolute bottom-8 right-8">
            <a
              href="https://calendly.com/hackyguru/15min"
              style={{ fontFamily: "Montserrat" }}
              className="bg-black p-3 text-white"
            >
              Schedule a call
            </a>
          </span>
        </a>
      </aside>
    </div>
  );
};
