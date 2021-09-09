import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { LoadOrderList } from '../../libs/api'

const initialState = {
  totalPages: 0,
  currentPage: 0,
  content: [],
  loading: false,
}

const fetchOrderLoad = createAsyncThunk(
  'Order/LOAD',
  async (_, { getState }) => {
    try {
      const page = await getState().order.currentPage
      const response = (await LoadOrderList(page)).data
      return response
    } catch (err) {
      return console.error(err)
    }
  },
)

const OrderSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrderLoad.pending.type]: (state) => {
      state.loading = true
    },
    [fetchOrderLoad.fulfilled.type]: (state, action) => {
      state.totalPages = action.payload.totalPages
      state.currentPage = action.payload.currentPage + 1
      state.content.push(...action.payload.content)
      state.loading = false
    },
  },
})

const OrderCreators = {
  fetchOrderLoad,
}

export { OrderCreators }
const { reducer, actions } = OrderSlice
export default reducer
