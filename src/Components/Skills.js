import React from 'react'; 
import { SiDjango } from "react-icons/si"; 
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaHtml5, FaCss3, FaReacteurope, FaDatabase} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import { SiVercel } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Python: <FaPython/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Django: <SiDjango />, 
        CSS: <FaCss3 />, 
        HTML: <FaHtml5 />, 
        SQL: <FaDatabase />, 
        
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
