import Experience from "./experience/Experience";
import Introduction from "./introduction/Introduction";
import { Services } from "./services/Services";
import { Projects } from "./projects/Projects";
import { Clients } from "./clients/Clients";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {

  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [location]);

  return (
    <>
      <Introduction />
      <Experience />
      <Services />
      <Projects />
      <Clients />
    </>)
}
