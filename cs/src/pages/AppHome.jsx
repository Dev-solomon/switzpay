import React, { Component} from 'react';
import HeaderAdmin from '../components/admin/HeaderAdmin';
import InfoCard from '../components/admin/InfoCard';
import RightBar from '../components/admin/RightBar'; 


// This is the class function for the Home-page of the app
class AppHome extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {name: ""}; 
    // }
 
    render(){
        return(
              <>
              <HeaderAdmin />
              <div className='container-fluid d-flex flex-row justify-content-between'> 
                <div className='d-flex flex-column container'>
                  <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-evenly'>
                      <InfoCard name="TOTAL INCOME"/> <InfoCard name="TRAFFIC VISITORS"/>
                  </div> 
                  <div className='d-flex flex-lg-row flex-md-row flex-column justify-content-evenly'>
                      <InfoCard name="TOTAL LEADS"/> <InfoCard name="TOTAL CLICKS"/>
                  </div>  
                </div> 

                <div>
                <RightBar/>
                </div> 
              </div>
                
              </>
        );
    }
}
 


export default AppHome;