import "@fontsource/montserrat/600.css";
import TeamCard from "./TeamCard";

export const TeamBody = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="grid gap-10 mx-auto grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        <TeamCard
          name="Adithya Menon S"
          role="Co-founder"
          twitter="https://twitter.com/adithyamenons17"
          linkedin="https://www.linkedin.com/in/adithyamenons"
          image="assets/adithya.png"
          email="mailto:adithya@mintableblocks.com"
        />
        <TeamCard
          name="Kumaraguru T"
          role="Co-founder"
          twitter="https://twitter.com/hackyguru"
          linkedin="https://linkedin.com/in/kumaraguru7"
          image="assets/guru.png"
          email="mailto:guru@mintableblocks.com"
        />
        <TeamCard
          name="Elmer Moore"
          role="Business advisor"
          twitter="https://twitter.com/MintableBlocks"
          linkedin="https://linkedin.com/company/MintableBlocks"
          image="assets/elmer.png"
          email="mailto:elmer@mintableblocks.com"
        />
      </div>
    </div>
  );
};
