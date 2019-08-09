import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import { generateBoard } from '../actions'


// const GenerateForm = ({dispatch}) => {
//     let inputSize
//     let inputBomb

//     return (
//             <form className="generate-form"
//                 onSubmit={e => {
//                     e.preventDefault()
//                     if(!inputSize.value.trim() && inputBomb.value.trim()) {
//                         return
//                     }
//                     let size = parseInt(inputSize.value)
//                     let bomb = parseInt(inputBomb.value)
//                     // console.log(generateBoard())
//                     dispatch({type: 'GENERATE', size, bomb})
//                 }}
//             >
//                 <label>Size</label>
//                 <input ref={node => (inputSize = node)} />
//                 <label>Bomb</label>
//                 <input ref={node => (inputBomb = node)} />
//                 <button className="btn-game" type="submit">Generate</button>
//             </form>
//     )
// }

class GenerateForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSize: 8,
            inputBomb: 8
        }
    }

    handleSizeChange = (e) => {
        this.setState({inputSize: e.target.value})
    }

    handleBombChange = (e) => {
        this.setState({inputBomb: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // if(!this.state.inputSize.trim() && !this.state.inputBomb.trim()) {
           
        // }
        let size = parseInt(this.state.inputSize)
        let bomb = parseInt(this.state.inputBomb)
        this.props.sumbitForm(size, bomb)
    }

    render() {
        return (
            <form className="generate-form"
                onSubmit={this.handleSubmit}>
                <label>Size</label>
                <input type="number" min="1" value={this.state.inputSize} onChange={this.handleSizeChange}/>
                <label>Bomb</label>
                <input type="number" min="1" value={this.state.inputBomb} onChange={this.handleBombChange} />
                <button className="btn-game" type="submit">Generate</button>
            </form>
        )
    }
}

GenerateForm.propTypes = {
    sumbitForm: PropTypes.func.isRequired
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
    sumbitForm: (size, bomb) => dispatch({type: 'GENERATE', size, bomb})
})


export default connect(mapStateToProps, mapDispatchToProps)(GenerateForm)