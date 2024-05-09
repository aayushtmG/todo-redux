import { useState } from "react"
import "./App.css"
import { useDispatch, useSelector } from "react-redux"
import addTodo from "./state/features/todoSlice.js"

function App() {
  const btnStyle = {
    background: "blue",
  }
  const inputStyle = {
    padding: 10,
    margin: 10,
  }
  const [input, setInput] = useState("")
  const dispatch = useDispatch()
  const addNewTodo = () => {
    dispatch(addTodo(input))
  }

  return (
    <>
      <h1>Todo App using redux</h1>
      <div>
        <input
          type="text"
          style={inputStyle}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new todo here"
        />
        <button style={btnStyle} onClick={addNewTodo}>
          Add
        </button>
      </div>
      <div>
        <p></p>
      </div>
    </>
  )
}

export default App
