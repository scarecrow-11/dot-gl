import t from"react";import{connect as e}from"react-redux";import{StaticMap as o}from"react-map-gl";import{DeckGL as a}from"@deck.gl/react";import{updateMapState as r}from"../reducers/mapStateReducer.js";const i=require("prop-types");class p extends t.PureComponent{_onViewStateChange=({viewState:t,oldViewState:e})=>{const{dispatch:o}=this.props;o(r({longitude:t?.longitude??e?.longitude??0,latitude:t?.latitude??e?.latitude??0,zoom:t?.zoom??e?.zoom??0,pitch:t?.pitch??e?.pitch??0,bearing:t?.bearing??e?.bearing??0}))};render(){const{mapStyle:e,mapState:r}=this.props;return t.createElement(a,{viewState:r,controller:!0,onViewStateChange:this._onViewStateChange},t.createElement(o,{mapStyle:e}))}}p.propTypes={mapStyle:i.oneOfType([i.string,i.object]),getRootState:i.func.isRequired,mapState:i.shape({longitude:i.number,latitude:i.number,zoom:i.number,pitch:i.number,bearing:i.number}),dispatch:i.func},p.defaultProps={mapStyle:"https://demotiles.maplibre.org/style.json",getRootState:t=>t?.dotGl??{},mapState:{longitude:0,latitude:0,zoom:10,pitch:0,bearing:0},dispatch:()=>null};const n=e(((t,e)=>({mapState:e.getRootState(t)?.mapState??{}})),(t=>({dispatch:t})))(p);export{n as DotGL};
