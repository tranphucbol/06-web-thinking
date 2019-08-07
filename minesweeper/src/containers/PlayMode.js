import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const PlayMode = ({mode, onClick}) => (
    <div>
        <button className="btn-game" onClick={onClick}>{mode ? 'VIEW' : 'PLAY'}</button>
    </div>
)

PlayMode.propTypes = {
    mode: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    mode: state.boards.mode
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch({type: 'MODE'})
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayMode)