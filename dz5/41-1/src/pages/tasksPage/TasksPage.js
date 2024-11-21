import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, completeTask, incrementTimeSpent, setActiveTask, editTask } from "../../store/tasksSlice";

const TasksPage = () => {
    const dispatch = useDispatch();
    const { tasks, activeTask } = useSelector((state) => state.tasksReducer);
    const [taskTitle, setTaskTitle] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);
    const [editTaskTitle, setEditTaskTitle] = useState('');

    const handleAddTask = () => {
        if (taskTitle) {
            dispatch(addTask(taskTitle));
            setTaskTitle('');
        }
    };

    const handleEditTask = (taskId, newTitle) => {
        dispatch(editTask({ id: taskId, newTitle }));
        setEditTaskId(null);
    };

    const handleStatusChange = (taskId) => {
        dispatch(setActiveTask(taskId));
    };

    const handleCompleteTask = (taskId) => {
        dispatch(completeTask(taskId));
    };

    useEffect(() => {
        let interval;
        if (activeTask) {
            interval = setInterval(() => {
                dispatch(incrementTimeSpent());
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [activeTask, dispatch]);

    return (
        <div className="tasksContainer">
            <h1>Task Manager with Timer</h1>
            <div className="task-input">
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className="task-list">
                <h2>Task List</h2>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {editTaskId === task.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={editTaskTitle}
                                        onChange={(e) => setEditTaskTitle(e.target.value)}
                                    />
                                    <button onClick={() => handleEditTask(task.id, editTaskTitle)}>
                                        Save
                                    </button>
                                    <button onClick={() => setEditTaskId(null)}>Cancel</button>
                                </div>
                            ) : (
                                <div>
                                    <strong>{task.title}</strong> - <em>{task.status}</em> - Time Spent: {task.timeSpent}
                                    <button onClick={() => setEditTaskId(task.id) && setEditTaskTitle(task.title)}>
                                        Edit
                                    </button>
                                    <button onClick={() => handleStatusChange(task.id)}>
                                        {task.status === 'Active' ? 'Pause' : 'Start'}
                                    </button>
                                    <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TasksPage;
