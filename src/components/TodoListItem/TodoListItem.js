import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './TodoListItem.css'

const TodoListItem = ({ id, label, onDeleted, important, done, onToggleImportant, onToggleDone, onChangeLabel }) => {
  const [text, setText] = useState(label);
  const clickRef = useRef();

  const handleClick = (e) => {
    if (!e.path.includes(clickRef.current)) {
      setText(label);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClick)
  }, [])

  const changeText = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    if (e.key === 'Enter') {
      onChangeLabel(id, { done, important, label: text });
      clickRef.current.blur();
    }
  };

  let classNames = 'todo-list-item'
  if (done) {
    classNames += ' done'
  }
  if (important) {
    classNames += ' important'
  }

  return (
    <div className={classNames}>
      <input
        ref={clickRef}
        className='todo-list-item-label'
        onChange={changeText}
        onKeyPress={onSubmit}
        value={text}>
      </input>

      <button type='button'
        className='btn btn-outline-danger btn-sm float-right'
        onClick={onDeleted}>
        <i className='fa fa-trash-o' />
      </button>

      <button type='button'
        className='btn btn-outline-success btn-sm float-right'
        onClick={onToggleDone}>
        <i className='fa fa-exclamation' />
      </button>

      <button
        type='button'
        className='btn btn-outline-info btn-sm float-right'
        onClick={onToggleImportant}>
        <i className="fa fa-edit"></i>
      </button>
    </div>
  );

}

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  important: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  onToggleImportant: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onToggleDone: PropTypes.func.isRequired,
  onChangeLabel: PropTypes.func.isRequired,
};

export default TodoListItem