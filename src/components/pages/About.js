import React from 'react';
import selfie from "./assets/images/me.jpg";
import handelbar from './assets/images/icons-handlebar-mustache-90.png'
import js from './assets/images/icons8-javascript-logo-100.png'
import gql from './assets/images/icons-graphql-96.png'
import mysql from './assets/images/icons-mysql-96.png'
import node from './assets/images/icons-node-js-96.png'
import react from './assets/images/icons-react-100.png'

export default function About() {
  return (
    
    <section id="AboutMe" class="AboutMe" >


    <h2>About Me</h2>
    <div>
    <img class='selfie' src={selfie}  />
    <p>
      Salutations, my name is Andrea Strickland and I'm thoroughly enjoying my ongoing
      education in web development through SMU's accredited Full-Stack Bootcamp. 
      Prior to 2020 I spent 6 years as a pricing-analyst at a ticket brokerage company. 
      From 2009 to 2012 I attended UT Dallas majoring in mathematics
      minoring in UTeach. Before that I was a small town Valedictorian in Leonard, TX.  My passions include
      absorbing true crime factoids at an alarming rate,
      swing dancing when I can, and island design a'la Animal Crossing.
      <br></br>
      <br></br>
      My current favorite proficiencies include but are not limited to...
      </p>
    </div>

    <div class= "galleryWrapper">
      <div class = "gallery">
        <div class="clipped-border">
      <img src={js} id="clipped"/>
        </div>
        <div class="clipped-border">
      <img src={mysql} id="clipped"/>
        </div>
      <div class="clipped-border">
    <img src={node} id="clipped"/>
      </div>
      <div class="clipped-border">
    <img src={handelbar} id="clipped"/>
      </div>
    <div class="clipped-border">
    <img src={react} id="clipped"/>
    </div>
    <div class = "shadow"></div>
    
    </div>
</div>

  </section>
  );
}
