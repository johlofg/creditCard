import React, { useState } from 'react';
import styled from 'styled-components';

import CardContainer from 'componants/CardContainer'

const Main = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

const CreditCardForm = styled.div`
display: flex;
flex-direction: column;
box-shadow: 5px 5px 10px 5px #888;
height: 250px; 
width: 600px;
align-items: center;
justify-content: center;
`

const Input = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
  width: 300px;
  height: 20px;
  text-align: center;
`

const Select = styled.select`
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 2px solid #000;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
  width: 300px;
  height: 25px;
  text-align: center;
`
const Form = () => {
  const [cardholder, setCardholder] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardValid, setCardValid] = useState('')
  const [cardBank, setCardBank] = useState('')

  const onHandelcardholderName = (event) => {
    setCardholder(event.target.value)
  }

  const onHandleCardNumber = (event) => {
    setCardNumber(event.target.value)
  }

  const onHandleCardValid = (event) => {
    setCardValid(event.target.value)
  }

  return (
    <Main>
      <CardContainer
        name={cardholder}
        cardnumber={cardNumber}
        validDate={cardValid}
        bank={cardBank} />
      <form>
        <CreditCardForm>
          <Input
            type="text"
            value={cardholder}
            onChange={onHandelcardholderName}
            placeholder="Name" />
          <Input
            type="number"
            value={cardNumber}
            onChange={onHandleCardNumber}
            placeholder="Credit Card Number" />
          <Input
            type="number"
            value={cardValid}
            onChange={onHandleCardValid}
            placeholder="xx/xx"
            maxLength="4" />
          <Select
            value={cardBank}
            onChange={(event) => setCardBank(event.target.value)}>
            <optgroup label="Bank">
              <option value="" disabled defaultValue>Select Bank</option>
              <option>Nordea</option>
              <option>SEB</option>
              <option>Swedbank</option>
              <option>Handelsbanken</option>
            </optgroup>
          </Select>
        </CreditCardForm>
      </form>
    </Main>
  )
}

export default Form;
