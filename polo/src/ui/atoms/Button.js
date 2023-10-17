import React from 'react';

const Button = ({name,style,className}) => {
    return (
        <div>
            <button className={className} style={style}>{name}</button>
        </div>
    );
}

export default Button;
