import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Fabian Diaz</h4>
      <h4>Copyright &copy; - 2023 FBS Cloud Network ☁️</h4>
      <div className='footerLinks'>
        <a href="https://github.com/FabockDays" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/nestor-fabian-diaz" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:fabiandz.91@hotmail.com' target='_blank'><GrMail/></a>
      
      </div>
    </footer>
  )
}

export default Footer