import "@fontsource/league-mono";
import "@fontsource/montserrat/600.css";

export const About = () => {
  return (
    <div className="p-5">
      <aside class="relative p-5 hover:shadow-2xl border-4 bg-white border-black overflow-hidden text-gray-300  lg:flex">
        <div
          style={{ fontFamily: "Montserrat" }}
          class="w-full p-12 text-center bg-primary lg:w-1/2 sm:p-16 lg:p-24 lg:text-left"
        >
          <div class="max-w-xl mx-auto lg:ml-0">
            <p class="mt-2 text-2xl text-white sm:text-3xl">
              Digi Physical NFTs on the rise
            </p>

            <p class=" lg:mt-4 mt-5 text-sm lg:text-lg text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
          </div>
        </div>

        <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-auto">
          <img
            src="assets/g1.png"
            class="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </aside>
    </div>
  );
};
