const transformation = (obj) => {
    let data = [];
    if (obj) {
        for (let [key, value] of Object.entries(obj)) {
            value.id = key;
            data.push(value);
        }
    }

    return data;
};

const createTodoItem = (label) => {
    return {
        label,
        important: false,
        done: false,
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

export {
    transformation,
    createTodoItem,
    toggleProperty,
    filterPanel,
    searchItem
}