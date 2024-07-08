import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import combineReducers from '.pnpm/redux@5.0.1/node_modules/redux'
import type CreateAsyncThunk from '.pnpm/@reduxjs+toolkit@2.2.6_react-redux@9.1.2_react@18.3.1/node_modules/@reduxjs/toolkit/dist/createAsyncThunk.d.ts'
const fetchCount = createAsyncThunk('counter/fetchCounter', (a: string) => {
  console.log(11, a)
  ;async (a: number | undefined) => {
    // 这里模拟一个异步操作，比如从 API 获取数据
    return a ? a * 10 : 200 // 假设这是从服务器获取的数据
  }
})
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment(state, { payload }) {
      state.value += payload
    },
    decrement(state) {
      state.value -= 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCount.fulfilled, (state, action) => {
        console.log(25, state)
      })
      .addCase(fetchCount.pending, (state, action) => {
        console.log(25, state)
      })
      .addCase(fetchCount.rejected, (state, action) => {
        console.log(25, state)
      })
  }
})

export const { increment, decrement } = counterSlice.actions
export { fetchCount }

export default counterSlice.reducer
