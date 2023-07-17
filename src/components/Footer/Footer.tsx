import "./Footer.css";
import { instasvg, twittersvg, facebooksvg } from "../../assets";

const Footer = () => {
  return (
    <section id="footer">
      <div className="wrapper">
        <div className="container">
          <div className="content1">
            <h3>
              Sound<span>Dzign</span>
            </h3>
            <div className="logos">
              <a href="">
                <img src={facebooksvg} alt="" />
              </a>
              <a href="">
                <img src={twittersvg} alt="" />{" "}
              </a>
              <a href="">
                <img src={instasvg} alt="" />
              </a>
            </div>
          </div>
          <div className="content2">
            <h3 className="linkHeading">Quick Links</h3>
            <div className="links">
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="content3">
            <h3 className="linkHeading">Contact Us</h3>
            <div className="links">
              <ul>
                <li>
                  <a href="#">muazzia17@gmail.com</a>
                </li>
                <li>
                  <a href="#">+1232323123</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
