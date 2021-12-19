import Head from "next/head";
import Announcement from "../components/Announcement";
import { CareersHeader } from "../components/Careers/CareersHeader";
import Footer from "../components/Footer";
import GradientLine from "../components/GradientLine";
import { About } from "../components/Landing/About";
import { Header } from "../components/Landing/Header";
import { Navbar } from "../components/Navbar";

export default function Careers() {
  return (
    <div>
      <GradientLine />
      <Navbar />
      <div className="bg-bg min-h-screen">
        <Head>
          <title>Careers</title>

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CareersHeader />
        {/* <About /> */}
      </div>
      <Footer />
    </div>
  );
}
