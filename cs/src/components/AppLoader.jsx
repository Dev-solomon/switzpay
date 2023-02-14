import logo from '../assets/imgs/switz_logo.png';
import '../assets/styles/App.css';

// This is the Loader for the App
function AppLoader(){ 
    return(
      <div className="loader d-flex flex-column">
        <img src={logo} className="loader-logo" alt="SwitzPAY" />
        <span className="loader-timer"></span>
      </div>
    );
  } 
 

export default AppLoader;
