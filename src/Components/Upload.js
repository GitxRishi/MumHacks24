import React from 'react'
import upload from './Images/upload(1).png'
import extract from './Images/zip-file(1).png'
import check from './Images/check(1).png'
import back from './Images/back.png'
import { VisibContext } from './Context/VisibContext'
const Upload = () => {

  return (

    <div className='hero'>
      
      <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
      <img src={back} alt="back" style={{maxWidth:"60px", maxHeight:'60px', marginLeft:'-1300px'}} />
       
      <h1>Upload Your Files</h1>
      {/* Upload  */}
    <div>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center' , marginTop:'40px'}}>
        <img src={upload} alt="upload" style={{maxWidth:"100px", maxHeight:'100px'}} />
        <p className='abhaya-libre-regular' style={{width:'600px', marginLeft:'80px' , fontSize:'20px'}}>Easily upload Excel/CSV files from your local system to begin building your data pipeline. With drag-and-drop functionality, you can quickly integrate data without needing to worry about complex configurations.</p>
      </div>
    </div>
      {/* Extract  */}
      <div>
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:'40px' }}>
    <img src={extract} alt="extract" style={{maxWidth:"100px", maxHeight:'100px'}} />
    <p className='abhaya-libre-regular' style={{width:'600px', marginLeft:'80px' , fontSize:'20px'}}>Automatically extract and transform data from your uploaded Excel files. Our platform simplifies the process, allowing you to clean, filter, and map your Excel data to suit your specific needs, powered by AI-driven optimization.</p>
    </div>
      </div>
      {/* Review  */}
      <div>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', marginTop:'40px' }}>
    <img src={check} alt="check" style={{maxWidth:"100px", maxHeight:'100px'}} />
    <p className='abhaya-libre-regular' style={{width:'600px', marginLeft:'80px' , fontSize:'20px'}}>Visualize and review your data pipelines with real-time feedback and AI-powered suggestions. Our platform provides insights into how to improve your workflows, ensuring your data is always optimized and ready for analysis.
</p>
    </div>
      </div>
      <button style={{borderRadius:'10px' , width:'151px', height:'71px', fontSize:'25px', backgroundColor:'#506BD7', border:'none', marginTop:'30px'}} className='abhaya-libre-regular'>Upload</button>
       <p className='abhaya-libre-regular' style={{textDecoration:'underline'}} >Skip for now</p>
      </div>
    </div>
  )
}
export default Upload;
