import React from 'react'
import { connect } from 'react-redux'
// import { generateBoard } from '../actions'


const GenerateForm = ({dispatch}) => {
    let inputSize
    let inputBomb

    return (
            <form className="generate-form"
                onSubmit={e => {
                    e.preventDefault()
                    if(!inputSize.value.trim() && inputBomb.value.trim()) {
                        return
                    }
                    let size = parseInt(inputSize.value)
                    let bomb = parseInt(inputBomb.value)
                    // console.log(generateBoard())
                    dispatch({type: 'GENERATE', size, bomb})
                }}
            >
                <label>Size</label>
                <input ref={node => (inputSize = node)} />
                <label>Bomb</label>
                <input ref={node => (inputBomb = node)} />
                <button className="btn-game" type="submit">Generate</button>
            </form>
    )
}

export default connect()(GenerateForm)