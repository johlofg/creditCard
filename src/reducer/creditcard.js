import { createSlice } from '@reduxjs/toolkit'

const creditcard = createSlice({
  name: 'creditcard',
  initialState: {
    number: null,
    name: null,
    validDate: null,
    bank: null,
    
  },
  reducers: {
    setNumber: (store, action) => {
      store.number = action.payload
    },
    setName: (store, action) => {
      store.name = action.payload
    },
    setValidDate: (store, action) => {
      store.validDate = action.payload
    },
    setBank: (store, action) => {
      store.bank = action.payload
    }
  }
})
export default creditcard