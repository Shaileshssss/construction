import React, { useRef } from "react";
import "./Header.css"
import { hero_image,Product_1, blog_1 } from '../../assets'
import { Link } from 'react-scroll'
import Achievement from "../Achievement";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Construction } from "../../assets";
import Lottie from "lottie-react"
import Typewriter from "typewriter-effect";



const Header = () => {
    const container = useRef(null);
    useGSAP(() => {
        const timeline = gsap.timeline({ delay: 1, stagger: 1 });
        timeline
            .fromTo(
                ".image__container",
                { scale: .5, opacity: 0, y: 150 },
                { scale: 1, ease: 'sine.in', opacity: 1, y: 0 }
            )
            .from(
                ".title",
                { opacity: 0, y: -30 }
            )
            .from(
                ".description",
                { opacity: 0, y: -30 }
            )
            .from(
                ".buttons__container",
                { opacity: 0, y: 40 }
            )
    }, { scope: container })
    return (
        <header id="header" ref={container}>
            <div className="container full__height">
                <div className="row">
                    <div className="column">
                        <h1 className="title">
                            Building Dreams, {" "}
                            <span className="g-text">Creating Reality</span>
                        </h1>
                        <p className="text__muted description">
                            JCB (J.C. Bamford Excavators Limited) is a British multinational corporation known for manufacturing equipment for construction, agriculture, waste handling, and demolition. Founded in 1945 by Joseph Cyril Bamford, JCB is renowned for its distinctive yellow machines, including backhoe loaders,
                            excavators, tractors, and forklifts.
                        </p>
                        <Lottie animationData={Construction} id="anim1" />
                        <div className="buttons__container">
                            <Link to="services" smooth={true} className="btn">Our Services</Link>
                            <Link to="contact" smooth={true} className="btn btn__primary">Contact Us</Link>
                        </div>
                    </div>
                    <div className="typewriter">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                cursor:"⚪",
                                strings: ["Welcome To JCB Website","Helloo"]
                            }}
                        />
                    </div>

                    <div className="column">
                        <div className="image__container">
                            <img src={hero_image} alt="hero image" />
                            {/* <img src={JCB} alt="gggg" /> */}
                        </div>
                    </div>
                </div>

                <Achievement />


            </div>

        </header>
    )
}

export default Header;