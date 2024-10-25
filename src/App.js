
import Hero from './Components/Hero';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Upload from './Components/Upload';
import OTP from './Components/OTP';
import Dashboard from './Components/Dashboard';
import ExampleWrapper from './Components/FormUpload';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VisibProvider } from './Components/Context/VisibContext';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='hero' element={<Hero/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='otp' element={<OTP/>}/>
        <Route path='upload' element={<Upload/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='FormUpload' element={<ExampleWrapper/>}/>
      </Routes>
      
    </Router>
   
   
  );
}

export default App;
