import React from 'react';
import mask from '../../images/mask.svg'


const Mask = () => {
    const containerStyle = {
    height: '675px',
    position: 'absolute',
    zIndex: '0'
    }
    const Img ={
        marginTop: '-50rem',
        marginLeft: '41rem'
    }
    return (
        <div style={containerStyle} className='container'>
            <img style={Img} className='mask-img' src={mask} alt='hero section' />
            
        </div>
    );
}

export default Mask;
