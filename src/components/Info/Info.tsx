import "./Info.css";
import { threeMusic, threeStudent, linesvg1 } from "../../assets";

const Info = () => {
  return (
    <section id="info">
      <div className="wrapper">
        <img src={linesvg1} alt="" className="linesvg" />
        <div className="students">
          <img src={threeStudent} alt="" />
          <h3>23000+</h3>
          <p>Students</p>
        </div>
        <div className="students">
          <img src={threeMusic} alt="" />
          <h3>26Hours</h3>
          <p>Video Content</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
