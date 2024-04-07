import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/slice/counterSlice'
import CardSlice from './features/slice/CardSlice'
// import addItems from './features/slice/addArticle'

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      // adArticle : addItems
      cart : CardSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']