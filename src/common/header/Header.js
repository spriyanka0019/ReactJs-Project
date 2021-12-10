import React from 'react';
import { Fragment } from 'react';
import logo from '../../assets/logo.svg';
import './Header.css'
import Button from "@material-ui/core/Button";


export default function Header(props){
    return(
        <div>
            <div  className="header" >
            <img  className="logo" src = {logo}  alt="Logo"/>
            <Button className="buttonLogin" variant="contained">Login</Button>
            </div>
        </div>

    )
}

