import React, { useState } from "react";
import Diploma from "./Components/Diploma";
import Goal_Section from "./Components/Goal_Section";
import NavBar from "./Components/NavBar";
import { RxTriangleRight } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "./Styles/App.scss";
import "./Styles/mediaqueries.scss";
import Footer from "./Components/Footer";
const App = () => {
  const [bar,setBar]=useState(false);
  const handleBars= ()=>{
      setBar(true)
  }
  return (
    <>
      <NavBar />
      <Goal_Section />
      <Diploma />
      <Footer/>
      <PhoneNav bar={bar} setBar={setBar} />
      <button onClick={()=>{handleBars()}} className="bar-btn">
        <FaBars />
      </button>
    </>
  );
};

export default App;

const PhoneNav = ({bar,setBar}) => {
  return (
    <div className={`phone ${bar?'phoneCome':''}`}>
    
        <div>
        <img
          src="https://stanzaliving.collegedunia.com/images/logo.svg"
          alt="photo"
        />
        <span onClick={()=>setBar(!bar)} >
        <AiOutlineClose />
        </span>
      </div>

      <ul>
        <a onClick={()=>{setBar(false)}} href="#">
          B.Tech <RxTriangleRight />{" "}
        </a>
        <a onClick={()=>{setBar(false)}} href="#">
          MBA
          <RxTriangleRight />{" "}
        </a>
        <a onClick={()=>{setBar(false)}} href="#">
          MBBS <RxTriangleRight />{" "}
        </a>
        <a onClick={()=>{setBar(false)}} href="#">
          Design <RxTriangleRight />{" "}
        </a>
        <a onClick={()=>{setBar(false)}} href="#">
          Law <RxTriangleRight />{" "}
        </a>
        <a onClick={()=>{setBar(false)}} href="#">
          Science <RxTriangleRight />{" "}
        </a>
        <a onClick={()=>{setBar(false)}} href="#">
          Study Abroad <RxTriangleRight />{" "}
        </a>
        <a onClick={()=>{setBar(false)}} href="#">
          All Courses <RxTriangleRight />{" "}
        </a>
      </ul>
    </div>
  );
};
