import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Aboutme from './Aboutme';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Project from './Project';
import Extra from './Extra';
import Hobbies from './Hobbies';
import Api from './Api';

function Home(){
    return(
    <div className = "container mt-4 mb-5 bgAbout">
        <Aboutme />
        <Education />
        <Skills />
        <Project />
        <Certifications />
        <Extra />
        <Hobbies />
    </div>
    )

}

export default Home;