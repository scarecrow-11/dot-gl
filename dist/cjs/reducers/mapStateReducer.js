"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("@reduxjs/toolkit").createSlice({name:"mapState",initialState:{longitude:90.3938010872331,latitude:23.821600277500405,zoom:10,pitch:0,bearing:0},reducers:{updateMapState:(e,t)=>{e.longitude=t.payload?.longitude??e.longitude,e.latitude=t.payload?.latitude??e.latitude,e.zoom=t.payload?.zoom??e.zoom,e.pitch=t.payload?.pitch??e.pitch,e.bearing=t.payload?.bearing??e.bearing}}}),{updateMapState:t}=e.actions,a=e.reducer;exports.mapStateReducer=a,exports.updateMapState=t;
