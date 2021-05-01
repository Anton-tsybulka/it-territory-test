import React, { useState } from 'react'

import AppHeader from './components/AppHeader/AppHeader'
import ItemAddForm from './components/ItemAddForm/ItemAddForm'
import SearchPanel from './components/SearchPanel/SearchPanel'
import ItemStatusFilter from './components/ItemStatusFilter/ItemStatusFilter'
import TodoList from './components/TodoList/TodoList'

import './App.css'

let ind = 100;
const createTodoItem = (label) => {
    return {
        label,
        import: false,
        done: false,
        id: ind++
    }
};

const toggleProperty = (arr, id, propName) => {
    const indx = arr.findIndex(it => it.id === id)

    const oldItem = arr[indx]
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, indx), newItem, ...arr.slice(indx + 1)]

};

const filterPanel = (items, filter) => {
    switch (filter) {
        case 'all':
            return items
        case 'active':
            return items.filter(it => !it.done)
        case 'done':
            return items.filter(it => it.done)
        default:
            return items
    }
};

const searchItem = (items, term) => {
    if (term.length === 0) return items

    return items.filter(it => it.label.toLowerCase().includes(term.toLowerCase()))
};

const App = () => {
    const [todoData, setTodoData] = useState([
        createTodoItem('Drink Coffee'),
        createTodoItem('Learn React'),
        createTodoItem('Create App')
    ]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const deleteItem = (id) => {
        setTodoData(todoData.filter(it => it.id !== id))
    };

    const addItem = (text) => {
        const newItem = createTodoItem(text);
        setTodoData([...todoData, newItem]);
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

    const visibleItems = filterPanel(searchItem(todoData, term), filter),
        doneCount = todoData.filter(it => it.done).length,
        todoCount = todoData.length - doneCount;

    return (
        <div className='todo-app'>
            <AppHeader
                toDo={todoCount}
                done={doneCount} />
            <div className='top-panel d-flex'>
                <SearchPanel onSearchChange={onSearchChange} />
                <ItemStatusFilter
                    filter={filter}
                    onFilterChange={onFilterChange} />
            </div>
            <TodoList
                todos={visibleItems}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone} />
            <ItemAddForm onItemAdded={addItem} />
        </div>
    );
}

export default App;