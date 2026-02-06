import { motion, AnimatePresence } from "framer-motion";

import Hero from "../components/Hero.jsx";
import Roles from "../components/Roles.jsx";
import UxuiSpoiler from "../components/UxuiSpoiler.jsx";
import SnsMarkerting from "../components/SnsMarkerting.jsx";
import MakeupScroll from "../components/Makeup.jsx";
import AboutMe1 from "../components/AboutMe1.jsx";
import Introduction from "../components/Introduction.jsx";
import History from "../components/History.jsx";
import TeamProject from "../components/TeamProject.jsx";
import PersonalProject from "../components/PersonalProject.jsx";
import CloneCoding from "../components/CloneCoding.jsx";
import Sns from "../components/Sns.jsx";
import Qna from "../components/Qna.jsx";
import Contact from "./Contact.jsx";

export default function Home({ introDone }) {
  return (
    <div className="relative">

      <AnimatePresence mode="wait">
        {introDone && (
          <motion.div
            key="hero-reveal"
            id="home"
            className="relative z-10"
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>

      <Roles />
      <UxuiSpoiler />
      <SnsMarkerting />
      <MakeupScroll />

      <div id="about">
        <AboutMe1 />
      </div>

      <Introduction />
      <History />

      <div id="work">
        <TeamProject />
      </div>

      <PersonalProject />
      <CloneCoding />
      <Sns />
      <Qna />

      <div id="contact">
        <Contact />
      </div>

      <div className="layoutPadding" />
    </div>
  );
}
