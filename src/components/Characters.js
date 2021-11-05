import React from 'react';
import styled from 'styled-components'


const Style = styled.div`
    color: white;
    border: 1px solid #347505;
    margin: 2% 10%;
    padding: 0% 1%;
    display: flex;
    justify-content: space-between;
    font-family: 'Stardos Stencil', sans-serif;
    font-weight: bold;

    h3 {
        font-size: 24px;
    }
    p {
        color: #311652;
        background-color: #5a5c5a;
        padding: 1.5% 1%;
        border-radius: 5% 30%;
    }
`
const Characters = (props) => {
    return (
        <div>
        <Style>
        <h3>{props.character.name}</h3>
        <p>{props.character.birth_year}</p>
        </Style>
        </div>
    )
}

export default Characters;