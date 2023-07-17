import "./Blog.css";
import { frquincies, postguitar, postsConcert } from "../../assets";

const Blog = () => {
  return (
    <section id="blog">
      <div className="wrapper">
        <h2>Latest Post</h2>
        <div className="content-container">
          <div className="container">
            <a href="#" className="top-btn">
              Daw
            </a>
            <img src={frquincies} alt="" />
            <div className="footer">
              <p>How to use Drum Machine in logic Pro Max</p>
            </div>
          </div>
          <div className="container">
            <a href="#" className="top-btn">
              Mixing
            </a>
            <img src={postguitar} alt="" />
            <div className="footer">
              <p>How To Mix Guitars Effectively</p>
            </div>
          </div>
          <div className="container">
            <a href="#" className="top-btn">
              Vox
            </a>
            <img src={postsConcert} alt="" />
            <div className="footer">
              <p>The Real Power of Harmonies in Music Production</p>
            </div>
          </div>
        </div>
        <div className="main-btn">
          <a href="#">All Post</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
