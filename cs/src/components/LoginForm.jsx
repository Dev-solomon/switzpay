import '../assets/styles/Login.css'; 
import { useState } from 'react';
import { useQuery} from '@apollo/client';   
import { GET_USERS } from '../queries/userQueries'; 
import  AppLoader  from './AppLoader';
import axios from 'axios';

export default function LoginForm() { 
  const [email, setEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState(''); 

  const { loading, error, data} = useQuery(GET_USERS);

  const onLogin = (e) => {
    e.preventDefault();

    if(email === '' || loginPassword === ''){
      return alert('Enter All Login Details');
    } 

    if (loading) return <AppLoader />;
    if (error) return alert('Something Went Wrong!');
   
    if(!loading && !error && data){

      axios
      .post(`http://localhost:5000/checkSign/${email}/${loginPassword}/`)
      .then(res => console.log(res.data.bMessage)) 
      .catch(err => console.error(err));

    } 

  }



  return (
    <div className='bg-holder'>
        <div className='body-login'>
            
<div class="login-content col-lg-5 col-md-8 col-10">
 <div class="text">Login Form</div>
  <form action="#">
    <div class="field" id='login-field'>
      <span class="fa fa-user"></span>   
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
   
    </div>
    <div class="field" id='login-field'>
      <span class="fa fa-lock"></span>
      <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required/>
      
    </div>
    
    <button className='login-but btn' onClick={onLogin}>Enter</button>
    <div class="or">Or</div>
    <div class="icon-button login"> 
        
      <span class="facebook"><i class="fa fa-facebook"></i>  Facebook</span>

      <span><i class="fa fa-google"></i>  Google</span>


    </div>
  </form>
</div>

        </div> 
    </div>
  )
}
