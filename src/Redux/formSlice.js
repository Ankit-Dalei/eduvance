import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formback: false,
  formcampusback: false,
  formdegreeback: false,
  formmanaback: false,
  formon: false,
  sidebar: false,
  formoff:false
}

const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    toggleFormback: (state) => {
      state.formback = !state.formback
    },
    toggleFormcampusback: (state) => {
      state.formcampusback = !state.formcampusback
    },
    toggleFormdegreeback: (state) => {
      state.formdegreeback = !state.formdegreeback
    },
    toggleFormmanaback: (state) => {
      state.formmanaback = !state.formmanaback
    },
    toggleFormon: (state) => {
      state.formon = !state.formon
    },
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar
    },
    toggleFormoff: (state) => {
      state.formback = false;
      state.formcampusback = false;
      state.formdegreeback = false;
      state.formmanaback = false;
      state.formon = false;
      state.formoff = false;
    },
  },
});


export const {
  toggleFormback,
  toggleFormcampusback,
  toggleFormdegreeback,
  toggleFormmanaback,
  toggleFormon,
  toggleFormoff,
  toggleSidebar
} = formSlice.actions

export default formSlice.reducer
