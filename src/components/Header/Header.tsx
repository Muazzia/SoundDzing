import { Navbar } from "..";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="cta">
          <div className="course-name">Sound Desgin masterclass</div>
          <h1>Learn the Art of Sound Design</h1>
          <a href="#" className="demo-btn">
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
