import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Diploma = () => {
  return (
    <section className='diploma'>
     <h2>Diploma in Engineering Latest Notification</h2>
     <button>National</button>
     <div className='dip-card'>
        <div>
       <div className="image">
        <img src="https://images.collegedunia.com/public/college_data/images/logos/ntaLOGO.jpg?h=44&w=44&mode=stretch" alt="" />
       </div>
     <h3>CUET 2023 Application Form Out, Click Here to...</h3>
        </div>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates sitam hello this is me odit maiores ipsam i want that the quick excepturi  hic nisi quia.</p>
            <button>Read More <FaAngleRight/> </button>
        </div>
     </div>
    </section>
  )
}

export default Diploma;