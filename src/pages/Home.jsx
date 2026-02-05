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

export default function Home() {
  return (
    <div>
        <div id="home"><Hero /></div>
        <Roles />
        <UxuiSpoiler />
        <SnsMarkerting />
        <MakeupScroll />
        <div id="about"><AboutMe1 /></div>
        <Introduction />
        <History />
        <div id="work"><TeamProject /></div>
        <PersonalProject />
        <CloneCoding />
        <Sns />
        <Qna />
        <div id="contact"><Contact /></div>
        <div className="layoutPadding">
        </div>
    </div>
  );
}