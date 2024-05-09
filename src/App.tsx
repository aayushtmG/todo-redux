import { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./state/features/todoSlice.js"
import Todos from "./Todos.js"

function App() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const addNewTodo = (e: any) => {
    e.preventDefault()
    if (input !== "") dispatch(addTodo(input))
    setInput("")
  }
  const todos = useSelector((state: any) => state.todos)
  return (
    <>
      <main className="flex flex-col gap-4">
        <h1>Todo App using redux</h1>
        <form onSubmit={addNewTodo} className="space-x-3">
          <input
            type="text"
            className="p-4 focus:outline-none border-2 rounded-md focus:border-blue-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter new todo here"
          />
          <button className="bg-blue-600">Add</button>
        </form>
        <Todos todos={todos}></Todos>
      </main>
    </>
  )
}

export default App
