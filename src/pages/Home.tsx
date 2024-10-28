import { WhatsappIcon } from "../components/common/whatsapp/Whatsapp";
import Experience from "./experience/Experience";
import Introduction from "./introduction/Introduction";
import Navbar from "../components/layout/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="page-container" style={{ display: 'relative' }}>
        <Navbar />
        <Introduction />
        <Experience />
        <WhatsappIcon />
      </div>
    </>)
}
