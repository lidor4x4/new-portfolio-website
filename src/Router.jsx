import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactMe from "./components/Contact/ContactMe";
import EmailSent from "./components/emailSent/EmailSent";
import AboutMe from "./components/AboutMe/AboutMe";
function Router() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/contact/email-sent" element={<EmailSent />} />
          </Routes>
        </BrowserRouter>
      </>
    );
}
export default Router;

