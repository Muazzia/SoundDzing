import "./Topic.css";
import {
  two1,
  two2,
  two4,
  two5,
  two6,
  frquincies,
  linesvg2,
} from "../../assets";
import { useState } from "react";

const Topics = () => {
  const [image, setImage] = useState(frquincies);
  return (
    <section id="topics">
      <div className="wrapper">
        <h2>What will you Learn?</h2>
        <div className="content">
          <ul>
            <li>
              <a
                style={
                  image === frquincies ? { color: "red" } : { color: "white" }
                }
                onMouseEnter={() => setImage(frquincies)}
              >
                What are frequencies?
              </a>
            </li>
            <li>
              <a
                style={image === two1 ? { color: "red" } : { color: "white" }}
                onMouseEnter={() => setImage(two1)}
              >
                {" "}
                Using Daw{" "}
              </a>
            </li>
            <li>
              <a
                style={image === two2 ? { color: "red" } : { color: "white" }}
                onMouseEnter={() => setImage(two2)}
              >
                Voice Processing
              </a>
            </li>
            <li>
              <a
                style={image === two4 ? { color: "red" } : { color: "white" }}
                onMouseEnter={() => setImage(two4)}
              >
                Mixing
              </a>
            </li>
            <li>
              <a
                style={image === two5 ? { color: "red" } : { color: "white" }}
                onMouseEnter={() => setImage(two5)}
              >
                Mixing Console
              </a>
            </li>
            <li>
              <a
                style={image === two6 ? { color: "red" } : { color: "white" }}
                onMouseEnter={() => setImage(two6)}
              >
                Mastering
              </a>
            </li>
          </ul>
          <img src={image} alt="" className="mainImage" />
          <img src={linesvg2} alt="" className="svg" />
        </div>
      </div>
    </section>
  );
};

export default Topics;
