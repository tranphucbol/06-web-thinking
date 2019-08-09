import React from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile'

const generateBoard = (size, tiles, onTileClick, onFlagClick) => {
    let board = [];
    for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = 0; j < size; j++) {
            let k = i * size + j;
            row.push(<Tile key={k} 
                status={tiles[k].status} 
                value={tiles[k].value} 
                onClick={() => onTileClick(k)} onFlag={() => onFlagClick(k)}/>)
        }
        board.push(
            <div key={i} className="row">
                {row}
            </div>
        );
    }
    return board;
}

const Board = ({size, bomb, tiles, onTileClick, onFlagClick}) => (
    <div className="board">
        {generateBoard(size, tiles, onTileClick, onFlagClick)}
    </div>
)

Board.propTypes = {
    size: PropTypes.number.isRequired,
    bomb: PropTypes.number.isRequired,
    tiles: PropTypes.arrayOf(
        PropTypes.shape({
            status: PropTypes.number.isRequired,
            value: PropTypes.number.isRequired
        })
    ),
    onTileClick: PropTypes.func.isRequired,
    onFlagClick: PropTypes.func.isRequired
}

export default Board