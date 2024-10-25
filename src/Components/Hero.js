import React from 'react'

const Hero = () => {
  return (
    <div className='hero' >
      <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1 style={{fontSize:'71px'}} className='abhaya-libre-bold'>Welcome to Data101</h1>
        <h2 style={{fontSize:'42px' , marginTop:'20px'}} className='abhaya-libre-bold'>Upload. Extract. Review.</h2>
        <p style={{fontSize:'22px', width:'660px', textAlign:'center',color:'#727070'}} className='abhaya-libre-regular'>Our Low-Code Data Integration platform empowers users to effortlessly create and manage ETL pipelines. With an intuitive drag-and-drop interface and AI-driven recommendations, you can optimize data workflows without the need for deep technical expertise. From retail to marketing, streamline your data processes and accelerate insights with ease.</p>
        <div style={{display:'flex', marginTop:'40px'}}>
        <button style={{borderRadius:'10px' , width:'151px', height:'71px', fontSize:'25px', backgroundColor:'#506BD7', border:'none', marginRight:'146px'}} className='abhaya-libre-regular'>Login</button>
        <button style={{borderRadius:'10px' , width:'151px', height:'71px', fontSize:'25px', backgroundColor:'#506BD7', border:'none'}} className='abhaya-libre-regular'>Sign Up</button>
        </div> 
      </div>
    </div>
  )
}

export default Hero;
