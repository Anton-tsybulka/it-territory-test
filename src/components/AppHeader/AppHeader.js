import React from 'react'
import PropTypes from 'prop-types'

import './AppHeader.css'

const AppHeader = ({ toDo, done }) => {
    return (
        <div className='app-header d-flex'>
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}

AppHeader.propTypes = {
    toDo: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired
};

export default AppHeader