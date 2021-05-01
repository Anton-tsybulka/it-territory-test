import React from 'react'

import './ItemStatusFilter.css'

const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

const ItemStatusFilter = ({ filter, onFilterChange }) => {
    const renderButtons = buttons.map(({ name, label }) => {
        const clazz = (filter === name) ? 'btn-info' : 'btn-outline-secondary'
        return (
            <button
                type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterChange(name)}>
                {label}
            </button>
        )
    });

    return (
        <div className='btn-group'>
            {renderButtons}
        </div>
    );
}

export default ItemStatusFilter;