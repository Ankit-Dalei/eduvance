import { configureStore } from '@reduxjs/toolkit'
import formSliceReducer from '../Redux/formSlice'

export const store = configureStore({
  reducer: {
    forms: formSliceReducer,
  },
})
