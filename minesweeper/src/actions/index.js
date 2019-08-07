export const generateBoard = ({size, bomb}) => ({
    type: 'GENERATE',
    size,
    bomb
})

export const openTile = id => ({
    type: 'OPEN',
    id
})