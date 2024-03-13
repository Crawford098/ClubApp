import { useState } from "react";

const PlaceHolder = ({children}) => {

    return (
        <div style={content}>
            {children}
        </div>
    )    
}

const content = {
    with: '100%',
    height: '200px',
    border: '2px dashed black'
}

export default PlaceHolder;