// import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id='footer_section' className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="Contact">
                <h1>Contact Us</h1>
            </div>
            <div className="Hours_of_Operation">
                <h1>Hours of Operation</h1>
            </div>
            <div className="How_It_Works">
                <h1>How It Works</h1>
            </div>
            <div className="Services">
                <h1>Services</h1>
            </div>
    </footer>
  );
};

export default Footer;
