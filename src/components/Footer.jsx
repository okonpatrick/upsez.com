import { MailchimpForm } from "./Forms/MailChimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
// import "animate.css";
// import "animate.css/animate.css";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center">
          <MailchimpForm />

          <div className="sm:w-1/2 text-center">
            <div className="social-icon">
              <a href="https://github.com/okonpatrick/" className="mr-4">
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/patrick-okon/" className="mr-4">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://mobile.facebook.com/patrick.okon.10420">
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p className="text-white text-sm mt-4">
              © {year} <span className="font-semibold">Online Shopping Store</span> by{" "}
              <span className="font-semibold">Upsez</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
