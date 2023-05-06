import React from 'react';
import {Routes,Route} from "react-router-dom";
import AboutusSection from '../content/aboutus';
import Contactus from '../content/contactus';
import Education from '../content/education';
import Experiencesection from '../content/experience';
import Hobbies from '../content/hobbies';
import Mywebsite from '../content/mywebsite';
import Personaldetail from '../content/personaldetail';
import Summarysection from '../content/summary';
import Technicalskill from '../content/technicalskill';

const Layoutsection = () => {
  return (
    <div className='layoutsection'>

   <Routes>
       <Route exact={true} path='/' element={<AboutusSection />} />
       <Route exact={true} path='/education' element={<Education />} />
       <Route exact={true} path='/experience' element={<Experiencesection />} />
       <Route exact={true} path='/summary' element={<Summarysection />} />
       <Route exact={true} path='/technicalskill' element={<Technicalskill />} />
       <Route exact={true} path='/experience' element={<Experiencesection />} />
       <Route exact={true} path='/mywebsite' element={<Mywebsite />} />
       <Route exact={true} path='/hobbies' element={<Hobbies />} />
       <Route exact={true} path='/personaldetail' element={<Personaldetail />} />
       <Route exact={true} path='/contactus' element={<Contactus />} />

   </Routes>
   </div>
  )
}

export default Layoutsection;