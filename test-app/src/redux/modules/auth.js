import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    AuthToken: (state, action) => {
      state.token = action.payload
    },
  },
})

const { reducer, actions } = AuthSlice
export const { AuthToken } = actions
export default reducer
