import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: null,
}

const slice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    checking(state) {
      state.status = window.navigator.onLine
    },
    changed(state, { payload }) {
      state.status = payload
    },
  },
})

export default slice.reducer
export const { checking, changed } = slice.actions
