import Head from "next/head";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import GradientLine from "../components/GradientLine";
import { About } from "../components/Landing/About";
import { Header } from "../components/Landing/Header";
import { Navbar } from "../components/Navbar";
import { TeamBody } from "../components/Team/TeamBody";
import { TeamHeader } from "../components/Team/TeamHeader";

export default function Team() {
  return (
    <div className="bg-bg">
      <GradientLine />
      <Navbar />
      <div className="bg-bg mb-20 min-h-screen">
        <Head>
          <title>Team</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TeamHeader />
        <TeamBody />
        {/* <About /> */}
      </div>
      <Footer />
    </div>
  );
}
