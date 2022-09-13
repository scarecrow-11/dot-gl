import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  styleUrl: 'https://demotiles.maplibre.org/style.json'
}

const mapStyleSlice = createSlice({
  name: 'mapStyle',
  initialState,
  reducers: {
    updateMapStyle: (state, action) => {
      state.styleUrl = action.payload?.styleUrl ?? state.styleUrl
    }
  }
})

export const { updateMapStyle } = mapStyleSlice.actions
export const mapStyleReducer = mapStyleSlice.reducer