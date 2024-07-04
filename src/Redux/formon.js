import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const formon = createSlice({
  name: 'formr',
  initialState,
  reducers: {
    formoff: (state) => {
        state.value = !state.value
    }
  },
})

export const { formoff } = formon.actions

export default formon.reducer