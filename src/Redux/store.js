import { configureStore } from '@reduxjs/toolkit'
import sliderReducer from '../Redux/sidebar'

export const store = configureStore({
  reducer: {
    sider:sliderReducer,
  },
})