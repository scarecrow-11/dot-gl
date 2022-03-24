import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  longitude: 90.3938010872331,
  latitude: 23.821600277500405,
  zoom: 10,
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