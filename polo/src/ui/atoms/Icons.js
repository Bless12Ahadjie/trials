import React from 'react';
import logo from '../../images/logo.svg'

const Icons = () => {
    const style ={
        width: '66px',
        height: '56px'
    }

    return (
        <div>
            <img 
            style={style}
            src={logo}
            alt='logo'
            />
            
        </div>
    );
}

export default Icons;
