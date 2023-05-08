import { Link } from 'react-router-dom';
import './index.scss';



  


const Home = () => {

  return (
    
   <div className="container home-page">
        <div className="text-zone">
          
      <h1>Hi, <br/> I'm
            <img src="./Jlogo.png" classname="App-logo" alt="Logo" />ackson
      <br />
        Junior Full-Stack Developer </h1>
        
      <h2>Frontend Developer / Backend Developer/ Customer Service Expert</h2>
                 <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
    </div>
      </div>
  );
  
}

export default Home