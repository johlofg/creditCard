import React from 'react';
import styled from 'styled-components';

const Cardholder = styled.text`
  font-family: monospace;
  font-size: 18px;
  `

const CardholderName = (props) => {
  return (
    <Cardholder>
      <p>{props.name}</p>
    </Cardholder>
  )
}

export default CardholderName;