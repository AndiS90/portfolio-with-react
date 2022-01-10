import React from 'react';
import selfie from "./assets/images/me.jpg";

export default function About() {
  return (
    <section id="AboutMe" class="AboutMe" >


    <h2>About Me</h2>
    <img src={selfie}  />
    <p>
      Salutations, my name is Andrea Strickland and I'm thoroughly enjoying my ongoing
      education in web development through SMU's accredited Full-Stack Bootcamp. My current favorite proficiencies include, HTML5, CSS, Javascript, jQuery, Node.js, MySQL, and Sequelize with a focus in Bootstrap and Materialize regarding design.
      Prior to 2020 I spent 6 years as a pricing-analyst at a ticket brokerage company. 
      From 2009 to 2012 I attended UT Dallas majoring in mathematics
      minoring in UTeach. Before that I was a small town Valedictorian in Leonard, TX.  My passions include
      absorbing true crime factoids at an alarming rate,
      swing dancing when I can, and island design a'la Animal Crossing.

    </p>
  
  </section>
  );
}
