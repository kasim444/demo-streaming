import { combineReducers } from '@reduxjs/toolkit'
import { feedsSlice } from './features/feeds/feedsSlice'

const rootReducer = combineReducers({
  feeds: feedsSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
