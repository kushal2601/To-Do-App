import { useState } from "react";
import TaskBar from "./components/TaskBar";
import TaskList from "./components/TaskList";

export default function App() {
    const [taskList, setTaskList] = useState([]);  

    const handleAddTask = (taskTitle) => {
        const newTask = {
            id : taskList.length,
            taskTitle : taskTitle,
            isCompleted : false
        };
        const updatedTaskList = [newTask, ...taskList];
        setTaskList(updatedTaskList);
    }
    
    const handleEditTaskTitle = (updatedTaskTitle, updatedTaskId) => {
        const updatedTaskList = taskList.map((task) => 
            {
                if(task.id == updatedTaskId)task.taskTitle = updatedTaskTitle;
                return task;
            }
        );
        setTaskList(updatedTaskList);
    }
    
    const handleEditTaskStatus = (isCompleted, updatedTaskId) => {
        const updatedTaskList = taskList.map((task) => 
            {
                if(task.id == updatedTaskId)task.isCompleted = isCompleted;
                return task;
            }
        );
        setTaskList(updatedTaskList);
    }

    const handleDeleteTask = ( deletedTaskId) => {
        let index = 0;
        const updatedTaskList = taskList.filter((task ) => task.id!=deletedTaskId).map((task) => {
            task.id = index++;
            return task;
        })
        setTaskList(updatedTaskList);
    }

    

    return (
        <>
            <h1> Welcome to  To-do App</h1>
            <TaskBar  handleAddTask={handleAddTask}  />
            <hr></hr>
            <TaskList taskList = {taskList} handleEditTaskTitle = {handleEditTaskTitle} handleDeleteTask = {handleDeleteTask} handleEditTaskStatus= {handleEditTaskStatus} />
        </>
    )
}