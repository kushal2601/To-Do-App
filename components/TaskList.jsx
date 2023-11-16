import { useState } from "react";

const TaskList = ({ taskList, handleEditTaskTitle, handleDeleteTask, handleEditTaskStatus }) => {
    const [editIndex, setEditIndex] = useState(-1);
    const [showCompleted , setShowCompleted]  = useState("all");

    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            setEditIndex(-1);
        }
    }

    const filteredTaskList = taskList.filter((task ) => {
        if(showCompleted == "all")return true;
        if(showCompleted == "finished")return true === task.isCompleted;
        if(showCompleted == "pending")return false === task.isCompleted;
    });

    const taskListItems = filteredTaskList.map((task) => {
        return (
            <div key={task.id}>

                {
                    task.id !== editIndex ?
                        <>
                            <input type="checkbox" onChange={(e) => handleEditTaskStatus(e.target.checked, task.id)} checked = {task.isCompleted}/>
                            <input disabled type="text" value={task.taskTitle} />
                            <button onClick={() => { setEditIndex(task.id) }}>Edit</button>
                            <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
                            <br></br>
                        </>
                        :
                        <>
                            <input type="text" value={task.taskTitle} onChange={(e) => handleEditTaskTitle(e.target.value, task.id)} onKeyDown={handleKeyDown} />
                            <button onClick={() => { setEditIndex(-1) }}>Add</button>
                            <br></br>
                        </>
                }
            </div >
        )
    }
    )

    return (
        <>
            <input type="radio" id="all" name="random"  value="all" onClick={(e) => {setShowCompleted(e.target.value)}} defaultChecked/>
            <label htmlFor="all" >All Tasks</label>
            <input type="radio" id="finished" name="random"  value = "finished" onClick={(e) => {setShowCompleted(e.target.value)}}/>
            <label htmlFor="finished" >Completed Tasks</label>
            <input type="radio" id="pending" name="random"  value = "pending" onClick={(e) => {setShowCompleted(e.target.value)}}/>
            <label htmlFor="pending" >Pending Tasks</label>
            {taskListItems}
        </>
    )
}

export default TaskList;