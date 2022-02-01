import './input.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTask, changeText, updateTask } from '../../redux/slices/task-slice';

function Input() {

    const dispatch = useDispatch()
    const inputObject = useSelector((state) => state.tasks.input)

    const addAndEditButton = () => {
        if (inputObject._id) {
            dispatch(updateTask(inputObject))
        }
        else {
            dispatch(addTask({ text: inputObject.text }))
        }
    }

    return <div className='main'>
        <input
            type="text"
            placeholder='add todo'
            className='todo-input'
            value={inputObject.text}
            onChange={(e) => dispatch(changeText({ _id: inputObject._id, text: e.target.value }))}
        />
        <button
            className={inputObject._id ? 'edit-button' : 'add-button'}
            onClick={() => addAndEditButton()}
        >{inputObject._id ? 'edit' : 'add'}</button>
    </div>;
}

export default Input;
