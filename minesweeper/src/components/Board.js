import React from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile'

const generateBoard = (size, tiles, onTileClick) => {
    let board = [];
    for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = 0; j < size; j++) {
            let k = i * size + j;
            row.push(<Tile key={k} status={tiles[k].status} value={tiles[k].value} onClick={() => onTileClick(k)} />)
        }
        board.push(
            <div key={i} className="row">
                {row}
            </div>
        );
    }
    return board;
}

const Board = ({size, bomb, tiles, onTileClick}) => (
    <div className="board">
        {generateBoard(size, tiles, onTileClick)}
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
    ),
    onTileClick: PropTypes.func.isRequired
}

export default Board