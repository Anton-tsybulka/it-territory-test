import React, { useEffect, useState } from 'react'

import './SearchPanel.css'

const SearchPanel = ({ onSearchChange }) => {
    const [term, setTerm] = useState('');

    const changeInputValue = (e) => {
        setTerm(e.target.value);
    };

    useEffect(() => onSearchChange(term), [term]);

    return (
        <form>
            <input type="text"
                className="form-control search-input"
                placeholder='Search'
                value={term}
                onChange={changeInputValue}></input>
        </form>
    );
}

export default SearchPanel;