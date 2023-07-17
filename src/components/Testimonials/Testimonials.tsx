import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets";
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="wrapper">
        <h2>What out Students Say?</h2>
        <div className="content-container">
          <div className="content">
            <img src={testimonial1} alt="" />
            <div>
              <h3>Peter Adams</h3>
              <p>This is a great course. I got to learn a lot</p>
            </div>
          </div>
          <div className="content">
            <img src={testimonial2} alt="" />
            <div>
              <h3>Robert Fox</h3>
              <p>
                I got to learn a lot about Music Production with this course.
                Thanks :{")"}
              </p>
            </div>
          </div>
          <div className="content">
            <img src={testimonial3} alt="" />
            <div>
              <h3>Emily Smith</h3>
              <p>Awesome great job</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
