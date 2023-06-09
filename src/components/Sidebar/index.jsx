import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

  
const Sidebar = () => (
  <div className='nav-bar'>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="4d4d4e" />
      </NavLink>
       <NavLink exact="true" activeclassname="active" classname="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
      </NavLink>
   <NavLink exact="true" activeclassname="active" classname="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
      </NavLink>
  
  
    </nav>
    <ul>
      <li>
        <a target="-blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jackson-banish-012635267/">
             <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
          
        </a>
       
        
      </li>
      <li>
        <a target="-blank"
          rel="noreferrer"
          href="https://github.com/shr0udd1">
             <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
          
        </a>
       
        
      </li>
    </ul>
  </div>
)

export default Sidebar