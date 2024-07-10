import Image from "next/image";
import Landing from "./Landing";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import OurServices from "./OurServices";
import FAQ from "@/app/FAQ";
import Process from "@/app/Process"

export default function Home() {
  return (
    <>
      <Landing />
      <Aboutus />
      <OurServices />
      <Process/>
      <FAQ />
      <Contact />
    </>
  );
}
