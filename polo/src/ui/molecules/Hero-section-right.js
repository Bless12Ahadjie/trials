import React from 'react';
import Hero from '../../images/mobile.png'

const HeroSectionRight = () => {
    const image ={
        width: '465px',
    }

    const container ={
        marginRight: "8%",
        zIndex: '3'
    }

    return (
        <div style={container}>
            <img
            style={image}
            src={Hero}
            alt='Hero-img'
            />
            
        </div>
    );
}

export default HeroSectionRight;
