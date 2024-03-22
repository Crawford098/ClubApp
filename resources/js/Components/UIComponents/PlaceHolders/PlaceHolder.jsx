import { useState } from "react";

const PlaceHolder = ({ children }) => {

    return (
        <div style={content}>
            {/* {children} */}

            <div style={classDiv}>
                <span style={{ textAlign: 'center', verticalAlign: 'center' }}>Amigo</span>
            </div>
            <div style={classDiv}>
                <span style={{ textAlign: 'center', verticalAlign: 'center' }}>Compañero</span>
            </div>
            <div style={classDiv}>
                <span style={{ textAlign: 'center', verticalAlign: 'center' }}>Explorador</span>
            </div>

            <div style={classDiv}>
                <span style={{ textAlign: 'center', verticalAlign: 'center' }}>Orientador</span>
            </div>
            <div style={classDiv}>
                <span style={{ textAlign: 'center', verticalAlign: 'center' }}>Viajero</span>
            </div>
            <div style={classDiv}>
                <span style={{ textAlign: 'center', verticalAlign: 'center' }}>Guia</span>
            </div>
        </div>
    )
}

const content = {
    with: '100%',
    border: '2px dashed #dddddd',
    padding: '10px',
    display: 'flex',
    alignItem: 'center',
}

const classDiv = {
    border: '2px dashed #dddddd',
    margin: '12px',
    textAlign: 'center',
    width: '150px',
    height: '150px',
}

const flexGroup = {
    width: '100%',

}

export default PlaceHolder;