import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

const Valid = styled.text`
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  max-width: 38px;
}
`

const CardMonthYear = () => {
  const visualValidDate = useSelector(store => store.creditcard.validDate)

  return (
    <Valid>
      <p>{visualValidDate}</p>
    </Valid>
  )
}

export default CardMonthYear;