import React from 'react'
import google from './Images/google(1).png'
const Login = () => {
  return (
    <div>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <div style={{backgroundColor:'white', width:'600px', height:'550px', display:'flex', flexDirection:'column', alignItems:'center', border: '1px solid black', borderRadius:'10px'}}>
      <h2 className='abhaya-libre-bold'>Welcome Back , User!</h2>
       <input type="text" name="Name" id="name" placeholder='Enter Your Email Address' style={{width:'520px', height:'40px', border:'1px solid black', borderRadius:'20px', paddingLeft:'20px',marginBottom:'20px'}}/>
      <input type="text" name="Name" id="name" placeholder='Enter Your Password' style={{width:'520px', height:'40px', border:'1px solid black', borderRadius:'20px', paddingLeft:'20px',marginBottom:'20px'}}/>
      <button style={{width:'150px', height:'50px', backgroundColor:'white', border:'1px solid black', marginBottom:'20px'}}>Login</button>

        <div style={{width:'520px', height:'40px', border:'1px solid black', borderRadius:'20px', paddingLeft:'10px',marginBottom:'20px', display:'flex'}}>
        <div style={{width:'40px', height:'40px', display:'flex', justifyContent:'center',alignItems:'center'}}>
          <img src={google} style={{maxWidth:'25px'}} />
        </div>
        <p style={{margin:'12px 5px'}} className='abhaya-libre-regular'>Continue with Google</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login;
