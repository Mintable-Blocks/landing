import "@fontsource/montserrat/600.css";
import TeamCard from "./TeamCard";

export const TeamBody = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="grid gap-10 mx-auto grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <TeamCard
          name="Adithya Menon S"
          role="Co-founder"
          twitter="https://twitter.com/hackyguru"
          linkedin="https://linkedin.com/kumaraguru7"
          image="assets/adithya.png"
        />
        <TeamCard
          name="Kumaraguru T"
          role="Co-founder"
          twitter="https://twitter.com/hackyguru"
          linkedin="https://linkedin.com/kumaraguru7"
          image="assets/guru.png"
        />
      </div>
    </div>
  );
};
