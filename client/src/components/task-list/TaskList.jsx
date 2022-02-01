import './task-list.css'
import React from 'react';
import Task from '../task/Task';
import { useSelector } from 'react-redux';

function TaskList() {

    const taskList = useSelector((state) => state.tasks.tasks)

    return <div className='task-list'>
        {taskList.map((item) => <Task task={item} key={item._id} />)}
    </div>;
}


export default TaskList;
