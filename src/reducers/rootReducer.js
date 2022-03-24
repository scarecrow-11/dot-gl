import { combineReducers } from '@reduxjs/toolkit'
import { mapStateReducer } from './mapStateReducer'

const rootReducer = combineReducers({
  mapState: mapStateReducer
})

export const dotGlReducer = rootReducer