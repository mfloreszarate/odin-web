import { WhatsappIcon } from "../components/common/whatsapp/Whatsapp";
import Experience from "./experience/Experience";
import Introduction from "./introduction/Introduction";
import Navbar from "../components/layout/navbar/Navbar";
import { Services } from "./services/Services";
import { Projects } from "./projects/Projects";
import { Clients } from "./clients/Clients";

export default function Home() {
  return (
    <>
      <div className="page-container" style={{ display: 'relative' }}>
        <Navbar />
        <Introduction />
        <Experience />
        <Services />
        <Projects />
        <Clients />
        <WhatsappIcon />
      </div>
    </>)
}
