import Head from "next/head";
import Announcement from "../components/Announcement";
import { ContactHeader } from "../components/Contact/ContactHeader";
import Footer from "../components/Footer";
import GradientLine from "../components/GradientLine";
import { About } from "../components/Landing/About";
import { Header } from "../components/Landing/Header";
import { Navbar } from "../components/Navbar";
import { TeamBody } from "../components/Team/TeamBody";
import { TeamHeader } from "../components/Team/TeamHeader";

export default function Team() {
  return (
    <div>
      <GradientLine />
      <Navbar />
      <div className="bg-bg min-h-screen">
        <Head>
          <title>Mintable Blocks</title>

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactHeader />
        {/* <About /> */}
      </div>
      <Footer />
    </div>
  );
}
