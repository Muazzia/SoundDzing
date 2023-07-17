import { useState } from "react";
import { MenuIcon, closeIcon } from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  const [menuListClass, setClass] = useState("menuList close");

  return (
    <>
      <nav>
        <a href="#" className="btn">
          Sound<span>DZign</span>
        </a>
        <ul>
          <li>
            <a href="#footer">About</a>
          </li>
          <li>
            <a href="#topics">Course Detail</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
        <div className="menuIcon">
          <button onClick={() => setClass("menuList open")}>
            <img src={MenuIcon} alt="" />
          </button>
        </div>
      </nav>
      <div className={menuListClass}>
        <div className="icon">
          <button onClick={() => setClass("menuList close")}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <ul>
          <li>
            <a onClick={() => setClass("menuList close")} href="#footer">
              ABout
            </a>
          </li>
          <li>
            <a onClick={() => setClass("menuList close")} href="#topics">
              Course Detail
            </a>
          </li>
          <li>
            <a onClick={() => setClass("menuList close")} href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => setClass("menuList close")} href="#testimonials">
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
