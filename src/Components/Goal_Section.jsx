import React from "react";

const Goal_Section = () => {
  return (
    <section className="goal-section">
      <h2>Top Collections for Diploma in Engineering</h2>
    <div className="cart-box" >
      <Cart img='https://images.pexels.com/photos/5553065/pexels-photo-5553065.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/4145347/pexels-photo-4145347.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/1642055/pexels-photo-1642055.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/5553065/pexels-photo-5553065.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/5553065/pexels-photo-5553065.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/5428155/pexels-photo-5428155.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
      <Cart img='https://images.pexels.com/photos/5553065/pexels-photo-5553065.jpeg?auto=compress&cs=tinysrgb&w=600' title='Top College in India for Diploma in Engineering' />
    </div>
    <button>View More</button>
    </section>
  );
};

export default Goal_Section;

const Cart = ({img,title}) => (
  <div className="cart">
    <img src={img}  />
    <div>
      <h3> {title} </h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
        magnam vitae sunt eos cum, laudantium sed, culpa nesciunt.
      </p>
      <button>View Colleges</button>
    </div>
  </div>
);
