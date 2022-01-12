import React , { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import project1 from  './assets/images/project-1.jpg';
import project2 from './assets/images/project-2.jpg';
import project3 from './assets/images/project-3.jpg';
import project4 from './assets/images/project-4.jpg';
import project5 from './assets/images/project-5.jpg';
import sc1 from './assets/images/screenshot1.gif';
import sc2 from './assets/images/screenshot2.gif';
import sc3 from './assets/images/tech-blog-acnh-screenshot.gif';

export default function Projects() {

const [lgShow1, setLgShow1] = useState(false);
const [lgShow2, setLgShow2] = useState(false);
const [lgShow3, setLgShow3] = useState(false);


  return (
   
<section id="Work" class="Work">
      {/* <h2>Work</h2> */}

      <Carousel class="carousel-container">

        <Carousel.Item  interval={2500} onClick={() => setLgShow1(true)}>
      <img class="cimage" className="d-block w-100" src={project1} alt="computer against skyline" />
      <Carousel.Caption>
            <h3>Weather Dashboard</h3>
     
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500} onClick={() => setLgShow2(true)}>
      <img class="cimage" className="d-block w-100" src={project2} alt="hands on typewriter"/>
      <Carousel.Caption>
            <h3>Tech Blog: ACNH Edition</h3>
         
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={2500} onClick={() => setLgShow3(true)}>
      <img class="cimage"  className="d-block w-100" src={project5} alt="cluttered books on table"/>
      <Carousel.Caption>
            <h3>Javascript Quiz</h3>
           
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
 

<Modal size="lg" show={lgShow1} onHide={() => setLgShow1(false)} aria-labelledby="example-modal-sizes-title-lg">
<Modal.Header closeButton>
  <Modal.Title id="example-modal-sizes-title-lg">
   Weather Dashboard
  </Modal.Title>
</Modal.Header>
<Modal.Body>  
          <img src={sc1} class="screenshotGIF" alt="screenshot gif" />
          <p>Enter a city name and get a five day forecast including the current day's uv index in a warning color if necessary. 
            Through multiple api calls using jquery's ajax, data is pulled from the open weather api and thus manipulated through 
            a series of functions and a loop with conditionals.</p>
          <ul>
            <li> <a href="https://github.com/AndiS90/Weather-Dashboard" target="_blank" rel="noreferrer">GitHub Repository</a> </li>
            <li> <a href="https://andis90.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">Live Page</a> </li>
          </ul>
</Modal.Body>
</Modal>

<Modal size="lg" show={lgShow2} onHide={() => setLgShow2(false)} aria-labelledby="example-modal-sizes-title-lg">
<Modal.Header closeButton>
  <Modal.Title id="example-modal-sizes-title-lg">
   Tech Blog: ACNH Edition
  </Modal.Title>
</Modal.Header>
<Modal.Body>      
  <img src={sc3} class="screenshotGIF" alt="screenshot gif"/>
  <p>A Blog Application created with the express-handlebars package implemented for views, 
    the mySQL2 and Sequelize packages to connect to a MYSQL database for MODELS, 
    and and Express.js API for Controllers. The dotenv package is used for environment variables, 
    the bcrypt package to hash passwords, and the express-session, and connect-session-sequelize packages to add authentication.</p>
          <ul>
            <li> <a href="https://github.com/AndiS90/Tech-Blog" target="_blank" rel="noreferrer">GitHub Repository</a> </li>
            <li> <a href="https://polar-savannah-37169.herokuapp.com/" target="_blank" rel="noreferrer">Live Page</a> </li>
          </ul></Modal.Body>
</Modal>

<Modal size="lg" show={lgShow3} onHide={() => setLgShow3(false)} aria-labelledby="example-modal-sizes-title-lg">
<Modal.Header closeButton>
  <Modal.Title id="example-modal-sizes-title-lg">
    Javascript Quiz
  </Modal.Title>
 
</Modal.Header>
<Modal.Body>

<img src={sc2} class="screenshotGIF" alt="screenshot gif"/>
<p>A basic front end javascript quiz for practicing technical questions, whilst strengthening html, 
  css, and javascript with local storage capabilities.</p>
          <ul>
            <li> <a href="https://github.com/AndiS90/Javascript-Quiz" target="_blank" rel="noreferrer">GitHub Repository</a> </li>
            <li> <a href="https://andis90.github.io/Javascript-Quiz/" target="_blank" rel="noreferrer">Live Page</a> </li>
          </ul>

</Modal.Body>
</Modal>



   </section>
  );
}
