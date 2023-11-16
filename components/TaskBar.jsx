import { useState } from "react";

const TaskBar = ({ handleAddTask }) => {
    const [taskTitle , setTaskTitle] = useState('');

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            handleAddTask(taskTitle );
            setTaskTitle('');
        }
    }
    const handleEdit = (e) => {
        setTaskTitle(e.target.value);
    }
    return (
        <>
            <input type="text" placeholder="Enter your task  here" onChange={handleEdit} value = {taskTitle} onKeyDown={handleKeyDown}></input>
            <button  onClick={()=>{handleAddTask(taskTitle );setTaskTitle('');}}>Add Task</button>
        </>
    )
}
export default TaskBar;