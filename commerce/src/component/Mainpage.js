import React from 'react';
import './mainpage.css';
import Navbar from './Navbar';

const Mainpage =() => (
    <div className='mainpage'>
        <div className='header'> 
            <img src='/ousmanlog.png' alt ='logo'/>
            <hr/>
       </div>
       <div className='body'>
           <div className='boxone'>
                <p>Nouveautés</p>
                <Navbar/>
            </div>
            <div className='boxtwo'>

            </div>
       </div>
    </div>
)

export default Mainpage;