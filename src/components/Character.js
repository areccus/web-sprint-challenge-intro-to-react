import React from 'react';
import Characters from './Characters'
// Write your Character component here


const Character = (props) => {
    //  console.log(props.characters)
    return (
        <div>
        {props.characters.map((character) =>(
          <Characters character={character}/>
        ))}
        </div>
    );

}

export default Character