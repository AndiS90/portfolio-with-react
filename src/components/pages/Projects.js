import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import project1 from  './assets/images/project-1.jpg';
import project2 from './assets/images/project-2.jpg';
import project3 from './assets/images/project-3.jpg';
import project4 from './assets/images/project-4.jpg';
import project5 from './assets/images/project-5.jpg';
import sc1 from './assets/images/screenshot1.gif';
import sc2 from './assets/images/screenshot2.gif';
import sc3 from './assets/images/tech-blog-acnh-screenshot.gif';

export default function Projects() {
  return (
   
<section id="Work" class="Work">
      <h2>Work</h2>

      <Carousel class="carousel-container">

        <Carousel.Item interval={1500}>
      <img class="cimage" className="d-block w-100" src={project1} alt="computer against skyline" />
      <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
      <img class="cimage" className="d-block w-100" src={project2} alt="hands on typewriter"/>
      <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item interval={1500}>
      <img class="cimage"  className="d-block w-100" src={project5} alt="cluttered books on table"/>
      <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

 </section>
   
  );
}
