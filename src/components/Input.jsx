import React from 'react';

const Input = ({type, classess, required}) => {
    return(
        <input 
            className={`input ${classess ? classess : ''}`} 
            type={type ? type : 'text'} 
            required={required ? required : false}
        />
    )
}

export default Input;