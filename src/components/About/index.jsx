import './index.scss'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
  return (
    <div className="container about-page">
        <div className="text-zone">
      <h1>
        About Me
      </h1>
      <p>
        I am an ambitious individual who constantly strives to push the limits of my abilities. I am always looking for new challenges and opportunities to grow both personally and professionally. My drive and determination have led me to pursue a career in becoming a full-stack developer, and I am committed to becoming the best developer I can be.
      </p>
        <p>
          I am extremely confident in my work as a front-end developer. I have honed my skills through extensive practice and by staying up-to-date with the latest web development technologies and trends. I am able to tackle most coding problems and always deliver high-quality work that meets or exceeds my clients' expectations.
        </p>
        <p>
          As a junior full-stack developer, I am eager to learn and grow within the industry. I have a solid foundation in HTML, CSS, JavaScript, and Python and am familiar with various front-end frameworks such as React. I am excited to work on challenging projects and contribute to the success of any team I am a part of.
        </p>
        <p>
          Being a seasoned customer service expert with extensive managerial experience in restaurants and hotels, I take great pride in delivering exceptional experiences to guests. With a keen eye for detail, I have honed my ability to anticipate and address customer needs while managing teams to deliver outstanding service. From resolving complex customer issues to mentoring staff, I am committed to ensuring that every guest interaction is positive and memorable. My passion for hospitality, combined with my expertise in customer service and management, make me a valuable asset to any organization seeking to elevate their guest experience.
        </p>
    </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#000000" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      
    
    
  )
}

export default About