import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/appSlice'
import productReducer from '../redux/productSlice'
import basketReduver from '../redux/basketSlice'

export const store = configureStore({
  reducer: {
      app: appReducer,
      product: productReducer,
      basket : basketReduver
  },
})