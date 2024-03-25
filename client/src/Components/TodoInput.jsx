import { useState } from "react"

export const TodoInput = ({addData}) =>{
    const [data,setData] = useState("")

    const handleNew = () =>{
        const newTodo ={
            title:data,
            status:false
        }
        addData(newTodo)
        setData("")
    }

    return(
        <div>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
            <button onClick={()=>{handleNew(data)}}>Add Todo</button>
        </div>
    )
}