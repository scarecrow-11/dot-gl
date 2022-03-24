import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  longitude: 0,
  latitude: 0,
  zoom: 13,
  pitch: 0,
  bearing: 0
}

const mapStateSlice = createSlice({
  name: 'mapState',
  initialState,
  reducers: {
    updateMapState: (state, action) => {
      state = { ...state, ...action.payload }
    }
  }
})

export const { updateMapState } = mapStateSlice.actions
export const mapStateReducer = mapStateSlice.reducer