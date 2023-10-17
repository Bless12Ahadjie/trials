import React from 'react';
import Header from '../../organisms/header/Header';
import '../hero-section/Hero.css';
import Mask from '../../atoms/Mask';
import HeroSectionLeft from '../../molecules/Hero-section-left';
import HeroSectionRight from '../../molecules/Hero-section-right';

const Hero = () => {
    const heroStyle={
        display: "flex",
        justifyContent: "Space-between",
        alignItems: "center",
       
    }
    return (
        <div className='hero'>
           <Header/>
            <Mask/>
            <div style={heroStyle}>
            <HeroSectionLeft/>
            <HeroSectionRight/>
            </div>


        </div>
    );
}

export default Hero;
