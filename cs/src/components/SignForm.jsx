import '../assets/styles/SignUp.css'; 
import { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { ADD_USER } from '../mutations/userMutations';
import { GET_USERS } from '../queries/userQueries'; 
import axios from 'axios';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');

    const [addUser] = useMutation(ADD_USER, {
        variables: { username, email, password, confirmPassword, phone },
        update(cache, { data: { addUser } }) {
          const { users } = cache.readQuery({ query: GET_USERS });
    
          cache.writeQuery({
            query: GET_USERS,
            data: { users: [...users, addUser] },
          });
        },
      });

      const onSubmit = (e) => {
        e.preventDefault();
    
        if (username === '' || email === '' || password === '' || confirmPassword === '' || phone === '') {
          return alert('Please Fill In Any Missing Fields');
        } 
        

        axios
          .post(`http://localhost:5000/checkSign/${username}/${email}/${password}/${confirmPassword}`)
          .then(res => console.log(res.data.bMessage))
          .catch(err => console.error(err));
        
    
        addUser(username, email, password, confirmPassword, phone);

        axios
        .post(`http://localhost:5000/checkSign/newUser/${email}`)
        .then(res => console.log(res.data.bMessage))
        .catch(err => console.error(err));
      
    
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setPhone('');
      };

  return (
    <main className='body-signup'>
        <div className='container col-lg-6 col-10 col-md-7 signup'>
                <div className='top_form d-flex flex-row justify-content-between'>
                    <p>Sign Up</p>
                    <button className='mt-3 btn' onClick={onSubmit}>Register</button>
                </div>

                <span>Let's create your account!</span>
                {/* Form below for processing */}
                <form>   
                        {/* The username input field */}
                    <div>
                        <label>Username</label> <br/>
                        <input type='text' placeholder='Some-User' id='signup-form' value={username} onChange={(e) => setUsername(e.target.value)} /> 
                    </div> 
                    {/* The email input area */}
                    <div>
                        <label>Email</label> <br/>
                        <input type='email' placeholder='Some-User@gmail.com' id='signup-form' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                    </div>
                    {/* The Password and confirmation area */}
                    <div className='d-flex flex-row justify-content-between pass-field'>
                        <div className='w-50 p-1'>
                            <label>Password</label> <br/>
                            <input type='password' placeholder='Password' id='signup-form' value={password} onChange={(e) => setPassword(e.target.value)} /> 
                        </div>
                        <div className='w-50 p-1'>
                            <label>Confirm Password</label> <br/>
                            <input type='password' placeholder='Confirm Mypassword' id='signup-form' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
                        </div>
                    </div>

                    <div >
                            <label> Phone Number</label> <br/>
                            <input type='text' placeholder=' Mobile Number' id='signup-form' value={phone} onChange={(e) => setPhone(e.target.value)} /> 
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