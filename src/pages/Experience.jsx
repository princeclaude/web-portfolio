import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';


export default function Experience() {
    const {darkMode} = useDarkMode();
    return (
      <>
            <div className={`font-bold mt-10 mb-3 ${darkMode ? "text-white" : "text-black"}`}>Experience</div>
            <div className={`border rounded-xl p-6 mt-3 ${darkMode ? "border-gray-700 bg-black text-white" : "border-gray-400 bg-white text-white"}`}>
                <h3 className={`font-semibold text-lg ${darkMode? "text-white": "text-black"}`}>Carlton Plc.</h3>
                <p className='text-sm text-gray-500'>Lagos, Nigeria.</p>
                <b className='text-sm text-gray-700'>Frontend Engineer </b>
                <i className="text-gray-500 text-sm font-extralight">2019 - 2021</i>
                
                <ul className={`mt-4 list-disc leading-relaxed list-inside space-y-3 ${darkMode? "text-white" : "text-black"}`}>
                    <li>Worked admist a team of talented developers to solve the company's software needs in frontend.</li>
                    <li>Mangaged a lot of web and mobile applications such as Carlton food, carlton game etc.</li>
                    <li>As a frontend engineer, upgraded the UI of some applications already in production. </li>
                    <li>Contributed to the blog posts of Tech today(a carlton blog for tech news)</li>


                    

                </ul>
                
                
               
                
            </div>
            <div className={`border rounded-xl p-6 mt-9 mb-5 ${darkMode ? "border-gray-700 bg-black text-white" : "border-gray-400 bg-white text-white"}`}>
                <h3 className={`font-semibold text-lg ${darkMode? "text-white": "text-black"}`}>Sterk Technologies.</h3>
                <p className='text-sm text-gray-500'>Lagos, Nigeria.</p>
                <b className='text-sm text-gray-700'>Frontend Engineer </b>
                <i className="text-gray-500 text-sm font-extralight">2022 - 2024</i>
                
                <ul className={`mt-4 list-disc leading-relaxed list-inside space-y-3 ${darkMode? "text-white" : "text-black"}`}>
                    <li>Collaborated with backend engineers and product designers to buld internal software solutions.</li>
                    <li> Lead a team of frontend engineers to create custom web and mobile solutions for clients</li>
                    <li> Represented the company in different IT events</li>

                </ul>
                
               
                
            </div>
    </>
      
  )
}
