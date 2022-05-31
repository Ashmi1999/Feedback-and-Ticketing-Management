import './App.css';
// import './Form.css';
import React, { useEffect } from "react";


import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import Test from './components/Test';
import Header from './components/Header';
// import UtilityBill from './components/UtilityBill';
// import Home from './components/Home';
// import Supermarket from './components/Supermarket';
// import Pharmacy from './components/Pharmacy';
// import UtilityChoose from './components/UtilityChoose';
// import Electricity from './components/Electricity';
// import Water from './components/Water';
// import Telephone from './components/Telephone';
import Addticket from './components/Addticket';
import Viewticket from './components/Viewticket';
import Form from './components/Form';
import Feedback from './components/Feedback';
import FeedBackDetails from './components/FeedBackDetails';
import CustomTabPanes from './components/CustomTabPanes';
// import Dashboard from './components/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <header>
        <div className='YoMart-title'>
          <h1>YoMart e-Supermarket</h1>
        </div>
      </header>
      <main>
        <Header/>
        <Routes>
            {/* <Route path= "/home" element={<Home/>}/>
            <Route path= "/supermarket" element={<Supermarket/>}/>
            <Route path= "/pharmacy" element={<Pharmacy/>}/>    
            <Route path= "/upay" element={<UtilityBill/>}/>
            <Route path= "/gotonext" element={<UtilityChoose/>} />
            <Route path= "/electricity" element={<Electricity/>} />
            <Route path= "/water" element={<Water/>} />
            <Route path= "/telephone" element={<Telephone/>} /> */}
            <Route path= "/addticket" element={<Addticket/>} />
            <Route path= "/viewticket" element={<Viewticket/>} />
            <Route path="/Form" element={<Form/>} />
            <Route path="/Feedback" element={<Feedback/>} />
            <Route path="/FeedBackDetails" element={<FeedBackDetails/>} />
            <Route path="/CustomTabPanes" element={<CustomTabPanes/>} />
            {/* <Route path="/Dashboard" element={<Dashboard/>} /> */}
            
            

        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
