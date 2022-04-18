import React , { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import project1 from  './assets/images/project-1.jpg';
import project2 from './assets/images/project-2.jpg';
import project3 from './assets/images/project-3.jpg';
import project4 from './assets/images/project-4.jpg';
import project5 from './assets/images/project-5.jpg';
import project6 from './assets/images/project-6.jpg';
import sc1 from './assets/images/screenshot1.gif';
import sc2 from './assets/images/screenshot2.gif';
import sc3 from './assets/images/tech-blog-acnh-screenshot.gif';
import sc4 from './assets/images/note-taker-screenshot.png';
import sc5 from './assets/images/scheduling-screenshot.png';

export default function Projects() {

const [lgShow1, setLgShow1] = useState(false);
const [lgShow2, setLgShow2] = useState(false);
const [lgShow3, setLgShow3] = useState(false);
const [lgShow4, setLgShow4] = useState(false);
const [lgShow5, setLgShow5] = useState(false);
const [lgShow6, setLgShow6] = useState(false);
  return (
   
<section id="Work" class="Work">
      {/* <h2>Work</h2> */}

      <Carousel class="carousel-container">

        <Carousel.Item  interval={250000} onClick={() => setLgShow1(true)}>
      <img class="cimage" className=" " src={project1} alt="computer against skyline" />
      
      <Carousel.Caption>
        <div class="caption">
           <h3>Weather Dashboard</h3>
        </div>
     
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

        <Carousel.Item interval={2500} onClick={() => setLgShow4(true)}>
      <img class="cimage"  className="d-block w-100" src={project3} alt="mug on book"/>
      <Carousel.Caption>
            <h3>Note-Taker</h3>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500} onClick={() => setLgShow5(true)}>
      <img class="cimage"  className="d-block w-100" src={project4} alt="marble bust"/>
      <Carousel.Caption>
            <h3>Scheduling App</h3>
           
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500} onClick={() => setLgShow6(true)}>
      <img class="cimage"  className="d-block w-100" src={project6} alt=""/>
      <Carousel.Caption>
            <h3>README Generator</h3>
           
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
      <Row>
        
          <Col xs={12} ><img src={sc1} class="screenshotGIF" alt="screenshot gif" /></Col>
          <Col xs={12}> <p> &emsp;Enter a city name and get a five day forecast including the current day's uv index in a warning color if necessary. 
            Through multiple api calls using jquery's ajax, data is pulled from the open weather api and thus manipulated through 
            a series of functions and a loop with conditionals.
          </p></Col>
      </Row>
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
<Col xs={12} ><img src={sc3} class="screenshotGIF" alt="screenshot gif"/></Col>
<Col xs={12} > <p> &emsp;A Blog Application created with the express-handlebars package implemented for views, 
    the mySQL2 and Sequelize packages to connect to a MYSQL database for MODELS, 
    and and Express.js API for Controllers. The dotenv package is used for environment variables, 
    the bcrypt package to hash passwords, and the express-session, and connect-session-sequelize packages to add authentication.</p>
  </Col>       
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

<Col xs={12} ><img src={sc2} class="screenshotGIF" alt="screenshot"/></Col>
<Col xs={12} ><p> &emsp; A basic front end javascript quiz for practicing technical questions, whilst strengthening html, 
  css, and javascript with local storage capabilities.</p></Col>
          <ul>
            <li> <a href="https://github.com/AndiS90/Javascript-Quiz" target="_blank" rel="noreferrer">GitHub Repository</a> </li>
            <li> <a href="https://andis90.github.io/Javascript-Quiz/" target="_blank" rel="noreferrer">Live Page</a> </li>
          </ul>

</Modal.Body>
</Modal>

<Modal size="lg" show={lgShow4} onHide={() => setLgShow4(false)} aria-labelledby="example-modal-sizes-title-lg">
<Modal.Header closeButton>
  <Modal.Title id="example-modal-sizes-title-lg">
    Note-Taker
  </Modal.Title>
 
</Modal.Header>
<Modal.Body>

<Col xs={12} ><img src={sc4} class="screenshotGIF" alt="screenshot gif"/></Col>
<Col xs={12} ><p> &emsp; An application that can be used to write and save notes involving an express.js backend which saves and retrieves note data from a JSON file
Writing this code required a fundamental knowledge of Node.js, the file system module, and Express.js</p>
    </Col>
          <ul>
            <li> <a href="https://github.com/AndiS90/Note-Taker" target="_blank" rel="noreferrer">GitHub Repository</a> </li>
            <li> <a href="https://shielded-shelf-65590.herokuapp.com/" target="_blank" rel="noreferrer">Live Page</a> </li>
          </ul>

</Modal.Body>
</Modal>

<Modal size="lg" show={lgShow5} onHide={() => setLgShow5(false)} aria-labelledby="example-modal-sizes-title-lg">
<Modal.Header closeButton>
  <Modal.Title id="example-modal-sizes-title-lg">
    Scheduling App
  </Modal.Title>
 
</Modal.Header>
<Modal.Body>
<Col xs={12} >
<img src={sc5} class="screenshotGIF" alt="screenshot gif"/></Col>
<Col xs={12} ><p> &emsp; A simple day planner that presents the current date with a functioning clock. Each hour long block is color coded depending on the present hour. 
  User's events are stored in local storage, while Moment.js is used for presenting time.</p></Col>
          <ul>
            <li> <a href="https://github.com/AndiS90/Work-Day-Scheduler" target="_blank" rel="noreferrer">GitHub Repository</a> </li>
            <li> <a href="https://andis90.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">Live Page</a> </li>
          </ul>

</Modal.Body>
</Modal>

<Modal size="lg" show={lgShow6} onHide={() => setLgShow6(false)} aria-labelledby="example-modal-sizes-title-lg">
<Modal.Header closeButton>
  <Modal.Title id="example-modal-sizes-title-lg">
    README Generator
  </Modal.Title>
 
</Modal.Header>
<Modal.Body>

{/* <img src={} class="screenshotGIF" alt="screenshot gif"/> */}
<Col xs={12} ><p> &emsp; Creates README file based off user input through command line. This code required a core understanding of Node.js, the file system module, and the Inquirer Package.</p>
          </Col>
          <ul>
            <li> <a href="https://github.com/AndiS90/README-Generator" target="_blank" rel="noreferrer">GitHub Repository</a> </li>
            <li> <a href="https://www.youtube.com/watch?v=OIHmMYze404" target="_blank" rel="noreferrer">Tutorial Video</a> </li>
          </ul>

</Modal.Body>
</Modal>


   </section>
  );
}
