import React from 'react';
import { useSelector } from 'react-redux'

const CardBankName = () => {
  const visualBank = useSelector((store) => store.creditcard.bank)

  return (
    <div>
      <p>{visualBank}</p>
    </div>
  )
}

export default CardBankName;
