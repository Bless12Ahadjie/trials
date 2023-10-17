import React from 'react';
import Button from '../atoms/Button';

const HeroSectionLeft = () => {
    const header ={
        color: '#FFF',
        fontSize: '56px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal'
    }
    const btnStyle ={
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    const container={
        width: "408px",
        padding: '2rem',
        marginLeft: "4%",
        marginTop:"-8%"
    }


    return (
        <div style={container}>
            <p style={header}>Your Path to <br/>Financial Succes</p>
            <p>Take charge of your money, track expenses effortlessly, and reach your financial goals. Start budgeting smarter today.</p>
            <div style={btnStyle} className='btn-container'><Button name="Download Now"/> <Button name="Watch demo"/></div>
        </div>
    );
}

export default HeroSectionLeft;
