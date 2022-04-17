import React from 'react';
import selfie from "./assets/images/me.jpg";
import handelbar from './assets/images/icons-handlebar-mustache-90.png'
import js from './assets/images/icons8-javascript-logo-100.png'
import gql from './assets/images/icons-graphql-96.png'
import mysql from './assets/images/icons-mysql-96.png'
import node from './assets/images/icons-node-js-96.png'
import react from './assets/images/icons-react-100.png'
import underline from './assets/images/underline.png';

export default function About() {
  return (
    
    <section id="AboutMe" class="AboutMe" >


    <h2>About Me</h2>
    <img class='underline' src={underline} alt="gold ornate underline decoration" />
    <div class="intro">
    <img class='selfie' src={selfie} alt="devastatingly handsome woman" />
    <p>
      Salutations, I'm Andrea Strickland and having just received certification from SMU's accredited Full-Stack Bootcamp, 
      I'm thrilled to announce my grand beginnings in web development. 
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
          <img src={js} id="clipped" alt="javascript icon"/> 
      <div class="centered">
        <span>Javascript</span>
      </div>
        </div>
        <div class="clipped-border">
      <img src={mysql} id="clipped" alt="mySQL icon"/>
      <div class="centered">
        <span>MySQL</span>
      </div>
        </div>
      <div class="clipped-border">
    <img src={node} id="clipped" alt="node icon"/>
    <div class="centered">
        <span>Node</span>
      </div>
      </div>
      <div class="clipped-border">
    <img src={handelbar} id="clipped" alt="handlebar icon"/>
    <div class="centered">
        <span>Handlebars</span>
      </div>
      </div>
    <div class="clipped-border">
    <img src={react} id="clipped" alt="react icon"/>
    <div class="centered">
        <span>React</span>
      </div>
    </div>
    <div class = "shadow"></div>
    
    </div>
</div>

  </section>
  );
}
