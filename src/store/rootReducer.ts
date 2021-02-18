import { combineReducers } from '@reduxjs/toolkit'
import { feedApi } from '@/services/feed'

const rootReducer = combineReducers({
  [feedApi.reducerPath]: feedApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
