import React, { useState } from 'react'

import './ItemAddForm.css'

const ItemAddForm = ({ onItemAdded }) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault()
        onItemAdded(label)
        setLabel('');
    };

    return (
        <form
            className='item-add-form d-flex'
            onSubmit={onSubmit}>
            <input
                type='text'
                className='form-control'
                onChange={onLabelChange}
                placeholder='new add'
                value={label} />
            <button className='btn btn-outline-secondary'>
                Add
            </button>
        </form>
    );
}

export default ItemAddForm;