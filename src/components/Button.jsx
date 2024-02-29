import React from 'react'
const Button = ({classess, label, type, onClick, preFix, postFix, size}) => {
    const manageClick = () => {
        window.alert('Manage Click');
    }
    return(
        <button 
            className={`btn ${classess ? classess : ''}`} 
            type={type ? type : 'button'} 
            onClick={onClick ? onClick : manageClick}
            size={size ? size : 'medium'}
        >
            {preFix && <span className='preFix'>{preFix}</span>}
            {label ? label : 'Button'}
            {postFix && <span className='postFix'>{postFix}</span>}
        </button>
    )
}

export default Button;