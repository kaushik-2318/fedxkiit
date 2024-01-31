import React from 'react'
import "./CSS/footer.css";
import logo from '../assests/logo/logo.png'
import linkedin from '../assests/logo/linkedin-box-fill.png'
import github from '../assests/logo/github-fill.png'
import instagram from '../assests/logo/instagram-fill.png'
import twitter from '../assests/logo/twitter-fill.png'


function footer() {
    return (
        <>
            <footer>
                <div className='ellpise4'></div>
                <div className='footer_content'>
                    <div className='footerLogo'>
                        <div className='footer_logo'>
                            <img src={logo} alt="" />
                        </div>
                        <div className='footer_logo_title'>FED</div>
                    </div>
                    <div className='footer_links'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Service</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className='footer_icon'>
                        <ul>
                            <li>
                                <img src={linkedin} alt="" />
                            </li>
                            <li>
                                <img src={github} alt="" />
                            </li>
                            <li>
                                <img src={instagram} alt="" />
                            </li>
                            <li>
                                <img src={twitter} alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className='footer_line'>
                        <hr />
                    </div>
                    <div className='footer_copyright'>
                        Copyright @kaushik
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer
