import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const formmanaback = createSlice({
  name: 'formbac',
  initialState,
  reducers: {
    formmanbck: (state) => {
        state.value = !state.value
    }
  },
})

export const { formmanbck } = formmanaback.actions

export default formmanaback.reducer