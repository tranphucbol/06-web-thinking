export const generateBoard = ({size, bomb}) => ({
    type: 'GENERATE',
    size,
    bomb
})

export const openTile = id => ({
    type: 'OPEN',
    id
})

export const flagTile = id => ({
    type: 'FLAG',
    id
})