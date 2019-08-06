const generate = (size, bomb) => {
    let tiles = [];
    for(let i = 0; i < size * size; i++)
        tiles.push({
            status: false,
            value: 0
        });
    for(let i = 0; i < bomb; i++) {
        generateBomb(tiles, bomb);
    }
    
    generateNumber(tiles);
    console.log(tiles);
    return {size, bomb, tiles};
}

const generateBomb = (tiles, bomb) => {
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

const boards = (state = generate(8, 8), action) => {
    switch (action) {
        default:
            return state
    }
}

export default boards