import { createSlice } from '@reduxjs/toolkit'

const currentTimestamp = () => new Date().getTime()

const initialState = {
  userLocale: null,
  timestamp: currentTimestamp(),
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserLocale(state, action) {
      state.userLocale = action.payload.userLocale
      state.timestamp = currentTimestamp()
    },
  },
})

export default slice.reducer
export const { updateUserLocale } = slice.actions
