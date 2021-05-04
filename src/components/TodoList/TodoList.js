import React from 'react'
import PropTypes from 'prop-types'

import TodoListItem from '../TodoListItem/TodoListItem'

import './TodoList.css'

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, onChangeLabel }) => {
    const elements = todos.map(it => {
        const { id } = it
        return (
            <li
                key={id}
                className='list-group-item'>
                <TodoListItem
                    {...it}
                    onDeleted={() => onDeleted(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                    onChangeLabel={onChangeLabel} />
            </li>
        )
    });

    return (
        <ul className='list-group todo-list'>
            {elements}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggleImportant: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    onChangeLabel: PropTypes.func.isRequired,
};

export default TodoList