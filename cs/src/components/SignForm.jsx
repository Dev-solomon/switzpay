import '../assets/styles/SignUp.css'; 

function SignupForm() {
  return (
    <main className='body-signup'>
        <div className='container col-lg-6 col-10 col-md-7 signup'>
                <div className='top_form d-flex flex-row justify-content-between'>
                    <p>Sign Up</p>
                    <button className='mt-3'>Register</button>
                </div>

                <span>Let's create your account!</span>
                {/* Form below for processing */}
                <form>   
                        {/* The username input field */}
                    <div>
                        <label>Username</label> <br/>
                        <input type='text' placeholder='Some-User' id='signup-form' /> 
                    </div> 
                    {/* The email input area */}
                    <div>
                        <label>Email</label> <br/>
                        <input type='email' placeholder='Some-User@gmail.com' id='signup-form' /> 
                    </div>
                    {/* The Password and confirmation area */}
                    <div className='d-flex flex-row justify-content-between pass-field'>
                        <div className='w-50 p-1'>
                            <label>Password</label> <br/>
                            <input type='password' placeholder='Password' id='signup-form' /> 
                        </div>
                        <div className='w-50 p-1'>
                            <label>Confirm Password</label> <br/>
                            <input type='password' placeholder='Confirm Mypassword' id='signup-form' /> 
                        </div>
                    </div>

                    <div >
                            <label> Phone Number</label> <br/>
                            <input type='text' placeholder=' Mobile Number' id='signup-form' /> 
                    </div>
                    <i style={{color: 'white',fontsize: '13px'}} className='privacy-policy'>
                        <input  type='radio' className='mt-3 radio' />
                        By ticking this button,you agree to our privacy policy and our terms of service?
                    </i>


                </form>

            
            </div>
    </main>
  )
}

export default SignupForm;