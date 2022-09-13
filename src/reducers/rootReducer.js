import { combineReducers } from '@reduxjs/toolkit'
import { mapStateReducer } from './mapStateReducer'
import { mapStyleReducer } from './mapStyleReducer'

const rootReducer = combineReducers({
  mapState: mapStateReducer,
  mapStyle: mapStyleReducer
})

export const dotGlReducer = rootReducer