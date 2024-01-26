import React from 'react';
import ProjectBox from './ProjectBox';
import DoritaIndumentary from '../images/DoritaIndumentary.png';
import EventsImage from '../images/EventsImage.png';
import ManudisImage from '../images/ManudisImage.png';
import BoxGamesImage from '../images/BoxGamesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={DoritaIndumentary} projectName="Dorita" />
        <ProjectBox projectPhoto={BoxGamesImage} projectName="BoxGames" />
        <ProjectBox projectPhoto={EventsImage} projectName="Events" />
        <ProjectBox projectPhoto={ManudisImage} projectName="Manudis" />
      </div>

    </div>
  )
}

export default Projects