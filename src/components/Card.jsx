import React from "react";
const Card = ({classess, cardHeader=false, cardBody='Dummy card body text', cardFooter=false}) => {
    return(
        <div className={`card ${classess ? classess : ''}`}>
            {cardHeader && <div className={`cardHeader`}>{cardHeader}</div>}
            {cardBody && <div className={`cardBody`}>{cardBody}</div>}
            {cardFooter && <div className={`cardFooter`}>{cardFooter}</div>}
        </div>
    )
}

export default Card;