import React from 'react';
import  './acceuil.css';
import { Link } from 'react-router-dom';

const Acceuil = () => (
    <div className='acceuil'>
        <a href='http://www.ousman-o.fashion'>
            <button className='buttonSite'>
                Visiter le site
            </button>
        </a>
        <Link to='/mainpage'>
            <button className='buttonBoutique'>
                Visiter la boutique
            </button>
        </Link>   
    </div>
)
export default Acceuil ;