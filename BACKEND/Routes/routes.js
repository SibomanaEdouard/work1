const mongoose=require("mongoose");
const express=require("express");
const app=express();
const Tasks=require("../models/tasks");

app.get("/",(req,res)=>{
    res.send("fine");
})
app.post("/",async(req,res)=>{
    const input=req.body;
    try{
        const newTask=  await new Tasks({
          task:input 
        })
        const saveTask= await newTask.save();
        if(saveTask){
           
            console.log("The task was added successfully");
            res.send("The task was saved successfully ");
        }
        else{
            res. send("The task was not saved");
        }
    }catch(error){
        console.log(error);
        res.status(400).json({"message":"sorry something went wrong"});
    }

    
})

module.exports=app;