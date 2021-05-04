import React, { useEffect, useState } from 'react'

import {
    AppHeader,
    ItemAddForm,
    SearchPanel,
    ItemStatusFilter,
    TodoList
} from './components'

import {
    transformation,
    createTodoItem,
    toggleProperty,
    filterPanel,
    searchItem
} from './helpers'

import './App.css'

import firebase from 'firebase'

const App = () => {
    const [todoData, setTodoData] = useState([]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const listRef = firebase.database().ref('list');

    useEffect(() => {
        listRef.on('value', item => setTodoData(transformation(item.val())));
    }, []);

    const deleteItem = (id) => {
        listRef.child(id).remove();
    };

    const addItem = (text) => {
        const newItem = createTodoItem(text);
        listRef.push(newItem);
    };

    const onToggleImportant = (id) => {
        setTodoData(toggleProperty(todoData, id, 'important'));
    };

    const onToggleDone = (id) => {
        setTodoData(toggleProperty(todoData, id, 'done'));
    };

    const onSearchChange = (term) => {
        setTerm(term);
    };

    const onFilterChange = (filter) => {
        setFilter(filter);
    };

    const onChangeLabel = (id, value) => {
        listRef.update({ [id]: value });
    };

    const visibleItems = filterPanel(searchItem(todoData, term), filter),
        doneCount = todoData.filter(it => it.done).length,
        todoCount = todoData.length - doneCount;

    return (
        <div className='todo-app'>
            <AppHeader
                toDo={todoCount}
                done={doneCount} />
            <div className='top-panel'>
                <SearchPanel onSearchChange={onSearchChange} />
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={onFilterChange} />
            </div>
            <TodoList
                todos={visibleItems}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
                onChangeLabel={onChangeLabel} />
            <ItemAddForm onItemAdded={addItem} />
        </div>
    );
}

export default App