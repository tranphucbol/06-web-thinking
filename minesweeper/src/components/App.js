import React from 'react'
import BoardVisible from '../containers/VisibleBoard'
import GenerateForm from '../containers/GenerateForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import PlayMode from '../containers/PlayMode';

const App = () => (
    <div className="wrapper-center">
        <div className="title-game">
            <h1>Minesweeper <FontAwesomeIcon icon={faBomb}/></h1>
            <PlayMode />
        </div>
        <GenerateForm />
        <BoardVisible />
    </div>
)

export default App