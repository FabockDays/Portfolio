import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Fabian Diaz</b> and I am from Buenos Aires, Argentina.
            I'm a <b>software developer</b> and a final year student at <b>Nucba Academy</b>. <br/><br/>
            I have done an internship as a <b>software developer</b> at Dorita S.R.L which is a company dedicated to selling garments.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Javascript' />
        <Skills skill='Python' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Django' />
        <Skills skill='SQL'/>
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About