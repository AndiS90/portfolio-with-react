import React from 'react';
import underline from './pages/assets/images/underline.png';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <div>
    <h1>Strickland, Andrea <span class="Andi">(Andi)</span>
    {/* <img class='underline' src={underline} alt="gold ornate underline decoration" /> */}
    </h1>
    </div>
    <nav>
    <ul className=" ">
      {/* <li className="" >
          
          <a href="#home" onClick={() => handlePageChange('Home')}         
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link' 
          >
          Home
          </a>
      </li> */}
      <li className="">
        <a href="#about" onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
          About
        </a>
      </li>
      <li className="" >
        <a href="#projects" onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
          Projects
        </a>
      </li>
      <li className="" >
        <a href="#contact" onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
          Contact
        </a>
      </li>
      <li className=""> 
        <a href="./assets/Resume 2020.pdf" download="Resume"  className={'nav-link'}>Resume</a>
      </li>
    </ul>
    </nav>


    </header>
  );
}

export default NavTabs;
