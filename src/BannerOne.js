import React from 'react'
import "./BannerOne.css";
import Banner from './images/bannerOne.png'

function BannerOne() {
    return (
        <div className="banner">
            <img src={Banner} alt="bannerOne"/>
        </div>
    )
}

export default BannerOne
