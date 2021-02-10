import React from 'react';
import '../App.css';
import '../components/Resume.css';
import InforLogo from '../images/logo-infor.png';

function Resume() {
    return (
        <div className='resume-container'>
            <div className='infor-logo'>
                <img src={InforLogo} alt='infor-logo'  width = "100" height = "100"></img>
            </div>
            <div className='header-2'>
                <h2>SOFTWARE ENGINEER</h2>
            </div>
            <h3>(2016-2020)</h3>
            <div className='p1'>
            <p>DEVELOPED A SPECIALIZED APPLICATION IN PUBLIC SECTORS USED IN THE AUSTRALIAN AND NEW ZEALAND LOCAL GOVERNMENTS.</p>
            </div>
            <div className='p2'>
                <p>PART OF A DEVELOPMENT TEAM THAT IS RESPONSIBLE IN MIGRATING (PATHWAY) A WINDOWS/DESKTOP BASED APPLICATION INTO WEB-BASED APPLICATION.</p>
            </div>
            <div className='p3'>
                <p>C# .NET MVC SQL SERVER HTML CSHTML CSS JAVASCRIPT TYPESCRIPT XML UNIFACE</p>
            </div>
        </div>
 
    )
}

export default Resume
