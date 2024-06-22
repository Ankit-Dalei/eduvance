import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const sidebar = createSlice({
  name: 'sider',
  initialState,
  reducers: {
    changestate: (state) => {
        state.value = !state.value
    }
  },
})

export const { changestate } = sidebar.actions

export default sidebar.reducer