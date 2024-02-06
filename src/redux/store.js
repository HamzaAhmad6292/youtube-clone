import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlices'
export const makeStore = () => {
  return configureStore({
    reducer: {
      user:userReducer
    }
  })
}