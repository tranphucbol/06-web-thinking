import React from 'react'
import PropTypes from 'prop-types'
import {Status} from '../reducers/boards'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

function show({status, value}) {
    if(status === Status.HIDE) {
        return ''
    } else if (status === Status.FLAG) {
        return (<FontAwesomeIcon icon={faFlag} color="#033" />)
    } else {
        if(value === -1) {
            return (<FontAwesomeIcon icon={faBomb} />)
        } else {
            return (value === 0 ? '' : value)
        }
    }
}

function showClass({status, value}) {
    if(status === Status.HIDE) {
        return 'tile'
    } else if (status === Status.FLAG) {
        return 'tile flag'
    }
    else {
        return value === -1 ? 'tile open bomb' : 'tile open'
    }
}

// const Tile = ({status, value, onClick, onFlag}) => (
//     <div className={showClass({status, value})} onClick={onClick} onContextMenu={onFlag}>
//         {show({status, value})}
//     </div>
// )

class Tile extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    
    handleClick = (e) => {
        e.preventDefault()
        console.log(e)
        if(e.type === 'click')
            this.props.onClick()
        else if(e.type === 'contextmenu') 
            this.props.onFlag()
    }
    
    render() {
        return (
            <div className={showClass({status: this.props.status, value: this.props.value})} onContextMenu={this.handleClick} onClick={this.handleClick}>
                {show({status: this.props.status, value: this.props.value})}
            </div>
        )
    }
}

Tile.propTypes = {
    value: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onFlag: PropTypes.func.isRequired
}

export default Tile