import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

const Cardholder = styled.text`
  font-family: monospace;
  font-size: 18px;
  `

const CardholderName = () => {
  const visualCardName = useSelector(store => store.creditcard.name)

  return (
    <Cardholder>
      <p>{visualCardName}</p>
    </Cardholder>
  )
}

export default CardholderName;