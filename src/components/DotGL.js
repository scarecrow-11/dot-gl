import React from 'react'
// import { StaticMap } from 'react-map-gl'
// import { DeckGL } from '@deck.gl/react'

// const INITIAL_VIEW_STATE = {
//   longitude: -122.41669,
//   latitude: 37.7853,
//   zoom: 13,
//   pitch: 0,
//   bearing: 0
// }

class _DotGL extends React.PureComponent {
  render() {
    return (
      <div>Dot GL Interactive React Map Component Library With Redux (In Development)</div>
      // <DeckGL
      //   initialViewState={ INITIAL_VIEW_STATE }
      //   controller={ true }
      // >
      //   <StaticMap
      //     mapStyle='https://demotiles.maplibre.org/style.json'
      //   />
      // </DeckGL>
    )
  }
}

export const DotGL = _DotGL