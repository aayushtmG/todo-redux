import { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
//@ts-ignore
import { addTodo } from "./state/features/todoSlice.js"
import Todos from "./Todos.js"
//@ts-ignore
import { updateTodo } from "./state/features/todoSlice.js"

function App() {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const [updateMode, setUpdateMode] = useState(false)
  const addNewTodo = (e: any) => {
    e.preventDefault()
    if (input !== "") dispatch(addTodo(input))
    setInput("")
  }
  const todos = useSelector((state: any) => state.todos)
  const [updatingTodo, setUpdatingTodo] = useState(null)
  const updateTodoEvent = (event: any, id: any) => {
    event.stopPropagation()
    setUpdateMode(true)
    setUpdatingTodo(id)
  }
  const updateSubmit = (event: any) => {
    event.preventDefault()
    setUpdateMode(false)
    if (input !== "") dispatch(updateTodo({ id: updatingTodo, text: input }))

    setInput("")
  }
  return (
    <>
      <main className="flex flex-col gap-4">
        <h1>Todo App using redux</h1>
        <form className="space-x-3">
          <input
            type="text"
            id="todoInput"
            className="p-4 focus:outline-none border-2 rounded-md focus:border-blue-600"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter new todo here"
          />
          {updateMode ? (
            <button className="bg-blue-600" onClick={() => updateSubmit(event)}>
              Update
            </button>
          ) : (
            <button className="bg-blue-600" onClick={addNewTodo}>
              Add
            </button>
          )}
        </form>
        <Todos todos={todos} updateTodo={updateTodoEvent}></Todos>
      </main>
    </>
  )
}

export default App
