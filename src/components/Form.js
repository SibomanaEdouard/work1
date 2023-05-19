import React from "react";
import { v4 as uuidv4 } from "uuid";

// This is the form component to receive the inputs
const Form = ({ input, setInput, todo, setTodo, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todo.map((todos) =>
      todos.id === id ? { ...todos, title, completed } : todos
    );
    setTodo(newTodo);
    setEditTodo("");
  };

  // Function to handle changes
  const handleChanges = (e) => {
    setInput(e.target.value);
  };

  // Function to handle form submission and send data to db
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (input) {
      if (!editTodo) {
        setTodo([
          ...todo,
          { id: uuidv4(), title: input, completed: false }
        ]);
        setInput("");
        console.log("The submission is:", input);
        //this is to tetch data to database
        try{
        const Response= await fetch("http://localhost:5000",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(input)
        });
        if(Response.ok){
          alert("The data is saved to db successfully");
          setInput("");
        }
        }catch(error){
          console.log(error);
          alert("something went wrong");
        }
       
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }
    } else {
      alert("Please add the name of the item");
    }
  };

  // Render the form
  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="align-items-center p-3 inputsub form-expand-md">
        <input
          name="list"
          id="list"
          value={input}
          onChange={handleChanges}
        />
        <button type="submit" className="btn btn-primary text-dark btn-block mb-1 button1">{editTodo ? "EDIT TASK":"ADD TASK"}</button>
 
      </form>
    </div>
  );
};

export default Form;


