import './task.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeText, deleteTask } from '../../redux/slices/task-slice';

function Task({ task }) {

    const dispatch = useDispatch()

    return <div className='task'>
        <p className='todo-name'>{task.text}</p>

        <div className="actions">

            <button
                className="edit"
                onClick={() => dispatch(changeText(task))}
            >
                edit
            </button>

            <button
                className="delete"
                onClick={() => dispatch(deleteTask(task._id))}
            >
                delete
            </button>

        </div>
    </div>;
}

export default Task;
