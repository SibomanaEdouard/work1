
import React from "react";

//this is the function to make list
const TodoList=({todo,setTodo,editTodo,setEditTodo})=>{

    //function to handle change

    const handleChanges=(e)=>{
        e.preventDefault();

    }
    //funtion to delete

    const HandleDelete=({id})=>{
setTodo(todo.filter((todo)=>todo.id !==id));
    }
 //function to handle complete
    const HandleComplete = ({ id }) => {
        setTodo(
          todo.map((item) => {
            if (item.id === id) {
              return { ...item, completed: !item.completed };
            }
            return item;
          })
        );
      };
 
//function to edit todo

const HandleEdit = ({ id }) => {
    const foundTodo = todo.find((item) => item.id === id);
    setEditTodo(foundTodo);
  };
    return(
        <div>

{todo.map((todos)=>{
    return(
        
    <li className="text-primary todolist" key={todos.id}>
        <input
        
       type="text" 
       
       value={todos.title}
       className={`list ${todo.completed ? "completed":""}`}
       onChange={handleChanges}
       />
       <div className="display-6 p-3 icons icons1">

       <button className="button-complete-task-button btn btn-secondary" onClick={()=>HandleComplete(todos)}>
  <i className="fa fa-check-circle"></i>
</button>

<button className="button-edit-task-button btn btn-primary"  onClick={()=>HandleEdit(todos)}>
  <i className="fa fa-edit"></i>
</button>

<button className="button-delete-task-button btn btn-danger" onClick={()=>HandleDelete(todos)}>
  <i className="fa fa-trash"></i>
</button>

       </div>
    </li>
)})}
        </div>
    )
}
export default TodoList;
