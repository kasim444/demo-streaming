import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../rootReducer'

export const initialState = {}

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {},
})

export const authSelector = (state: RootState) => state.feeds
