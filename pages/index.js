import Head from "next/head";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import GradientLine from "../components/GradientLine";
import { About } from "../components/Landing/About";
import { About2 } from "../components/Landing/About2";
import ContactSupporters from "../components/Landing/ContactSupporters";
import { Header } from "../components/Landing/Header";
import Roadmap from "../components/Landing/Roadmap";
import SupportedBy from "../components/Landing/SupportedBy";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <GradientLine />
      <Navbar />
      <div className="bg-bg min-h-screen">
        <Head>
          <title>Mintable Blocks</title>

          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta charset="UTF-8" />
          <meta
            name="description"
            content="The world's first platform to gift digi-physical swags as NFTs."
          />
          <meta
            name="keywords"
            content="Mintable Blocks, mintable, digi physical nft, nft, physical nft, nft swag, mintable block, mintable, blocks, gift nft, nft gifts, crypto"
          />
        </Head>
        <Header />
        <About />
        <About2 />
        <div id="roadmap">
          <Roadmap />
        </div>
        <div id="supporters">
          <ContactSupporters />
        </div>
        <Footer />
      </div>
    </div>
  );
}
