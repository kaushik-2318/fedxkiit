import React from 'react'
import "./CSS/about.css";
import image1 from "../assests/images/background.jpg";



function about() {
    return (
        <>
            <section>
                <div className='about'>
                    <div className='about_title'>Dive In</div>
                    <div className='about_text'>to the endless <span>POSSIBILITIES</span>.</div>
                </div>

                <div className='rectangle'>
                    <div className='reactangle_image'>
                        <img src={image1} alt="" />
                    </div>
                    <div className='rectangle_text'>
                        <div>Inspire</div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about
