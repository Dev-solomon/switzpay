import '../assets/styles/Login.css'; 

export default function LoginForm() {
  return (
    <div className='bg-holder'>
        <div className='body-login'>
            
<div class="login-content col-lg-5 col-md-8 col-10">
 <div class="text"><span className="loader-timer"></span>Login Form</div>
  <form action="#">
    <div class="field" id='login-field'>
      <span class="fa fa-user"></span>   
      <input type="text" placeholder="Email Id" required/>
   
    </div>
    <div class="field" id='login-field'>
      <span class="fa fa-lock"></span>
      <input type="password" placeholder="Password"/>
      
    </div>
    
    <button className='login-but'>Enter</button>
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
