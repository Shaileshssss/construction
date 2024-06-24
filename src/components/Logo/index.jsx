import React from "react";
import './Logo.css'
import { PiBuildingsFill } from 'react-icons/pi'
import { TbBackhoe } from "react-icons/tb";

const Logo = () => {
    return (
        <div className="logo">
            <div className="icon__container">
            <TbBackhoe />
            </div>
            <h1 className="name">JCB<span>Tractor</span></h1>

        </div>
    )
}

export default Logo;
