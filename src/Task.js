export const Task=(props)=>{
    return(
        <div 
        className="task"
        style={{backgroundColor:props.completed?"green":"yellow"}}
        >
        <h1>{props.taskname}</h1>
        <button onClick={()=>props.completeTask(props.id)}>update</button>
        <button onClick={()=>props.deleteTask(props.id)}>X</button>

        </div>
    );
}