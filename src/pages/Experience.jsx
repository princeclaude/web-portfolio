import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';


export default function Experience() {
    const {darkMode} = useDarkMode();
    return (
      <>
        <div
          className={`font-bold mt-10 mb-3 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Experience
        </div>
        <div
          className={`border rounded-xl p-6 mt-3 ${
            darkMode
              ? "border-gray-700 bg-black text-white"
              : "border-gray-400 bg-white text-white"
          }`}
        >
          <h3
            className={`font-semibold text-lg ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Carlton Plc.
          </h3>
          <p className="text-sm text-gray-500">Lagos, Nigeria.</p>
          <b className="text-sm text-gray-700">Frontend Engineer </b>
          <i className="text-gray-500 text-sm font-extralight">2019 - 2021</i>

          <ul
            className={`mt-4 list-disc leading-relaxed list-inside space-y-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <li>
              Collaborated with a team of frontend developers to deliver
              responsive and scalable user interfaces.
            </li>
            <li>
              Oversaw development and maintenance of multiple web and mobile
              applications, including Carlton Food and Carlton Game.
            </li>
            <li>
              Improved the UI/UX of existing production apps, resulting in
              enhanced performance and user engagement.
            </li>
            <li>
              Authored technical blog content for Tech Today, Carlton's official
              tech publication.
            </li>
          </ul>
        </div>
        <div
          className={`border rounded-xl p-6 mt-9 mb-5 ${
            darkMode
              ? "border-gray-700 bg-black text-white"
              : "border-gray-400 bg-white text-white"
          }`}
        >
          <h3
            className={`font-semibold text-lg ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Sterk Technologies.
          </h3>
          <p className="text-sm text-gray-500">Lagos, Nigeria.</p>
          <b className="text-sm text-gray-700">Frontend Engineer </b>
          <i className="text-gray-500 text-sm font-extralight">2022 - 2024</i>

          <ul
            className={`mt-4 list-disc leading-relaxed list-inside space-y-3 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <li>
              Partnered with backend engineers and product designers to develop
              internal software solutions.
            </li>
            <li>
              Led a team of frontend engineers in building custom web and mobile
              applications for clients.
            </li>
            <li>
              {" "}
              Represented the company at various IT conferences and
              industry events
            </li>
          </ul>
        </div>
      </>
    );
}
