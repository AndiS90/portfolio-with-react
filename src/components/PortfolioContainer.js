import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from "./Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import background from "./pages/assets/images/background-1.jpg";
import './pages/assets/css/Portfolio-CSS.css'
import './pages/assets/css/Reset.CSS'



export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');
  

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if(currentPage === 'Contact'){
      return <Contact />;
  }};

  const handlePageChange = (page) => setCurrentPage(page);

  return (
   <div>


      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer/>
    </div>
   
  );
};
