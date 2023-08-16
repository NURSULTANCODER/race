import { configureStore } from '@reduxjs/toolkit'
import { racersReduser } from './racers-slice'

export const store = configureStore({
  reducer: {
    racersReduser,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
