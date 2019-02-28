import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Animal(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <hr/>
            <button onClick={() => props.onPetAnimal(props.name)}>{`Pet the ${props.name}`}</button>

        </div>
    )
}

export default Animal;