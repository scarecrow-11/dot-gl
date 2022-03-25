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
      state.longitude = action.payload?.longitude ?? state.longitude
      state.latitude = action.payload?.latitude ?? state.latitude
      state.zoom = action.payload?.zoom ?? state.zoom
      state.pitch = action.payload?.pitch ?? state.pitch
      state.bearing = action.payload?.bearing ?? state.bearing
    }
  }
})

export const { updateMapState } = mapStateSlice.actions
export const mapStateReducer = mapStateSlice.reducer