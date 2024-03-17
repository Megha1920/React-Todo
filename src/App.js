import { useState } from 'react';
import './App.css';
import {Task} from "./Task"
function App() {
  const [newTask,setNewTask]=useState("");
  const [todoList,setToDoList]=useState([])
  
  const handleChange = (event) => {

    setNewTask(event.target.value);
  };
  const addTask=()=>{
    const task={
      id: todoList.length===0 ? 1:todoList[todoList.length-1].id+1,
      taskname:newTask,
      completed:false
    };
    const newToDoList=[...todoList,task]
    setToDoList(newToDoList)
  };
  const completeTask=(id)=>{
    setToDoList(
      todoList.map((task)=>{
        if (task.id===id){
          return {...task,completed:true};
        }
        else{
          return task;
        }
      })
    );
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
      return <Task taskname={task.taskname} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask}/>;
      })}
    </div>
    
    
    </div>
  );
}

export default App;
