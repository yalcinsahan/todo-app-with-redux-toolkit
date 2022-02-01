import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Homepage from './pages/homepage/Homepage'
import { fetchTasks } from './redux/slices/task-slice';

function App() {

    const dispatch = useDispatch()
    const status = useSelector(state => state.tasks.status)

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks())
        }
    }, [dispatch, status]);

    return <div>
        <Homepage />
    </div>;
}

export default App;
