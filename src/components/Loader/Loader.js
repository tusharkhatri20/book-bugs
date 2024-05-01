import React from 'react'
import { FadeLoader } from 'react-spinners'


import "./Loader.css";
export function Loader() {
  return (
    <div className="loader-wrapper">
       <FadeLoader color="steelblue" />;
    </div>
  );
}



