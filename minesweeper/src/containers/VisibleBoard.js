import {connect} from 'react-redux'
import Board from '../components/Board'

const mapStateToProps = state => {
    console.log(state);
    return {
        size: state.boards.size,
        bomb: state.boards.bomb,
        tiles: state.boards.tiles
    }
}

const mapDispatchToProps = dispatch => ({

})
  

export default connect(mapStateToProps, mapDispatchToProps)(Board)