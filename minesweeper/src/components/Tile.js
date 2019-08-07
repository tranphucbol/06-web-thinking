import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'

function show({status, value}) {
    if(!status) {
        return ''
    } else {
        if(value === -1) {
            return (<FontAwesomeIcon icon={faBomb} />)
        } else {
            return (value === 0 ? '' : value)
        }
    }
}

function showClass({status, value}) {
    if(!status) {
        return 'tile'
    } else {
        return value === -1 ? 'tile open bomb' : 'tile open'
    }
}

const Tile = ({status, value, onClick}) => (
    <div className={showClass({status, value})} onClick={onClick}>
        {show({status, value})}
    </div>
)

Tile.propTypes = {
    value: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Tile