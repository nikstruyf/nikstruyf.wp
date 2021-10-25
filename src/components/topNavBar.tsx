import * as React from 'react';
import weblogo from '../pic/niklogo.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function TopNavBar() {

    return (
        <div className="navbar navbar-nav navbar-expand navbar-light " style={{backgroundColor: "#ffffff", padding:"3vh"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {/* <img src={weblogo} alt="" width="40" className="d-inline-block align-text-bottom"/> */}
                    <span className="align-text-top" style={{fontSize:32, fontFamily:"Gugi"}}>NIK <span style={{color:"#28bf64",}}>K.</span> STRUYF</span>
                </Link>
                <div className="navbar-nav ">
                    <Link className="nav-link mx-2" to="/About" style={{fontSize:22}}>About</Link>
                    <Link className="nav-link mx-2" to="/Resume" style={{fontSize:22}}>Resume</Link>
                    <Link className="nav-link mx-2" to="/Contact" style={{fontSize:22}}>Contact</Link>
                </div> 
                
            </div>
        </div>

    );
}

export default TopNavBar