import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const formdegreeback = createSlice({
  name: 'formdegree',
  initialState,
  reducers: {
    formdeg: (state) => {
        state.value = !state.value
    }
  },
})

export const { formdeg } = formdegreeback.actions

export default formdegreeback.reducer