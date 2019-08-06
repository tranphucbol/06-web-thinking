import React from 'react'
import PropTypes from 'prop-types'

const Tile = ({status, value}) => (
    <div className="tile">
        {value}
    </div>
)

Tile.propTypes = {
    value: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired
}

export default Tile