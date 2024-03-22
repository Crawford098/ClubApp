import { useState } from "react";

const PlaceHolder = ({children}) => {

    return (
        <div style={content}>
            {/* {children} */}

            <div style={classDiv}>
                <span style={{textAlign: 'center',verticalAlign: 'center'}}>Amigo</span>
            </div>
        </div>
    )    
}

const content = {
    with: '100%',
    height: '200px',
    border: '2px dashed black',
    padding: '10px',
}

const classDiv = {
    border: '2px dashed #dddddd',
    margin: '2px',
    textAlign: 'center',
    verticalAlign: 'center',
    width: '170px',
    height: '150px'
}

export default PlaceHolder;