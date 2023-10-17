import React from 'react';
import Button from '../../atoms/Button';
import Icons from '../../atoms/Icons';
import '../header/Header.css'

const Header = () => {   

const btnStyle ={
    width: '130px',
    height: '40px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#167E27',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    zIndex: '3'
}

    
    return (
        <div className='Header'>
            <Icons/>
            <ul className='ul'>
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Button style={btnStyle} className="btn" name="Download Now"/>
        </div>
    );
}

export default Header;
