import React from 'react'
import styled from 'styled-components'

import CardBankName from './CardBankName'
import CardType from './CardType'
import CardNumber from './CardNumber'
import CardMonthYear from './CardMonthYear'
import CardholderName from './CardholderName'

const CreditCard = styled.div`  
  background: rgb(3,1,52);
  background: linear-gradient(112deg, rgba(3,1,52,1) 16%, rgba(9,121,18,1) 48%);
  color: #fff;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 150px;  
  border-radius: 23px;
  height: 250px;
  width: fit-content;
  margin: 100px;
  padding: 0px 20px 0px 10px;  
  box-shadow: 3px 10px 10px #D3D3D3;
`

const CardContainer = (props) => {
  return (
    <CreditCard>
      <CardBankName />
      <CardType />
      <CardNumber  />
      <CardMonthYear />
      <CardholderName />
    </CreditCard>
  )
}

export default CardContainer;
