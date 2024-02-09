import React from 'react';
import {FaGithub, FaArrowRight} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ManudisDesc : " A 2D horror game developed with Python and Pygame, in collaboration with other developers, promises a terrifying and thrilling experience. From its focus on horror to the quality of its graphics and sound, the game is presented as an attractive proposal for fans of the genre on various platforms. It will be released at the end of 2024.",
   
    EventsDesc : "Developed with Python, Django and JavaScript, users can make reservations through the web interface, and the information is stored in a database. In addition, the application has an administrative panel that allows modifications to the reservations, offering an efficient tool for administration and supervision. ",
    EventsGithub : "https://github.com/FabockDays/L-events/tree/master",
    EventsWebsite : "https://levents.vercel.app/",

    DoritaDesc:"E-commerce website dedicated to the sale of clothing. Login and user registration. Exclusive OFFERS section for registered users only.  Shopping cart. Section for orders and shipments of products. Adaptable to all devices. Made with Javascript, React, Redux, Styled-Components, Hooks, Reducers. Deployed in Vercel.",
    DoritaGithub:"https://github.com/FabockDays/Dorita-eCommerce",
    DoritaWebsite:"https://dorita-e-commerce-ehem11oyd-fabockdays.vercel.app/",

    BoxGamesDesc : " website dedicated to the sale and download of games, offering users an immersive and accessible experience. Developed with HTML and CSS, the attractive design and captivating animations bring the platform to life, creating a visually pleasing space for video game lovers. The site guarantees an intuitive and easy navigation.  ",
    BoxGamesGithub : "https://github.com/FabockDays/box-game",
    BoxGamesWebsite : "https://box-game-eta.vercel.app/",
  }

  let showGithubButton = '';
  let showDemoButton = '';
  let showSoonButton = 'none';


  if (projectName === "Events") {
    showGithubButton = "block";
    showDemoButton = "none";
  } else if (projectName === "Manudis") {
    showGithubButton ="none";
    showDemoButton = "none";
    showSoonButton = "block"; 
  } else {
    showGithubButton = desc[projectName + 'Github'] === "" ? "none" : "block";
    showDemoButton = "block";
  }
  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        <a style={{ display: showGithubButton }} href={desc[projectName + 'Github']} target='_blank'>
          <button className='projectbtn'><FaGithub /> Github</button>
        </a>

        <a style={{ display: showDemoButton }} href={desc[projectName + 'Website']} target='_blank'>
          <button className='projectbtn'><CgFileDocument /> Demo</button>
        </a>

        <a style={{ display: showSoonButton }} href="#react-link" target='_blank'>
          <button className='projectbtn'><FaArrowRight /> Soon..</button>
        </a>

      </div>
    </div>
  )
}

export default ProjectBox;