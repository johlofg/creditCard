import React from 'react';
import styled from 'styled-components';
const Valid = styled.text`
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  max-width: 38px;
}
`

const CardMonthYear = (props) => {
  return (
    <Valid>
      <p>{props.validDate}</p>
    </Valid>
  )
}

export default CardMonthYear;