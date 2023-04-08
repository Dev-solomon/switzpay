import React, { Component } from 'react';
import '../assets/styles/LoginHeader.css';
import switz_logo  from '../assets/imgs/Rectangle.png';
import swiss from '../assets/imgs/swiss-franc.png';
import notifyBell from '../assets/imgs/notification.png';
import user from '../assets/imgs/image.png';
import arrowdown from '../assets/imgs/arrow-down2.png';
import { BiUserCircle} from 'react-icons/bi';
import { BiLogOut} from 'react-icons/bi';
import { MdAdminPanelSettings} from 'react-icons/md';

export class LoginHeader extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props); 

    
  }

  render() {
    return (   
      <div className='Header d-lg-flex flex-lg-row justify-content-between'>
       <div className='header-logo col-4 my-auto'>
            <img  src={switz_logo} alt="switzpay-logo" />
        </div>

        <div className='loggedIn-Header d-lg-flex flex-lg-row justify-content-lg-evenly col-lg-6'>
          <p className='my-auto'>Today's Earnings: <span className='total_earnings'><img src={ swiss } alt="swiss-franc" /> 48.2</span></p>
          <p className='my-auto'><a href='/dashboard'>Dashboard</a></p>
          <p className='my-auto'><a href='/offers'>Offers</a></p>
          <p className='my-auto notification'><span className='notification-bell'><img src={notifyBell} alt ="notification-bell"/></span><i className='bell-num'>4</i></p>
          <p className='my-auto dropdown dropleft float-right'><img src={user}  alt="loggedIn-user" className='loggedIn-user'/>
           <img src={arrowdown} alt='arrow-down' className='arrowdown ' data-toggle="dropdown"/> 
           <div className="dropdown-menu">
              <span className="dropdown-item"><BiUserCircle/>{this.props.name}</span>
              <a className="dropdown-item" href="/"><MdAdminPanelSettings/>Settings</a>
              <a className="dropdown-item" href="/"><BiLogOut/>LogOut</a>
            </div>
          </p> 
                        
          
        </div>
        
      </div> 
    )
  }
}

export default LoginHeader
