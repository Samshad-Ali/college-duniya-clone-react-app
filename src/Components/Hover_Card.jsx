import React from "react";
import {AiOutlineClose} from "react-icons/ai";

const Hover_Card = ({setBtn}) => {

    const handleClose=()=>{
        setBtn(false)
    }

  return (
    <div className="container">
      <div className="left-part">
        <div className="upper-page">
          <h3>How Collegedunia helps you in Admission</h3>
          <div className="mini-box">
            <MiniCard
              img="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch"
              name="Brochure Details"
            />
            <MiniCard
              img="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch"
              name="Check Detailed Fees"
            />
            <MiniCard
              img="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch"
              name="Shortlist & Apply"
            />
            <MiniCard
              img="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch"
              name="24/7 Counselling"
            />
            <MiniCard
              img="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch"
              name="Scholarships"
            />
            <MiniCard
              img="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch"
              name="Application Deadlines"
            />
          </div>
        </div>
        <div className="lower-page">
          <h3>What people say</h3>
          <div>
            <img
              src="https://images.collegedunia.com/public/asset/img/leadform/gurmeet.jpg?h=42&w=42&mode=stretch"
              alt=""
            />
            <div className="details">
              <p>
                Collegedunia is a one-stop solution to all your education
                related queries.
              </p>
              <h4>Gurmeet Singh</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="right-part">
        <div className="upper">
          <div className="left">
            <div>

            <img
              src="https://images.collegedunia.com/public/asset/img/cd-static-nr/leadform_logo.png?h=50&w=50&mode=stretch"
              alt=""
              />
              </div>
              <div>

            <h2>Register Now To Apply</h2>
            <p>Get details and latest updates</p>
              </div>
          </div>
          <button onClick={()=>handleClose()} > <AiOutlineClose/> </button>
        </div>
        <div className="middle">
            <input type="text" placeholder="Full Name *" />
            <input type="text" placeholder="Email Address *" />
            <input type="text" placeholder="Mobile Number *" />
            <input type="text" placeholder="City You Live in *" />
            <input type="text" placeholder="Course Interested In *" />
        </div>
        <div className="lower">
            <p>By submitting this form, you accept and agree to our <span>
            Terms of Use.   </span></p>
            <div>
                <a href="#">Already Registered? Click Here To Login.</a>
                <button>SUBMIT</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hover_Card;

const MiniCard = ({ img, name }) => {
  return (
    <div className="mini-card">
      <img src={img} />

      <p> {name} </p>
    </div>
  );
};
