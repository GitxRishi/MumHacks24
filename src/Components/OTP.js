import React, { useContext } from 'react'
import { useState } from 'react'
import { VisibContext } from './Context/VisibContext'
import google from './Images/google(1).png';

const OTP = () =>{
    
    const [opt , setOtp] = useState(null);

    return (
      <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <div style={{backgroundColor:'white', width:'600px', display:'flex', flexDirection:'column', alignItems:'center', border: '1px solid black', borderRadius:'10px'}}>
        <h2 className='abhaya-libre-bold' style={{marginTop:'20px'}}>Join Us Today!</h2>
         <input type="text" name="Name" id="name" placeholder='Enter OTP' style={{width:'520px', height:'40px', border:'1px solid black', borderRadius:'20px', paddingLeft:'20px',marginBottom:'20px', marginTop:'30px'}}/>
         <button style={{width:'150px', height:'50px', backgroundColor:'white', border:'1px solid black', marginBottom:'20px'}}>Register</button>
        </div>
      </div>
    )
  }

  export default OTP;