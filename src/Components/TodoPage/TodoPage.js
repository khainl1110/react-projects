import Todo from './Todo'
import './index.css'
import Form from './Form'
import FilterButton from './FilterButton'
import { useState } from 'react'
import {nanoid} from "nanoid";

const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
}

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function TodoPage() {

    const [filter, setFilter] = useState('All');

    const [tasks, setTasks] = useState([
        { id: "todo-0", name: "Eat", completed: true },
        { id: "todo-1", name: "Sleep", completed: false },
        { id: "todo-2", name: "Repeat", completed: false }
    ]);

    const deleteTask = (id) => {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    const addTask = (name) => {
        const newTask = {id: `todo-${nanoid()}`, name, completed: false};
        setTasks([...tasks, newTask]);
    }

    const toggleTaskCompleted = (id) => {
        const updatedTasks = tasks.map(task => {
            if (id === task.id)
                return {...task, completed: !task.completed}
            return task;
        })
        setTasks(updatedTasks)
    }

    const editTask = (id, newName) => {
        const editedTaskList = tasks.map(task => {
            if(id === task.id)
                return {...task, name: newName}
            return task;
        })
        setTasks(editedTaskList)
    }

    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map((task) => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
        />
        ));

    const filterList = FILTER_NAMES.map((name) => (<FilterButton key = {name} name = {name} isPressed = {name=== filter} setFilter = {setFilter} />));

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length}  ${tasksNoun} remaining`;
    
    return(
        <div className='todoapp stack-large'>
            <h1>To do list index</h1>
            <Form addTask={addTask}/>
            <div className='filters btn-group stack-exception'>
                {filterList}
                
            </div>
            <h2 id = "list-heading"> {headingText}</h2>
            <ul role = "list"
                className='todo-list stack-large stack-exception'
                aria-labelledby='list-heading'
            >
                {taskList}
            </ul>
        </div>
    )
}