import React from 'react'
const PropTypes = require('prop-types')
import { StaticMap } from 'react-map-gl'
import { DeckGL } from '@deck.gl/react'

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
}

class _DotGL extends React.PureComponent {
  render() {
    const { mapStyle } = this.props

    return (
      <DeckGL
        initialViewState={ INITIAL_VIEW_STATE }
        controller={ true }
      >
        <StaticMap
          mapStyle={ mapStyle }
        />
      </DeckGL>
    )
  }
}

// Prop Types
_DotGL.propTypes = {
  mapStyle: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ])
}

_DotGL.defaultProps = {
  mapStyle: 'https://demotiles.maplibre.org/style.json'
}

export const DotGL = _DotGL