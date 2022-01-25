import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import creditcard from './reducer/creditcard'
import Form from 'componants/Form'

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
