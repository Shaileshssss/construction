import React, { useRef } from "react";
import './Project.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../../data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Project = () => {


    const container = useRef(null);
    useGSAP(() => {
        const timeline = gsap.timeline({
            delay:.5,
            scrollTrigger:{
                trigger: container.current,
                start:"20% bottom",
                end:"bottom top",
            }
        })
        timeline
        .from(
            ".title",
            {y:-50,opacity:0}
        )
        .from(
            ".sub__title",
            {y:-50,opacity:0}
        )
        .fromTo(
            ".slick-slide",
            {y:100,opacity:0},
            {opacity:1,stagger:.5,y:0}
        )
    },{scope:container})

    const settings = {
        infinite : true,
        speed : 3000,
        slidesToShow: 2,
        centerMode:true,
        pauseOnHover:true,
        autoplay: true,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoin:600,
                settings:{
                    slidesToShow: 1,
                    centerPadding: 0,
                }
            }
        ]

    }
    return (
<section id="project" ref={container}>
    <div className="project__top">
        <h1 className="title">Our <span className="g-text">Products</span></h1>
        <h3 className="sub__title">
        JCB's best-selling product is typically their range of excavators, renowned for their reliability, durability, and versatility in various construction and industrial applications worldwide.
        </h3>
    </div>
    <Slider {...settings} className="projects__container">
        {
            projects.map((project, index) => (
                <React.Fragment key={index}>
                    <div className="image__container">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="box">
                        <h1 className="name">{project.title}</h1>
                    </div>
                    <div className="details">
                        <h3 className="name">{project.title}</h3>
                        <p className="text__muted description">{project.description}</p>
                        <button className="btn">Read More</button>
                    </div>
                </React.Fragment>
            ))
        }
    </Slider>
</section>
    )
}

export default Project;
