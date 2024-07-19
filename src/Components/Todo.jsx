import { useState } from "react";
import {addTodo,removeTodo } from "../reducer/todoSlice"
import {useSelector,useDispatch} from "react-redux"

const Todo = () => {
  const todos = useSelector(state=>state.todos);

const dispatch = useDispatch();
const [inputData, setInputData] = useState("");
  return (
    <div className="flex justify-center m-20 ">
    <div className=" grid-cols-3 border-2 border-black w-80 rounded-md p-8 bg-slate-200">
      <h1 className="text-xl m-3">Add Your list here ✔️</h1>
      <div className="relative">
        <input
          type="text"
          className="border-2 border-black p-1 rounded-sm"
          placeholder="📝Add Items..."
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <a className="inline absolute right-9 top-1 cursor-pointer" 
        onClick={()=>dispatch(addTodo(inputData),setInputData(''))}>
          {" "}
          ➕{" "}
        </a>
      </div>
      <ul className="show items flex flex-col gap-4 mt-4 ml-[1.85rem]">
        {
          todos.map((todo)=>{
            return(
              <li className="flex  relative" key={todo.id}>
              <p  className="border-2 border-black p-1 rounded-sm w-48 text-left pl-2" >{todo.text}</p>
              <p  className="absolute right-9 top-1 cursor-pointer"  onClick={()=>dispatch(removeTodo(todo.id))}>❌</p>
         </li>
            )

           })
        } 
      </ul>
    </div>
  </div>
  )
}

export default Todo
