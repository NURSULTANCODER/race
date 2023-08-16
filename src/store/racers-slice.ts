import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { racersStateInterface, racerInterface } from 'types/racesList.Interface'


const state: racersStateInterface = {
  count: 1,
  racesList: [],
  isLoading: false,
  state: {
    payload: undefined,
    type: ''
  }
}

const racersSlice = createSlice({
  name: 'race',
  initialState: state,
  reducers: {
    setRaces(state, action: PayloadAction<racerInterface[]>) {
      state.racesList = [...state.racesList, ...action.payload]
    },
    setCount(state, action: PayloadAction<number>) {
      state.count = action.payload
    }, 
    setIsLoading(state, action) {
      state.isLoading = action.payload
    }
  },
})

export const { setRaces, setIsLoading, setCount } = racersSlice.actions

export const selectCount = (state: {racersReduser: racersStateInterface}) => state.racersReduser.count;

export const getRaces = () => async (dispatch: (arg0: { payload: any; type: any }) => void, getState: () => { racersReduser: racersStateInterface }) => {
  const count = selectCount(getState())
  dispatch(setIsLoading(true))
  await axios.get(`https://devapi.almurut.com/api/test/racers?page_size=50&page=${count}`).then((res: any) => {
    console.log(res.data)

    dispatch(setRaces(res.data.results));
  })
  dispatch(setIsLoading(false))
  dispatch(setCount(count+1))
}

export const racersReduser = racersSlice.reducer
