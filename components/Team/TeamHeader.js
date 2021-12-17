import "@fontsource/montserrat/600.css";
import "@fontsource/press-start-2p";
import "@fontsource/gugi";
import "@fontsource/vt323";
import Head from "next/head";
import "@fontsource/dotgothic16";
import "@fontsource/poppins/700.css";

export const TeamHeader = () => {
  return (
    <div>
      <aside class="p-12 bg-gray-100 rounded-xl sm:p-16 lg:p-24">
        <div class="max-w mx-auto text-center">
          <p
            style={{ fontFamily: "Montserrat" }}
            class="mt-10 text-5xl text sm:text-8xl"
          >
            The Team{" "}
          </p>

          <p
            style={{ fontFamily: "Montserrat" }}
            class="text-lg mt-8 font-medium text-gray-500"
          >
            Community driven, borderless and super inclusive.
          </p>
        </div>
      </aside>
    </div>
  );
};
