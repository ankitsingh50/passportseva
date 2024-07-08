
import Image from "next/image";
import Landing from "./Landing";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import OurServices from "./OurServices";

export default function Home() {
  return (
    <>
    <Landing/>
    <Aboutus/>
    {/* <OurServices/> */}
    <Contact/>
    </>
  );
}
