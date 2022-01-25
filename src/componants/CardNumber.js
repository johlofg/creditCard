import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Number = styled.text`
  font-family: monospace;
  font-size: 18px; 
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    max-width: 160px;
  }
`

const CardNumber = () => {
  const visualCardNumber = useSelector(store => store.creditcard.number)

  return (
    <Number>
      <p>{visualCardNumber}</p>
    </Number>
  )
}

export default CardNumber;
