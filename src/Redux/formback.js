import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const formback = createSlice({
  name: 'forbac',
  initialState,
  reducers: {
    formbck: (state) => {
        state.value = !state.value
    }
  },
})

export const { formbck } = formback.actions

export default formback.reducer