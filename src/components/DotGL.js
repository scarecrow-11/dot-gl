import React from 'react'
const PropTypes = require('prop-types')
import { connect } from 'react-redux'
import { StaticMap } from 'react-map-gl'
import { DeckGL } from '@deck.gl/react'

class _DotGL extends React.PureComponent {
  render() {
    const { mapStyle, mapState } = this.props

    return (
      <DeckGL
        initialViewState={ mapState }
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
  mapStyle: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
  getRootState: PropTypes.func,
  mapState: PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number
  })
}

_DotGL.defaultProps = {
  mapStyle: 'https://demotiles.maplibre.org/style.json',
  getRootState: state => state?.dotGl ?? {},
  mapState: {
    longitude: 0,
    latitude: 0,
    zoom: 13,
    pitch: 0,
    bearing: 0
  }
}

const mapStateToProps = (state, ownProps) => ({
  mapState: ownProps?.getRootState(state)?.mapState ?? {}
})

export const DotGL = connect(mapStateToProps)(_DotGL)