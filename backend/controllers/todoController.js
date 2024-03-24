const { todo } = require("../models/Todo");




const createTodo=async(req,res)=>{
    const {title,description}=req.body;
    const {user}=req.headers
    // console.log(user);
    try{
        const newtodo=new todo({title,description,user});
        await newtodo.save();
        res.json({msg:"Todo created",status:"success",data:newtodo});
    }catch (error) {
        
        res.status(500).json({ status: 500, error: "Todo create failed" });
      }
}

const getTodo=async(req,res)=>{
    try{
        
        const list=await todo.find({user:req.headers.user})
        res.json({data:list,status:"success"});
    }catch (error) {
        res.json({msg:error.message,status:"error"});       
      }
}

const updateTodo=async(req,res)=>{
    const {id}=req.params;
    const data={title:req.body.title,description:req.body.description,done:req.body.done,user:req.headers.user};
    try{
        const update=await todo.findByIdAndUpdate(id,data)
        res.json({msg:"Todo has been updated",status:"success"});
        
    }catch (error) {
        res.json({msg:error.message,status:"error"});       
      }
}

const deleteTodo=async(req,res)=>{
    const {id}=req.params;
   
    try{
        const deletetodo=await todo.findByIdAndDelete(id)
        res.json({msg:"Todo has been Deleted",status:"success"});
        
    }catch (error) {
        res.json({msg:error.message,status:"error"});       
      }
}

module.exports={createTodo,getTodo,updateTodo,deleteTodo}