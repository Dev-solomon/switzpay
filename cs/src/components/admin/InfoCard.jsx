import React, { Component } from 'react';  
import '../../assets//styles/Admin.css';
// InfoCard details for displaying on the Admin Dashboard
class InfoCard extends Component {
    // constructor(props) {
    //     super(props);
    //      this.state = "";
    // }  
    


    render() {
        return (
            <>
                <div className="col-lg-6 col-md-6 col-12" id='infoCard'>
                    <div className="card">
                    <div className="card-body">
                    <span className='options'>...</span>
                        <div className="row">  
                        <div className="col-9">  
                            <div className="d-flex align-items-center align-self-start">
                            <h3 className="mb-0 card_name">{this.props.name}</h3> 
                            <sup className='card_num ms-2 fs-6'>790</sup> 
                            </div>
                        </div>
                        <div className="col-3"> 
                            <div className="icon icon-box-success">
                            <span className="mdi mdi-arrow-top-right icon-item"></span>
                            </div>
                        </div>
                        </div> 
                    </div>
                    </div>
                </div> 
            </>
        );
    }
}
 
export default InfoCard;
