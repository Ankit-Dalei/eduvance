import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const formcampusback = createSlice({
  name: 'formcampus',
  initialState,
  reducers: {
    formcampu: (state) => {
        state.value = !state.value
    }
  },
})

export const { formcampu } = formcampusback.actions

export default formcampusback.reducer