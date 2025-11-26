import { configureStore } from '@reduxjs/toolkit'
import githubReducer from '../redux/githubSlice'

export const store = configureStore({
  reducer: {
    github : githubReducer,
  },
})