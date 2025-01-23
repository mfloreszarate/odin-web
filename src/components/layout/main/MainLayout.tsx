import { Outlet } from "react-router-dom";
import { WhatsappIcon } from "../../common/whatsapp/Whatsapp";
import { Footer } from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const MainLayout = () => {

  return (
    <>
      <div className="page-container" style={{ display: 'relative' }}>
        <Navbar mainPage={true} />
        <Outlet />
        <Footer />
        <WhatsappIcon />
      </div>
    </>
  )
}

export default MainLayout;
