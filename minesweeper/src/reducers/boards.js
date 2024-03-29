const generate = (size, bomb, mode) => {
    let tiles = [];
    for(let i = 0; i < size * size; i++)
        tiles.push({
            status: mode ? Status.OPEN : Status.HIDE,
            value: 0
        });
    if(bomb > size * size) {
        bomb = size * size
    }
    for(let i = 0; i < bomb; i++) {
        generateBomb(tiles);
    }
    
    generateNumber(tiles);
    return {size, bomb, tiles, mode};
}

const generateBomb = (tiles) => {
    let index = Math.floor(Math.random() * tiles.length);
    while(tiles[index].value === -1) {
        index = Math.floor(Math.random() * tiles.length);
    }
    tiles[index].value = -1;
}

const x = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
const y = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

const generateNumber = (tiles) => {
    const size = Math.floor(Math.sqrt(tiles.length));
    for(let k = 0; k < tiles.length; k++) {
        if(tiles[k].value !== -1) {
            let count = 0;
            let i = Math.floor(k / size);
            let j = k % size;
            for(let t = 0; t < 9; t++) {
                let ti = i + x[t];
                let tj = j + y[t];
                if(ti >= 0 && ti < size && tj >= 0 && tj < size && tiles[ti * size + tj].value === -1) {
                    count++;
                }
            }
            tiles[k].value = count;
        }
    }
}

const openTile = (tiles, id) => {
    if(tiles[id].value === -1) {
        for(let i = 0; i < tiles.length; i++) {
            tiles[i].status = Status.OPEN
        }
    } else if (tiles[id].value === 0) {
        let size = Math.floor(Math.sqrt(tiles.length))
        let i = Math.floor(id / size)
        let j = id % size
        tiles[id].status = Status.OPEN
        for(let k = 0; k < 9; k++) {
            let ik = i + x[k]
            let jk = j + y[k]
            if(ik >= 0 && ik < size && jk >= 0 && jk < size && tiles[ik * size + jk].status !== Status.OPEN) {
                if(tiles[ik * size + jk].value === 0)
                    openTile(tiles, ik * size + jk)
                else if (tiles[ik * size + jk].value > 0) {
                    tiles[ik* size + jk].status = Status.OPEN
                }
            }
        }
    } else {
        tiles[id].status = Status.OPEN
    }
    return tiles
}

const showAll = (tiles, mode) => {
    for(let i = 0; i < tiles.length; i++) {
        tiles[i].status = mode ? Status.OPEN : Status.HIDE
    }
    return tiles
}

const flagTile = (tiles, id) => {
    if(tiles[id].status === Status.FLAG) {
        tiles[id].status = Status.HIDE
    } else if(tiles[id].status === Status.HIDE) {
        tiles[id].status = Status.FLAG
    }
    return tiles
}

const boards = (state = generate(8, 8, false), action) => {
    switch (action.type) {
        case 'GENERATE':
            return generate(action.size, action.bomb, state.mode);
        case 'OPEN': {
            let newState = Object.assign({}, state, {
                tiles: openTile([...state.tiles], action.id)
            })
            return newState
        }
        case 'FLAG': {
            let newState = Object.assign({}, state, {
                tiles: flagTile([...state.tiles], action.id)
            })
            return newState
        }
        case 'MODE':
            return Object.assign({}, state, {tiles: showAll([...state.tiles], !state.mode), mode: !state.mode})
        default:
            return state
    }
}

export default boards

export const Status = {
    HIDE: 0,
    OPEN: 1,
    FLAG: 2
}