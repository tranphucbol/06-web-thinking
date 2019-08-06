import React from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile'

const generateBoard = (size, tiles) => {
    let board = [];
    for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = 0; j < size; j++) {
            let k = i * size + j;
            row.push(<Tile status={tiles[k].status} value={tiles[k].value} />)
        }
        board.push(
            <div className="row">
                {row}
            </div>
        );
    }
    return board;
}

const Board = ({size, bomb, tiles}) => (
    <div className="board">
        {generateBoard(size, tiles)}
    </div>
)

Board.propTypes = {
    size: PropTypes.number.isRequired,
    bomb: PropTypes.number.isRequired,
    tiles: PropTypes.arrayOf(
        PropTypes.shape({
            status: PropTypes.bool.isRequired,
            value: PropTypes.number.isRequired
        })
    )
}

export default Board