import {connect} from 'react-redux'
import {openTile, flagTile} from '../actions/index'
import Board from '../components/Board'

const mapStateToProps = state => {
    return {
        size: state.boards.size,
        bomb: state.boards.bomb,
        tiles: state.boards.tiles
    }
}

const mapDispatchToProps = dispatch => ({
    onTileClick: id => dispatch(openTile(id)),
    onFlagClick: id => dispatch(flagTile(id))
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Board)