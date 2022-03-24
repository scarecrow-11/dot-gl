import React from 'react'
const PropTypes = require('prop-types')
import { connect } from 'react-redux'

// Import Components
import { StaticMap } from 'react-map-gl'
import { DeckGL } from '@deck.gl/react'

// Import Actions & Methods
import { updateMapState } from '../actions'

class _DotGL extends React.PureComponent {
  // On View State Change
  _onViewStateChange = ({ viewState }) => {
    const { dispatch } = this.props
    dispatch( updateMapState(viewState) )
  }

  render() {
    const { mapStyle, mapState } = this.props

    return (
      <DeckGL
        viewState={ mapState }
        controller={ true }
        onViewStateChange={ this._onViewStateChange }
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
  }),
  dispatch: PropTypes.func
}

_DotGL.defaultProps = {
  mapStyle: 'https://demotiles.maplibre.org/style.json',
  getRootState: state => state?.dotGl ?? {},
  mapState: {
    longitude: 0,
    latitude: 0,
    zoom: 10,
    pitch: 0,
    bearing: 0
  },
  dispatch: () => null
}

const mapStateToProps = (state, ownProps) => ({
  mapState: ownProps?.getRootState ? ownProps.getRootState(state)?.mapState ?? {} : {}
})

const mapDispatchToProps = dispatch => ({ dispatch })

export const DotGL = connect(mapStateToProps, mapDispatchToProps)(_DotGL)