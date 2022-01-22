import React from 'react';
import styled from 'styled-components';

const Number = styled.text`
  font-family: monospace;
  font-size: 18px; 
`

const CardNumber = (props) => {
  return (
    <Number>
      <p>{props.cardnumber}</p>
    </Number>
  )
}

export default CardNumber;
