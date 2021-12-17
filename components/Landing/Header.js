import "@fontsource/montserrat/600.css";
import "@fontsource/press-start-2p";
import "@fontsource/gugi";
import "@fontsource/vt323";
import Head from "next/head";
import "@fontsource/dotgothic16";
import "@fontsource/poppins/700.css";

export const Header = () => {
  return (
    <div>
      <div class="p-10 lg:bg-heroimg lg:bg-opacity-50 bg-heroimgm bg-center sm:p-16 lg:p-24">
        <div class="max-w mx-auto text-center">
          <p
            style={{ fontFamily: "Montserrat" }}
            class="mt-10 text-3xl text lg:text-8xl"
          >
            Mintable Blocks{" "}
          </p>

          <p
            style={{ fontFamily: "Montserrat" }}
            class="text-sm lg:text-2xl mt-8 font-medium text-gray-500"
          >
            The world is going decentralized and non-fungible,{" "}
            <br className="hidden lg:block" />
            Why not gifts, fashion and swag?
          </p>
          <div class="mt-12 sm:items-center sm:justify-center sm:flex">
            <a
              style={{ fontFamily: "Montserrat" }}
              href=""
              class="block text-xl px-5 py-3 shadow-2xl font-medium text-white bg-black"
            >
              View Whitepaper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
