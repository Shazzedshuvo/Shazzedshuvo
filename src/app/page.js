import About from "./Component2/About";
import Contact from "./Component2/ContactPage";
import Experiance from "./Component2/Experiance";
import Fottar from "./Component2/Fottar";
import Home1 from "./Component2/Home1";
import Projacts from "./Component2/Projacts";
import Skils from "./Component2/Skils";
import { Stars } from "./Component2/Stars";
import Teastmonial from "./Component2/Teastmonial";

import Bagground from "./Componnt/Bagground";
import CustomCoursor from "./Componnt/CustomCoursor";
import Navbar from "./Componnt/Navbar";

export default function Home() {
  return (
    <>
      <Bagground />

      <CustomCoursor />

      <Navbar />

      <Home1 />

      <Stars />

      <About />

      <Skils />

      <Projacts />

      <Experiance />

      <Teastmonial />

      <Contact />

      <Fottar />
    </>
  );
}