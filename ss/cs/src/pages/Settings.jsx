import '../assets/styles/Settings.css'; 
import React, { Component } from 'react'; 

class Settings extends Component {
    // constructor(props) {
    //     super(props);

    // }

    
    componentDidMount() {

    } 

    render() {
        return (
            <>
                <div className="wrapper settings bg-white mt-sm-5 col-10">
                    <h4 className="pb-4 border-bottom settings">Account settings</h4>
                    <div className="d-flex align-items-start py-3 border-bottom">
                        <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            className="img settings" alt=""/>
                        <div className="pl-sm-4 pl-2" id="img-section">
                            <b>Profile Photo</b>
                            <p>Accepted file type .png. Less than 1MB</p>
                            <button className="btn button border settings"><b>Upload</b></button>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="row py-2">
                            <div className="col-md-6">
                                <label className="settings" for="firstname">First Name</label>
                                <input type="text" className="bg-light form-control settings" placeholder="Steve"/>
                            </div>
                            <div className="col-md-6 pt-md-0 pt-3">
                                <label className="settings" for="lastname">Last Name</label>
                                <input type="text" className="bg-light form-control settings" placeholder="Smith"/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-md-6">
                                <label className="settings" for="email">Email Address</label>
                                <input type="text" className="bg-light form-control settings" placeholder="steve_@email.com"/>
                            </div>
                            <div className="col-md-6 pt-md-0 pt-3">
                                <label className="settings" for="phone">Phone Number</label>
                                <input type="tel" className="bg-light form-control settings" placeholder="+1 213-548-6015"/>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-md-6">
                                <label className="settings" for="country">Country</label>
                                <select name="country" id="country" className="bg-light settings">
                                    <option value="india" selected>India</option>
                                    <option value="usa">USA</option>
                                    <option value="uk">UK</option>
                                    <option value="uae">UAE</option>
                                </select>
                            </div>
                            <div className="col-md-6 pt-md-0 pt-3" id="lang">
                                <label className="settings" for="language">Language</label>
                                <div className="arrow">
                                    <select name="language" id="language" className="bg-light settings">
                                        <option value="english" selected>English</option>
                                        <option value="english_us">English (United States)</option>
                                        <option value="enguk">English UK</option>
                                        <option value="arab">Arabic</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="py-3 pb-4 border-bottom">
                            <button className="btn btn-primary mr-3 settings">Save Changes</button>
                            <button className="btn border button settings">Cancel</button>
                        </div>
                        <div className="d-sm-flex align-items-center pt-3" id="deactivate">
                            <div>
                                <b>Deactivate your account</b>
                                <p>Details about your recent account and password</p>
                            </div>
                            <div className="ml-auto">
                                <button className="btn danger settings">Deactivate</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

 

export default Settings;