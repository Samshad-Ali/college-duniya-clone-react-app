import React, { useState } from "react";
import { ImMobile2, ImSearch } from "react-icons/im";
import { HiOutlineUser } from "react-icons/hi";
import { RxTriangleDown,  } from "react-icons/rx";
import Typerwriter from "typewriter-effect";
import Hover_card from "./Hover_Card";

const NavBar = () => {
  const [disable, setDisable] = useState(false);
  const [btn, setBtn] = useState(false);
  const handleLink = () => {
    setDisable(true);
  };

  const handleBtn = () => {
    setBtn(true);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <a href="#">Top Universities & Colleges</a>
            <a href="#">Top Courses</a>
            <a href="#">Exams</a>
            <a href="#">Study Abroad</a>
            <a href="#">Reviews</a>
            <a href="#">News</a>
            <a href="#">Admission 2023</a>
            <a href="#">Write a Review</a>
            <a href="#">More</a>
            <a href="#">
              Top Coupons
              <span className="new">New</span>
            </a>
          </ul>
          <div>
            <p>
              <HiOutlineUser />

              <span>Login</span>
            </p>
            <p>
              <ImMobile2 />

              <span>Download</span>
            </p>
          </div>
        </nav>
        <div className="second-nav">
          <div className="left-side">
            <img
              src="https://stanzaliving.collegedunia.com/images/logo.svg"
              alt="photo"
            />
            <button className="btn">
              Select Goal <RxTriangleDown />{" "}
            </button>
          </div>
          <div className="right-side">
            <ul>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                B.Tech <RxTriangleDown />{" "}
              </a>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                MBA
                <RxTriangleDown />{" "}
              </a>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                MBBS <RxTriangleDown />{" "}
              </a>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                Design <RxTriangleDown />{" "}
              </a>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                Law <RxTriangleDown />{" "}
              </a>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                Science <RxTriangleDown />{" "}
              </a>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                Study Abroad <RxTriangleDown />{" "}
              </a>
              <a
                onMouseEnter={() => handleLink()}
                onMouseLeave={() => {
                  setDisable(false);
                }}
                href="#"
              >
                All Courses <RxTriangleDown />{" "}
              </a>
              <span>
                <ImSearch />
              </span>
            </ul>
          </div>
        </div>
        <main className="main">
          <h1>
            <span>Find Over</span>
            <Typerwriter
              options={{
                strings: [
                  "1 Lakh Reviews",
                  "11000+ Courses",
                  "25000+ Colleges",
                  "250+ Exams",
                ],
                loop: true,
                autoStart: true,
                cursor: "",
              }}
            />
            <span> in India</span>
          </h1>
          <div>
            <ImSearch />
            <input
              type="text"
              placeholder="Search for colleges, exams, courses and more.."
            />
            <button className="search">Search</button>
          </div>
          <div className="bottom">
            <div>
              <p>Your Recent Visits</p>
              <button className="btn">IIM Bangalore, Bangalore</button>
            </div>
            <button
              onClick={() => {
                handleBtn();
              }}
              className="couns"
            >
              Need Couselling
            </button>
          </div>
        </main>

        <div className="hoverItems">
          {disable ? (
            <div className="hover">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis ipsam quia harum corporis eos eligendi ea cumque quo
                reiciendis ipsa, placeat nam totam dolor repellendus. Fugit
                quidem necessitatibus officiis itaque? Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Soluta quaerat molestiae
                architecto eos, laboriosam consectetur exercitationem nulla
                cumque, voluptate reiciendis sunt iusto officia voluptatem
                dolorem? Aut sit dicta mollitia fugiat reiciendis animi at eum
                praesentium explicabo, omnis nisi eaque ratione modi, sapiente
                dolorem accusamus quae molestiae corporis illo quasi voluptates
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
      {btn ? <Hover_card setBtn={setBtn} /> : ""}
    </>
  );
};

export default NavBar;


