import './homepage.css'
import React from 'react';
import Input from '../../components/input/Input'
import TaskList from '../../components/task-list/TaskList'

function Homepage() {
    return <div className='homepage'>

        <Input />
        <TaskList />

    </div>;
}

export default Homepage;
