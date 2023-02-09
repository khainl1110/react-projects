import Todo from './Todo'
import './index.css'
import Form from './Form'
import FilterButton from './FilterButton'
import { useState } from 'react'
export default function TodoPage() {
    const [tasks, setTasks] = useState([
        { id: "todo-0", name: "Eat", completed: true },
        { id: "todo-1", name: "Sleep", completed: false },
        { id: "todo-2", name: "Repeat", completed: false }
    ]);

    const taskList = tasks.map((task) => (
        <Todo 
            id = {task.id} 
            name = {task.name} 
            completed = {task.completed} 
            key = {task.id}
        />
    ))

    const addTask = (name) => {
        const newTask = {id: "id", name, completed: false};
        setTasks([...tasks, newTask]);
    }

    return(
        <div className='todoapp stack-large'>
            <h1>To do list index</h1>
            <Form addTask={addTask}/>
            <div className='filters btn-group stack-exception'>
                <FilterButton />
                <FilterButton />
                <FilterButton />
            </div>
            <h2 id = "list-heading">3 tasks remaining</h2>
            <ul role = "list"
                className='todo-list stack-large stack-exception'
                aria-labelledby='list-heading'
            >
                {taskList}
            </ul>
        </div>
    )
}