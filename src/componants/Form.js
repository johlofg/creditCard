import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import styled from 'styled-components';

import creditcard from 'reducer/creditcard';
import CardContainer from 'componants/CardContainer'


const Main = styled.div`
display: flex;
flex-direction: column;
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

button:hover {
  background: #fff;
  color: #000;
}
`

const Input = styled.input`  
margin-bottom: 10px;
border-radius: 5px;
box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
width: 300px;
height: 20px;
text-align: center;
`

const Select = styled.select` 
margin-bottom: 10px;
border-radius: 5px;
border: 2px solid #000;
box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
width: 300px;
height: 25px;
text-align: center;
`

const SubmitBtn = styled.button`
border: none;
cursor: pointer;
width: 25%;
height: 50px;
border-radius: 7px; 
font-size: 18px;
font-weight: 700;
font-family: 'Arial', sans-serif;
color: #fff;
text-align: center;
background: #2c2c2c;
box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
margin-bottom: 24px;
transition: .5s;
`

const Label = styled.label`
font-size: 12px;
`
const Form = () => {
  const [cardholder, setCardholder] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardValid, setCardValid] = useState('')
  const [cardBank, setCardBank] = useState('')

  const dispatch = useDispatch()
  
  const onHandelcardholderName = (event) => {
    setCardholder(event.target.value)
  }
  
  const onHandleCardNumber = (event) => {  
    setCardNumber(event.target.value)  
  }
  
  const onHandleCardValid = (event) => {
    setCardValid(event.target.value)
  }
  
  dispatch(creditcard.actions.setNumber(cardNumber))
  dispatch(creditcard.actions.setValidDate(cardValid))
  dispatch(creditcard.actions.setName(cardholder))
  dispatch(creditcard.actions.setBank(cardBank))

  return (
    <Main>
      <CardContainer
        name={cardholder}
        cardnumber={cardNumber}
        validDate={cardValid}
        bank={cardBank} />
      <form>
        <CreditCardForm>
          <Label>Cardholder</Label>
          <Input
            type="text"
            value={cardholder}
            onChange={onHandelcardholderName}
            placeholder="Name" />
          <Label>Credit card number</Label>
          <Input
            type="number"
            value={cardNumber}
            onChange={onHandleCardNumber}
            placeholder="Credit Card Number"
            maxLength='16' />
          <Label>Valid</Label>
          <Input
            type="number"
            value={cardValid}
            onChange={onHandleCardValid}
            placeholder="xx/xx"
            maxLength="4" />
          <Label>Bank</Label>
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
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </CreditCardForm>
      </form>
    </Main>
  )
}

export default Form;
