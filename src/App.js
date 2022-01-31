import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import Form from 'componants/Form'
import creditcard from './reducer/creditcard'

const reducer = combineReducers({
  creditcard: creditcard.reducer
})
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Form />
    </Provider>
  )
}
