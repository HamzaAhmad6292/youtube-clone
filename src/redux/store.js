import { configureStore } from '@reduxjs/toolkit'
import userSlices from './slices/userSlices'
export const makeStore = () => {
  return configureStore({
    reducer: {
      userSlices
    }
  })
}