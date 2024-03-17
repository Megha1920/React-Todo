import { useState } from 'react';
import './App.css';

function App() {
  const [newTask,setNewTask]=useState("");
  const [todoList,setToDoList]=useState([])
  
  const handleChange = (event) => {

    setNewTask(event.target.value);
  };
  const addTask=()=>{
    const task={
      id: todoList.length===0 ? 1:todoList[todoList.length-1].id+1,
      taskname:newTask
    };
    const newToDoList=[...todoList,task]
    setToDoList(newToDoList)
  };
  const deleteTask=(id)=>{
    
    setToDoList(todoList.filter((task)=>task.id !== id ));
  };
  return (
    <div className='App'>
        <div className='addTask'>
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
        </div>
    <div className='list'>
      {todoList.map((task) => {
      return (
        <div>
        <h1>{task.taskname}</h1>
        <button onClick={()=>deleteTask(task.id)}>X</button>
        </div>);
      })}
    </div>
    
    
    </div>
  );
}

export default App;
