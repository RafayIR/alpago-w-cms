
'use client'
import React, { useState } from 'react'
import { SinHala, StadMitte } from "../../app/font"


const Granduer = () => {
    const [hoveredBox, setHoveredBox] = useState(0);


    const handleMouseEnter = (index) => {
        setHoveredBox(index);
    };
    // Array of image paths
    const images = [
        "/assets/img/granduer/grand-img-1.png",
        "/assets/img/granduer/grand-img-2.png",
        "/assets/img/granduer/grand-img-3.png",
        "/assets/img/granduer/grand-img-4.png",
    ];



    return (
        <>
            <section className="granduer--wrapper">
                <div className="al-heading">
                    <h2 className={`${StadMitte.className} text-uppercase`}>
                        Unseen Grandeur
                    </h2>
                </div>


                <div className="box-wrapper">
                    <div className="row box-row">
                        <div className="col-lg-7 row">
                            {[...Array(images.length)].map((_, index) => (
                                <div
                                    key={index}
                                    className="col-lg-6 box-col"
                                    onMouseEnter={() => handleMouseEnter(index)}>
                                    <div className="grand-box">
                                        <div className="count">
                                            <span className={SinHala.className}>01</span>
                                        </div>
                                        <div className="granduer-desc">
                                            <h3 className={SinHala.className}>Soundscapes of Luxury</h3>
                                            <p className={SinHala.className}>Discover Exceptional Music Quality</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-5">
                            {images?.map((image, index) => (
                                <div
                                    key={index}
                                    className={`img-wrapper ${hoveredBox === index ? 'active' : ''}`}>
                                    <img src={image} alt="Image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Granduer