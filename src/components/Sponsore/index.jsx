import React from "react";
import Marquee from 'react-fast-marquee'
import './Sponsore.css'
import { Maruthi_Suzki,Force_Motors, Microsoft, Shell, MRF, Insurance } from "../../assets";
import { Truck1, Construction } from "../../assets";
import Lottie from "lottie-react"



const Sponsore = () => {
    return (
        <div>
            <h3>Brand Partner</h3>
        <div>
            <Marquee>

<div className="sponsore_logo">
    <img src={Maruthi_Suzki} alt="gg"/>

</div>
<div className="sponsore_logo">
    <img src={Force_Motors} alt="gg"/>

</div>
<div className="sponsore_logo">
    <img src={Microsoft} alt="gg"/>

</div>
<div className="sponsore_logo">
    <img src={Shell} alt="gg"/>

</div>
<div className="sponsore_logo">
    <img src={MRF} alt="gg"/>

</div>
<div className="sponsore_logo">
    <img src={Insurance} alt="gg"/>

</div>

            </Marquee>

{/* <Lottie animationData={Truck1} id="anim1"/> */}
{/* <Lottie animationData={Construction} id="anim1"/> */}

        </div>
        </div>
    )
}

export default Sponsore;
