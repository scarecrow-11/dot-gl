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
  _onViewStateChange = ({ viewState, oldViewState }) => {
    const { dispatch } = this.props
    const newViewState = {
      longitude: viewState?.longitude ?? oldViewState?.longitude ?? 0,
      latitude: viewState?.latitude ?? oldViewState?.latitude ?? 0,
      zoom: viewState?.zoom ?? oldViewState?.zoom ?? 0,
      pitch: viewState?.pitch ?? oldViewState?.pitch ?? 0,
      bearing: viewState?.bearing ?? oldViewState?.bearing ?? 0
    }
    dispatch( updateMapState(newViewState) )
  }

  render() {
    const { mapState, mapStyle } = this.props

    return (
      <DeckGL
        viewState={ mapState }
        controller={ true }
        onViewStateChange={ this._onViewStateChange }
      >
        <StaticMap
          mapStyle={ mapStyle?.styleUrl ?? '' }
        />
      </DeckGL>
    )
  }
}

// Prop Types
_DotGL.propTypes = {
  mapState: PropTypes.shape({
    longitude: PropTypes.number,
    latitude: PropTypes.number,
    zoom: PropTypes.number,
    pitch: PropTypes.number,
    bearing: PropTypes.number
  }),
  mapStyle: PropTypes.shape({
    styleUrl: PropTypes.string
  }),
  getRootState: PropTypes.func.isRequired,
  dispatch: PropTypes.func
}

_DotGL.defaultProps = {
  mapState: {
    longitude: 0,
    latitude: 0,
    zoom: 10,
    pitch: 0,
    bearing: 0
  },
  mapStyle: {
    styleUrl: 'https://demotiles.maplibre.org/style.json'
  },
  getRootState: state => state?.dotGl ?? {},
  dispatch: () => null
}

const mapStateToProps = (state, ownProps) => ({
  mapState: ownProps.getRootState(state)?.mapState ?? {},
  mapStyle: ownProps.getRootState(state)?.mapStyle ?? {}
})

const mapDispatchToProps = dispatch => ({ dispatch })

export const DotGL = connect(mapStateToProps, mapDispatchToProps)(_DotGL)